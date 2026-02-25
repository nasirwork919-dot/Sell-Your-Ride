import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, PhoneCall, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

export function PremiumHero({
  onPrimaryCta,
  waLink,
  className,
}: {
  onPrimaryCta: () => void;
  waLink: string;
  className?: string;
}) {
  return (
    <section className={cn("grid gap-8 md:grid-cols-12 md:items-stretch", className)} aria-label="Hero">
      {/* Copy */}
      <div className="md:col-span-7 md:pr-2">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-600 text-sm font-extrabold tracking-tight text-white shadow-sm">
            SYR
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">Australia</p>
            <p className="text-sm font-semibold tracking-tight text-slate-900">Sell Your Ride</p>
          </div>
        </div>

        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Submit once. Stay private. Get dealer interest with a real callback.
        </h1>

        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-700 md:text-[15px]">
          No public listing and no inbox spam. Share your car details through a clean intake and we coordinate dealer
          outreach privately, then call you with next steps.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button className="h-11 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700" onClick={onPrimaryCta}>
            Submit car details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex">
            <Button
              variant="secondary"
              className="h-11 rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </a>

          <Link to="/experience" className="inline-flex sm:ml-1">
            <Button variant="ghost" className="h-11 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-slate-900">
              See the experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Steps (cleaner) */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <StepPill title="Quick intake" desc="One clean form. No listing." icon={<Zap className="h-4 w-4" />} />
          <StepPill title="Dealer outreach" desc="We match and follow up." icon={<ShieldCheck className="h-4 w-4" />} />
          <StepPill title="Real callback" desc="Clear next steps in 2 hours." icon={<PhoneCall className="h-4 w-4" />} />
        </div>
      </div>

      {/* Image panel */}
      <div className="md:col-span-5 md:pl-2">
        <Card className="relative overflow-hidden rounded-3xl border-slate-200 bg-white p-3 shadow-sm">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <img
              src={images.hero}
              alt="Premium car in a clean setting"
              className="h-[320px] w-full object-cover sm:h-[380px] md:h-[560px]"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-900/10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-slate-50/40" />
          </div>

          <div className="mt-3 grid gap-2">
            <StatRow label="Submit once" value="~60 seconds" />
            <StatRow label="Callback goal" value="2 hours" />
            <StatRow label="Public listing" value="None" />
          </div>
        </Card>
      </div>
    </section>
  );
}

function StepPill({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="rounded-2xl border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-extrabold text-slate-900">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-indigo-600 text-[11px] text-white">•</span>
          Step
        </div>
        <div className="grid h-9 w-9 place-items-center rounded-2xl bg-slate-50 text-slate-900 shadow-sm">
          {icon}
        </div>
      </div>

      <p className="mt-3 text-sm font-semibold tracking-tight text-slate-900">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-slate-700">{desc}</p>
    </Card>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">{label}</p>
      <p className="text-sm font-semibold tracking-tight text-slate-900">{value}</p>
    </div>
  );
}