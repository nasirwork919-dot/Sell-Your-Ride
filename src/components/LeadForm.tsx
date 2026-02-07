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
    }, "Use E.164 (+15551234567) or local digits"),
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
      return;
    }

    setSuccess(true);
    reset();
  }

  return (
    <Card className="rounded-xl border-slate-200 bg-white p-5 shadow-sm md:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
              Get <span className="text-indigo-700">dealer offers</span>
            </h3>

            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-[13px] font-semibold text-indigo-950 shadow-sm md:text-sm">
              <span className="inline-flex items-center rounded-full bg-white px-2 py-0.5 text-indigo-900 ring-1 ring-indigo-200">
                Fast
              </span>
              <span className="h-4 w-px bg-indigo-200" aria-hidden="true" />
              <span className="inline-flex items-center rounded-full bg-white px-2 py-0.5 text-indigo-900 ring-1 ring-indigo-200">
                Private
              </span>
              <span className="h-4 w-px bg-indigo-200" aria-hidden="true" />
              <span className="inline-flex items-center rounded-full bg-white px-2 py-0.5 text-indigo-900 ring-1 ring-indigo-200">
                Secure
              </span>
            </div>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-[15px]">
            No payments. No public listing. Submit once and we call you within 2 hours.
          </p>
        </div>
      </div>

      {success ? (
        <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-[15px] font-semibold text-emerald-900">
            Thanks! Our team received your details and will contact you shortly.
          </p>
          <p className="mt-1 text-sm leading-relaxed text-emerald-800">
            If you need to add anything, message us on WhatsApp and mention your name.
          </p>
          <Button
            className="mt-4 h-11 rounded-lg border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
            variant="secondary"
            onClick={() => setSuccess(false)}
          >
            Submit another car
          </Button>
        </div>
      ) : (
        <form className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)} noValidate>
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
              className="h-12 rounded-lg border-slate-200 bg-white text-[15px] md:text-base"
              placeholder="e.g., Ahmed Khan"
              {...register("fullName")}
            />
          </Field>

          <Field label="Phone (WhatsApp)" error={errors.phone?.message}>
            <Input
              className="h-12 rounded-lg border-slate-200 bg-white text-[15px] md:text-base"
              placeholder="+15551234567"
              inputMode="tel"
              {...register("phone")}
            />
          </Field>

          <Field label="Car brand" error={errors.carBrand?.message}>
            <Input
              className="h-12 rounded-lg border-slate-200 bg-white text-[15px] md:text-base"
              placeholder="e.g., Toyota"
              {...register("carBrand")}
            />
          </Field>

          <Field label="Car model" error={errors.carModel?.message}>
            <Input
              className="h-12 rounded-lg border-slate-200 bg-white text-[15px] md:text-base"
              placeholder="e.g., Corolla"
              {...register("carModel")}
            />
          </Field>

          <Field label="Manufacturing year" error={errors.manufacturingYear?.message}>
            <Input
              className="h-12 rounded-lg border-slate-200 bg-white text-[15px] md:text-base"
              placeholder={`${currentYear}`}
              inputMode="numeric"
              {...register("manufacturingYear")}
            />
          </Field>

          <Field label="Asking price" error={errors.askingPrice?.message}>
            <Input
              className="h-12 rounded-lg border-slate-200 bg-white text-[15px] md:text-base"
              placeholder="e.g., 9500"
              inputMode="numeric"
              {...register("askingPrice")}
            />
          </Field>

          <Field label="Kilometers driven" error={errors.kilometersDriven?.message}>
            <Input
              className="h-12 rounded-lg border-slate-200 bg-white text-[15px] md:text-base"
              placeholder="e.g., 120000"
              inputMode="numeric"
              {...register("kilometersDriven")}
            />
          </Field>

          <Field label="Additional notes (optional)" error={errors.additionalNotes?.message} className="md:col-span-2">
            <Textarea
              className="min-h-28 rounded-lg border-slate-200 bg-white text-[15px] leading-relaxed md:text-base"
              placeholder="Accidents, service history, upgrades, urgency..."
              {...register("additionalNotes")}
            />
          </Field>

          {serverError ? (
            <div className="md:col-span-2 rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">
              {serverError}
            </div>
          ) : null}

          <div className="md:col-span-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
              By submitting, you agree to be contacted by our team and dealer partners.
            </p>
            <Button
              disabled={isSubmitting}
              className="h-12 rounded-lg bg-indigo-600 text-base text-white hover:bg-indigo-700"
            >
              {isSubmitting ? "Submitting…" : "Submit details"}
            </Button>
          </div>
        </form>
      )}
    </Card>
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
      <div className="mt-1.5">{children}</div>
    </div>
  );
}