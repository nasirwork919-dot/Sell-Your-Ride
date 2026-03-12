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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

  // Hero-only (kept optional so default form validation stays same)
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  state: z.string().optional(),
  badge: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const STATES = ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "ACT", "NT"] as const;

const BADGE_NONE_VALUE = "none" as const;
const BADGES = ["Base", "Sport", "Luxury", "Limited"] as const;

export function LeadForm({
  variant,
  onPrimaryCta,
  phoneText,
}: {
  variant?: "default" | "hero-compact";
  onPrimaryCta?: () => void;
  phoneText?: string;
}) {
  const honeypotName = useMemo(() => "website", []);
  const [honeypotValue, setHoneypotValue] = useState("");
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const isHero = variant === "hero-compact";

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      manufacturingYear: currentYear,
      kilometersDriven: 0,
      state: "",
      badge: "",
      email: "",
    },
  });

  const stateVal = watch("state");
  const badgeVal = watch("badge");

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

  const badgeSelectValue = badgeVal && badgeVal.length > 0 ? badgeVal : BADGE_NONE_VALUE;

  return (
    <Card
      className={cn(
        "border-slate-200 bg-white shadow-sm",
        isHero ? "rounded-xl p-0 shadow-none" : "rounded-[5px] p-6 md:p-7",
      )}
    >
      <div className="sr-only">
        <ShieldCheck className="h-4 w-4" />
        <p>Private intake form</p>
      </div>

      {success ? (
        <div className={cn(isHero ? "p-4" : "mt-6 rounded-[5px] border border-emerald-200 bg-emerald-50 p-5")}>
          <div className="flex items-start gap-3">
            <span
              className={cn(
                "mt-0.5 grid place-items-center bg-white shadow-sm",
                isHero ? "h-9 w-9 rounded-xl ring-1 ring-emerald-200" : "h-10 w-10 rounded-[5px] ring-1 ring-emerald-200",
              )}
            >
              <CheckCircle2 className={cn(isHero ? "h-4 w-4" : "h-5 w-5", "text-emerald-700")} />
            </span>
            <div className="min-w-0">
              <p className={cn(isHero ? "text-sm" : "text-[15px]", "font-semibold text-emerald-950")}>
                Thanks — our team received your details.
              </p>
              <p className={cn(isHero ? "text-xs" : "text-sm", "mt-1 leading-relaxed text-emerald-900/90")}>
                We’ll contact you shortly. If you need to add anything, message us on WhatsApp and mention your name.
              </p>

              <Button
                className={cn(
                  "mt-3 border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
                  isHero ? "h-10 rounded-xl px-4 text-sm" : "h-11 rounded-[5px]",
                )}
                variant="secondary"
                onClick={() => setSuccess(false)}
              >
                Submit another car
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Hero compact form matches reference fields/stack */}
          {isHero ? (
            <form className="mt-3 grid gap-2" onSubmit={handleSubmit(onSubmit)} noValidate>
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

              <Input
                className={heroInput(errors.fullName?.message)}
                placeholder="Name"
                autoComplete="name"
                {...register("fullName")}
              />
              <Input
                className={heroInput(errors.phone?.message)}
                placeholder="Phone Number"
                inputMode="tel"
                autoComplete="tel"
                {...register("phone")}
              />
              <Input
                className={heroInput(errors.email?.message)}
                placeholder="Email"
                inputMode="email"
                autoComplete="email"
                {...register("email")}
              />

              <Select
                value={stateVal ?? ""}
                onValueChange={(v) => setValue("state", v, { shouldDirty: true, shouldTouch: true })}
              >
                <SelectTrigger className={heroSelectTrigger()}>
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  {STATES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={watch("carBrand") ?? ""}
                onValueChange={(v) => setValue("carBrand", v, { shouldDirty: true, shouldTouch: true })}
              >
                <SelectTrigger className={heroSelectTrigger(errors.carBrand?.message)}>
                  <SelectValue placeholder="Make" />
                </SelectTrigger>
                <SelectContent>
                  {["Toyota", "Mazda", "Hyundai", "Kia", "Ford", "Holden", "Honda", "BMW", "Mercedes-Benz", "Other"].map(
                    (m) => (
                      <SelectItem key={m} value={m}>
                        {m}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>

              <Select
                value={watch("carModel") ?? ""}
                onValueChange={(v) => setValue("carModel", v, { shouldDirty: true, shouldTouch: true })}
              >
                <SelectTrigger className={heroSelectTrigger(errors.carModel?.message)}>
                  <SelectValue placeholder="Model" />
                </SelectTrigger>
                <SelectContent>
                  {["Corolla", "Camry", "RAV4", "CX-5", "i30", "Cerato", "Ranger", "Hilux", "Other"].map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={String(watch("manufacturingYear") ?? "")}
                onValueChange={(v) =>
                  setValue("manufacturingYear", Number(v) as any, { shouldDirty: true, shouldTouch: true })
                }
              >
                <SelectTrigger className={heroSelectTrigger(errors.manufacturingYear?.message)}>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 18 }, (_, i) => currentYear - i).map((y) => (
                    <SelectItem key={y} value={String(y)}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={badgeSelectValue}
                onValueChange={(v) =>
                  setValue("badge", v === BADGE_NONE_VALUE ? "" : v, { shouldDirty: true, shouldTouch: true })
                }
              >
                <SelectTrigger className={heroSelectTrigger()}>
                  <SelectValue placeholder="Badge" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={BADGE_NONE_VALUE}>—</SelectItem>
                  {BADGES.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Input
                className={heroInput(errors.kilometersDriven?.message)}
                placeholder="KM's"
                inputMode="numeric"
                {...register("kilometersDriven")}
              />

              {serverError ? (
                <div className="mt-1 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-800">
                  {serverError}
                </div>
              ) : null}

              <Button
                disabled={isSubmitting}
                className="mt-2 h-10 w-full rounded-full bg-[#137C2B] text-sm font-extrabold text-white shadow-sm hover:bg-[#106824]"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting…
                  </span>
                ) : (
                  "Instant offer"
                )}
              </Button>

              {onPrimaryCta ? (
                <button type="button" className="sr-only" onClick={onPrimaryCta} aria-hidden="true" />
              ) : null}
              {phoneText ? <span className="sr-only">{phoneText}</span> : null}
            </form>
          ) : (
            /* Default form (unchanged layout/fields) */
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

              <Field label="Name" error={errors.fullName?.message}>
                <Input
                  className={inputClassName(errors.fullName?.message, false)}
                  placeholder="Name"
                  autoComplete="name"
                  {...register("fullName")}
                />
              </Field>

              <Field label="Phone Number" error={errors.phone?.message}>
                <Input
                  className={inputClassName(errors.phone?.message, false)}
                  placeholder="Phone Number"
                  inputMode="tel"
                  autoComplete="tel"
                  {...register("phone")}
                />
              </Field>

              <div className="md:col-span-2 grid gap-5 md:grid-cols-2 md:gap-x-6 md:gap-y-6">
                <Field label="Make" error={errors.carBrand?.message}>
                  <Input
                    className={inputClassName(errors.carBrand?.message, false)}
                    placeholder="Make"
                    autoComplete="off"
                    {...register("carBrand")}
                  />
                </Field>

                <Field label="Model" error={errors.carModel?.message}>
                  <Input
                    className={inputClassName(errors.carModel?.message, false)}
                    placeholder="Model"
                    autoComplete="off"
                    {...register("carModel")}
                  />
                </Field>

                <Field label="Year" error={errors.manufacturingYear?.message}>
                  <Input
                    className={inputClassName(errors.manufacturingYear?.message, false)}
                    placeholder="Year"
                    inputMode="numeric"
                    {...register("manufacturingYear")}
                  />
                </Field>

                <Field label="KM's" error={errors.kilometersDriven?.message}>
                  <Input
                    className={inputClassName(errors.kilometersDriven?.message, false)}
                    placeholder="KM's"
                    inputMode="numeric"
                    {...register("kilometersDriven")}
                  />
                </Field>

                <Field label="Asking price" error={errors.askingPrice?.message}>
                  <Input
                    className={inputClassName(errors.askingPrice?.message, false)}
                    placeholder="18500 (AUD)"
                    inputMode="numeric"
                    {...register("askingPrice")}
                  />
                </Field>

                <Field
                  label="Additional notes (optional)"
                  error={errors.additionalNotes?.message}
                  className="md:col-span-2"
                >
                  <Textarea
                    className={textareaClassName(errors.additionalNotes?.message)}
                    placeholder="Condition, service history, rego expiry, accidents, upgrades, urgency…"
                    {...register("additionalNotes")}
                  />
                </Field>
              </div>

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
        </>
      )}
    </Card>
  );
}

function heroInput(hasError?: string) {
  return cn(
    "h-8 rounded-[2px] border border-slate-200 bg-slate-100 px-2.5 text-[11px] font-medium text-slate-900 shadow-inner",
    "placeholder:text-slate-500",
    "focus-visible:ring-2 focus-visible:ring-[#0B3A7A]/15 focus-visible:ring-offset-0",
    hasError ? "border-rose-300 focus-visible:ring-rose-500/25" : "",
  );
}

function heroSelectTrigger(hasError?: string) {
  return cn(
    "h-8 rounded-[2px] border border-slate-200 bg-slate-100 px-2.5 text-[11px] font-medium text-slate-900 shadow-inner",
    "focus:ring-2 focus:ring-[#0B3A7A]/15 focus:ring-offset-0",
    hasError ? "border-rose-300 focus:ring-rose-500/25" : "",
  );
}

function inputClassName(hasError?: string, compact?: boolean) {
  if (compact) {
    return cn(
      "h-9 rounded-md border border-slate-200 bg-slate-100 px-3 text-sm text-slate-900 shadow-inner",
      "placeholder:text-slate-500",
      "focus-visible:ring-2 focus-visible:ring-[#0B3A7A]/20 focus-visible:ring-offset-0",
      hasError ? "border-rose-300 focus-visible:ring-rose-500/30" : "",
    );
  }

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