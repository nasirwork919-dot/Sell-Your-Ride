import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, PhoneCall, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

export function PremiumHero({
  onPrimaryCta,
  waLink,
  className,
  showImage = true,
}: {
  onPrimaryCta: () => void;
  waLink: string;
  className?: string;
  showImage?: boolean;
}) {
  return (
    <section className={cn("grid gap-6 md:grid-cols-12 md:items-stretch md:gap-8", className)} aria-label="Hero">
      {/* Copy */}
      <div className={cn(showImage ? "md:col-span-7 md:pr-2" : "md:col-span-12 md:pr-0")}>
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-md bg-indigo-600 text-sm font-extrabold tracking-tight text-white shadow-sm md:h-11 md:w-11">
            SYR
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">Australia</p>
            <p className="text-sm font-semibold tracking-tight text-slate-900">Sell Your Ride</p>
          </div>
        </div>

        <h1 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-4xl md:mt-5 md:text-5xl">
          Sell your car <span className="whitespace-nowrap">privately</span> and get a real callback.
        </h1>

        <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-slate-700 sm:text-base md:text-[15px]">
          One clean submission. We do the dealer outreach and call you with next steps.
        </p>

        {/* CTAs */}
        <div className="mt-5 grid gap-2 sm:flex sm:items-center sm:gap-3 md:mt-6">
          <Button
            className="h-11 w-full rounded-md bg-indigo-600 text-white hover:bg-indigo-700 sm:w-auto"
            onClick={onPrimaryCta}
          >
            Start with the form
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex">
            <Button
              variant="secondary"
              className="h-11 w-full rounded-md border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 sm:w-auto"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </a>

          <Link to="/experience" className="hidden md:inline-flex md:ml-1">
            <Button variant="ghost" className="h-11 rounded-md text-slate-700 hover:bg-slate-100 hover:text-slate-900">
              See the experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Compact trust row on mobile, fuller steps on desktop */}
        <div className={cn("mt-4 grid gap-2 md:mt-8 md:grid md:grid-cols-3 md:gap-3", !showImage && "md:grid-cols-4")}>
          <div className="grid gap-2 md:hidden">
            <MiniTrustRow icon={<Zap className="h-4 w-4 text-indigo-700" />} text="~60s intake" />
            <MiniTrustRow icon={<PhoneCall className="h-4 w-4 text-indigo-700" />} text="2-hour callback goal" />
            <MiniTrustRow icon={<ShieldCheck className="h-4 w-4 text-emerald-700" />} text="No public listing" />
          </div>

          <div className="hidden md:contents">
            <StepPill title="Quick intake" desc="One clean form. No listing." icon={<Zap className="h-4 w-4" />} />
            <StepPill title="Dealer outreach" desc="We match and follow up." icon={<ShieldCheck className="h-4 w-4" />} />
            <StepPill title="Real callback" desc="Clear next steps in 2 hours." icon={<PhoneCall className="h-4 w-4" />} />
            {!showImage ? <StepPill title="Private handling" desc="Secure by default." icon={<ShieldCheck className="h-4 w-4" />} /> : null}
          </div>
        </div>
      </div>

      {/* Image */}
      {showImage ? (
        <div className="md:col-span-5 md:pl-2">
          <div className="relative overflow-hidden rounded-md shadow-[0_10px_30px_rgba(15,23,42,0.10)]">
            <img
              src={images.hero}
              alt="Premium car in a clean setting"
              className="h-[200px] w-full object-cover sm:h-[260px] md:h-[560px]"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <div className="pointer-events-none absolute inset-0 bg-slate-900/10" />
          </div>

          <div className="mt-3 hidden grid-cols-3 gap-2 sm:grid md:grid-cols-1">
            <StatRow label="Submit once" value="~60 seconds" />
            <StatRow label="Callback goal" value="2 hours" />
            <StatRow label="Public listing" value="None" />
          </div>
        </div>
      ) : null}
    </section>
  );
}

function MiniTrustRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-md bg-slate-50 text-slate-900 ring-1 ring-slate-200">
          {icon}
        </span>
        <p className="text-sm font-semibold tracking-tight text-slate-900">{text}</p>
      </div>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Clean</span>
    </div>
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
    <div className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-extrabold text-slate-900">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-indigo-600 text-[11px] text-white">•</span>
          Step
        </div>
        <div className="grid h-9 w-9 place-items-center rounded-md bg-slate-50 text-slate-900 shadow-sm">
          {icon}
        </div>
      </div>

      <p className="mt-3 text-sm font-semibold tracking-tight text-slate-900">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-slate-700">{desc}</p>
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">{label}</p>
      <p className="text-sm font-semibold tracking-tight text-slate-900">{value}</p>
    </div>
  );
}