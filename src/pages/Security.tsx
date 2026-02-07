import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { images } from "@/lib/images";
import { ArrowLeft, ArrowRight, Check, EyeOff, LockKeyhole, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const ASSURANCES = [
  {
    title: "No public listing of your details",
    desc: "Your phone number is never posted on a public listing. It stays private—between you and our team.",
    icon: EyeOff,
  },
  {
    title: "Validated submissions (less spam)",
    desc: "We validate inputs, use a honeypot field, and block abusive traffic—so real sellers get priority attention.",
    icon: ShieldCheck,
  },
  {
    title: "Rate limiting + minimal data collection",
    desc: "We limit excessive requests and collect only what’s needed to contact you and understand your car.",
    icon: LockKeyhole,
  },
] as const;

const PROMISES = [
  { label: "Public exposure", value: "None" },
  { label: "Bot/spam reduction", value: "Honeypot + limits" },
  { label: "Purpose of data", value: "Contact + car context" },
] as const;

export default function Security() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-flex">
              <Button
                variant="secondary"
                className="h-10 rounded-lg border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">Experience</p>
              <h1 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                Private & secure by design
              </h1>
            </div>
          </div>

          <Link to="/#sell" className="hidden sm:inline-flex">
            <Button className="h-10 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
              Submit details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <div className="grid gap-6 md:grid-cols-12 md:items-start">
          <Card className="rounded-2xl border-slate-200 bg-white p-5 shadow-sm md:col-span-7 md:p-7">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Private by default. Secure by design.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-[15px]">
              Selling privately shouldn’t mean risking your phone number being shared around the internet. We’re not a
              marketplace—there’s no public listing and no public negotiation. You submit your details once, and we use
              them only to coordinate dealer interest and contact you with next steps.
            </p>

            <Separator className="my-6 bg-slate-200" />

            <div className="grid gap-3">
              {ASSURANCES.map((a) => {
                const Icon = a.icon;
                return (
                  <div key={a.title} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-slate-900">
                      <Icon className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-900">{a.title}</p>
                      <p className="mt-0.5 text-sm text-slate-700">{a.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl border border-indigo-200 bg-indigo-50 p-4">
              <div className="flex items-start gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-indigo-200 bg-white sm:h-10 sm:w-10">
                  <Check className="h-4 w-4 text-indigo-700 sm:h-[18px] sm:w-[18px]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-indigo-950">Simple promise</p>
                  <p className="mt-1 text-sm leading-relaxed text-indigo-950/90">
                    We collect only what helps us do the job: contact you, understand your car, and coordinate next
                    steps. Nothing is posted publicly, and you stay in control of the conversation.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <ShieldCheck className="h-4 w-4 text-indigo-600" />
                Privacy-first from the first click.
              </div>
              <Link to="/#sell" className="inline-flex">
                <Button className="h-11 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">Submit car details</Button>
              </Link>
            </div>
          </Card>

          <div className="md:col-span-5">
            <Card className="rounded-2xl border-slate-200 bg-white p-3 shadow-sm">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <img
                  src={images.security}
                  alt="Secure and private handling of your information"
                  className="h-56 w-full object-cover md:h-[360px]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-3 grid gap-3">
                {PROMISES.map((m) => (
                  <MiniStat key={m.label} label={m.label} value={m.value} />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">{label}</p>
      <p className="mt-1 text-base font-semibold tracking-tight text-slate-900">{value}</p>
    </div>
  );
}