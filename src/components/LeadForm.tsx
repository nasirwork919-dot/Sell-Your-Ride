import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { isLeadSubmitError, submitLead } from "@/lib/api";
import { showError, showSuccess } from "@/utils/toast";
import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const currentYear = new Date().getFullYear();

const formSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name").max(80),
  phone: z
    .string()
    .min(6, "Please enter a phone number")
    .max(32)
    .refine((v) => {
      const compact = v.replace(/[\s()-]/g, "");
      return /^\+[1-9]\d{6,14}$/.test(compact) || /^\d{7,15}$/.test(compact);
    }, "Use E.164 (+614XXXXXXXX) or local digits"),
  carBrand: z.string().min(2, "Brand is required").max(40),
  carModel: z.string().min(1, "Model is required").max(40),
  manufacturingYear: z.coerce
    .number()
    .int()
    .min(1980, "Year must be 1980 or later")
    .max(currentYear, `Year can't be later than ${currentYear}`),
  askingPrice: z.coerce.number().int().positive("Enter a valid price"),
  kilometersDriven: z.coerce.number().int().min(0, "KM must be 0 or more"),
  additionalNotes: z.string().max(800).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function LeadForm() {
  const honeypotName = useMemo(() => "website", []);
  const [honeypotValue, setHoneypotValue] = useState("");
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      manufacturingYear: currentYear,
      kilometersDriven: 0,
    },
  });

  async function onSubmit(values: FormValues) {
    setServerError(null);

    const payload = {
      ...values,
      phone: values.phone.replace(/[\s()-]/g, ""),
    };

    const res = await submitLead(payload, { name: honeypotName, value: honeypotValue });

    if (isLeadSubmitError(res)) {
      if (res.fieldErrors) {
        for (const [key, msg] of Object.entries(res.fieldErrors)) {
          if (typeof msg === "string") setError(key as any, { type: "server", message: msg });
        }
      }
      setServerError(res.error ?? "Submission failed");
      showError(res.error ?? "Submission failed");
      return;
    }

    showSuccess("Submitted — we’ll call you shortly.");
    setSuccess(true);
    reset();
  }

  return (
    <Card className="rounded-[5px] border-slate-200 bg-white p-6 shadow-sm md:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
              Get <span className="text-indigo-700">dealer offers</span>
            </h3>

            <div className="inline-flex items-center gap-2 rounded-[5px] border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-[12px] font-semibold text-indigo-950 shadow-sm md:text-sm">
              <ShieldCheck className="h-4 w-4 text-indigo-700" />
              Private intake
            </div>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-[15px]">
            No payments. No public listing. Submit once and we call you within 2 hours.
          </p>
        </div>
      </div>

      {success ? (
        <div className="mt-6 rounded-[5px] border border-emerald-200 bg-emerald-50 p-5">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid h-10 w-10 place-items-center rounded-[5px] bg-white shadow-sm ring-1 ring-emerald-200">
              <CheckCircle2 className="h-5 w-5 text-emerald-700" />
            </span>
            <div className="min-w-0">
              <p className="text-[15px] font-semibold text-emerald-950">Thanks — our team received your details.</p>
              <p className="mt-1 text-sm leading-relaxed text-emerald-900/90">
                We’ll contact you shortly. If you need to add anything, message us on WhatsApp and mention your name.
              </p>

              <Button
                className="mt-4 h-11 rounded-[5px] border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                variant="secondary"
                onClick={() => setSuccess(false)}
              >
                Submit another car
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <form
          className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-6 md:gap-y-6"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <Label htmlFor={honeypotName}>Website</Label>
            <Input
              id={honeypotName}
              value={honeypotValue}
              onChange={(e) => setHoneypotValue(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <Field label="Full name" error={errors.fullName?.message}>
            <Input
              className={inputClassName(errors.fullName?.message)}
              placeholder="Olivia Smith"
              autoComplete="name"
              {...register("fullName")}
            />
          </Field>

          <Field label="Phone (WhatsApp)" error={errors.phone?.message}>
            <Input
              className={inputClassName(errors.phone?.message)}
              placeholder="+61412 345 678"
              inputMode="tel"
              autoComplete="tel"
              {...register("phone")}
            />
          </Field>

          <Field label="Car brand" error={errors.carBrand?.message}>
            <Input
              className={inputClassName(errors.carBrand?.message)}
              placeholder="Toyota"
              autoComplete="off"
              {...register("carBrand")}
            />
          </Field>

          <Field label="Car model" error={errors.carModel?.message}>
            <Input
              className={inputClassName(errors.carModel?.message)}
              placeholder="Corolla Ascent Sport"
              autoComplete="off"
              {...register("carModel")}
            />
          </Field>

          <Field label="Manufacturing year" error={errors.manufacturingYear?.message}>
            <Input
              className={inputClassName(errors.manufacturingYear?.message)}
              placeholder={`${currentYear - 3}`}
              inputMode="numeric"
              {...register("manufacturingYear")}
            />
          </Field>

          <Field label="Asking price" error={errors.askingPrice?.message}>
            <Input
              className={inputClassName(errors.askingPrice?.message)}
              placeholder="18500 (AUD)"
              inputMode="numeric"
              {...register("askingPrice")}
            />
          </Field>

          <Field label="Kilometers driven" error={errors.kilometersDriven?.message}>
            <Input
              className={inputClassName(errors.kilometersDriven?.message)}
              placeholder="124000"
              inputMode="numeric"
              {...register("kilometersDriven")}
            />
          </Field>

          <Field label="Additional notes (optional)" error={errors.additionalNotes?.message} className="md:col-span-2">
            <Textarea
              className={textareaClassName(errors.additionalNotes?.message)}
              placeholder="Condition, service history, rego expiry, accidents, upgrades, urgency…"
              {...register("additionalNotes")}
            />
          </Field>

          {serverError ? (
            <div className="md:col-span-2 rounded-[5px] border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">
              {serverError}
            </div>
          ) : null}

          <div className="md:col-span-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
              By submitting, you agree to be contacted by our team and dealer partners.
            </p>
            <Button
              disabled={isSubmitting}
              className="h-12 rounded-[5px] bg-indigo-600 text-base text-white shadow-sm hover:bg-indigo-700 md:h-[52px] md:px-6 md:text-[15px]"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting…
                </span>
              ) : (
                "Submit details"
              )}
            </Button>
          </div>
        </form>
      )}
    </Card>
  );
}

function inputClassName(hasError?: string) {
  return cn(
    "h-12 rounded-[5px] border border-slate-200 bg-white px-3 text-[15px] text-slate-900 shadow-sm md:h-[52px] md:px-4 md:text-[16px]",
    "placeholder:text-slate-500",
    "focus-visible:ring-2 focus-visible:ring-indigo-500/35 focus-visible:ring-offset-0",
    hasError ? "border-rose-300 focus-visible:ring-rose-500/30" : "",
  );
}

function textareaClassName(hasError?: string) {
  return cn(
    "min-h-28 rounded-[5px] border border-slate-200 bg-white px-3 py-3 text-[15px] leading-relaxed text-slate-900 shadow-sm md:min-h-32 md:px-4 md:text-[16px]",
    "placeholder:text-slate-500",
    "focus-visible:ring-2 focus-visible:ring-indigo-500/35 focus-visible:ring-offset-0",
    hasError ? "border-rose-300 focus-visible:ring-rose-500/30" : "",
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-end justify-between gap-3">
        <Label className="text-sm font-semibold text-slate-900 md:text-[15px]">{label}</Label>
        {error ? <span className="text-xs font-semibold text-rose-600">{error}</span> : null}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}