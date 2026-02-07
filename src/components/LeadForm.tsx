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
  manufacturingYear: z
    .coerce
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
    <Card className="rounded-3xl border-white/10 bg-white/70 p-5 shadow-[0_20px_70px_-30px_rgba(15,23,42,.35)] backdrop-blur md:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl">Get dealer offers</h3>
          <p className="mt-1 text-sm text-slate-600">No payments. Just a clean lead intake and dealer connection.</p>
        </div>
        <div className="hidden rounded-2xl bg-slate-900 px-3 py-1.5 text-xs font-medium text-white/90 md:block">
          Fast • Private • Secure
        </div>
      </div>

      {success ? (
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="font-medium text-emerald-900">Thanks! Our team received your details and will contact you shortly.</p>
          <p className="mt-1 text-sm text-emerald-800">If you need to add anything, message us on WhatsApp and mention your name.</p>
          <Button className="mt-4 rounded-2xl" variant="secondary" onClick={() => setSuccess(false)}>
            Submit another car
          </Button>
        </div>
      ) : (
        <form className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <Label htmlFor={honeypotName}>Website</Label>
            <Input id={honeypotName} value={honeypotValue} onChange={(e) => setHoneypotValue(e.target.value)} tabIndex={-1} autoComplete="off" />
          </div>

          <Field label="Full name" error={errors.fullName?.message}>
            <Input className="h-11 rounded-2xl" placeholder="e.g., Ahmed Khan" {...register("fullName")} />
          </Field>

          <Field label="Phone (WhatsApp)" error={errors.phone?.message}>
            <Input className="h-11 rounded-2xl" placeholder="+15551234567" inputMode="tel" {...register("phone")} />
          </Field>

          <Field label="Car brand" error={errors.carBrand?.message}>
            <Input className="h-11 rounded-2xl" placeholder="e.g., Toyota" {...register("carBrand")} />
          </Field>

          <Field label="Car model" error={errors.carModel?.message}>
            <Input className="h-11 rounded-2xl" placeholder="e.g., Corolla" {...register("carModel")} />
          </Field>

          <Field label="Manufacturing year" error={errors.manufacturingYear?.message}>
            <Input className="h-11 rounded-2xl" placeholder={`${currentYear}`} inputMode="numeric" {...register("manufacturingYear")} />
          </Field>

          <Field label="Asking price" error={errors.askingPrice?.message}>
            <Input className="h-11 rounded-2xl" placeholder="e.g., 9500" inputMode="numeric" {...register("askingPrice")} />
          </Field>

          <Field label="Kilometers driven" error={errors.kilometersDriven?.message}>
            <Input className="h-11 rounded-2xl" placeholder="e.g., 120000" inputMode="numeric" {...register("kilometersDriven")} />
          </Field>

          <Field label="Additional notes (optional)" error={errors.additionalNotes?.message} className="md:col-span-2">
            <Textarea className="min-h-24 rounded-2xl" placeholder="Accidents, service history, upgrades, urgency..." {...register("additionalNotes")} />
          </Field>

          {serverError ? (
            <div className="md:col-span-2 rounded-2xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">
              {serverError}
            </div>
          ) : null}

          <div className="md:col-span-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-slate-500">By submitting, you agree to be contacted by our team and dealer partners.</p>
            <Button disabled={isSubmitting} className="h-11 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700">
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
        <Label className="text-sm text-slate-800">{label}</Label>
        {error ? <span className="text-xs font-medium text-rose-600">{error}</span> : null}
      </div>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
