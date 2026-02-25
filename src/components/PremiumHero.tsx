import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, MessageCircle, PhoneCall, ShieldCheck, Timer } from "lucide-react";
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
  const chips = useMemo(
    () => [
      { icon: <Timer className="h-4 w-4 text-indigo-700" />, label: "2-hour callback goal" },
      { icon: <ShieldCheck className="h-4 w-4 text-emerald-700" />, label: "Private intake" },
      { icon: <PhoneCall className="h-4 w-4 text-slate-900" />, label: "Human follow-up" },
    ],
    []
  );

  return (
    <section className={cn("grid gap-8 md:grid-cols-12 md:items-stretch", className)} aria-label="Hero">
      {/* Copy */}
      <div className="md:col-span-6 md:pr-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-950">
          <BadgeCheck className="h-4 w-4 text-indigo-600" />
          Dealer-connected, not a marketplace
        </div>

        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Sell your car with clarity — one submission, then a real call.
        </h1>

        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-700 md:text-[15px]">
          No public listing. No inbox spam. Submit your details once and we coordinate dealer interest privately, then
          call you with next steps.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm"
            >
              {c.icon}
              {c.label}
            </span>
          ))}
        </div>

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
            <Button
              variant="ghost"
              className="h-11 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            >
              See the experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <ValueCard
            title="Fast intake"
            desc="Mobile-first form designed to capture what dealers ask for."
            icon={<Timer className="h-4 w-4 text-indigo-700" />}
          />
          <ValueCard
            title="Secure handling"
            desc="Server validation, bot protection, and rate limiting."
            icon={<ShieldCheck className="h-4 w-4 text-emerald-700" />}
          />
        </div>
      </div>

      {/* Image panel */}
      <div className="md:col-span-6 md:pl-2">
        <Card className="relative h-full overflow-hidden rounded-3xl border-slate-200 bg-white p-3 shadow-sm">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <img
              src={images.hero}
              alt="Premium car in a clean setting"
              className="h-[320px] w-full object-cover sm:h-[380px] md:h-[520px]"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            {/* Subtle overlay for readability without gradients */}
            <div className="absolute inset-0 bg-slate-900/10" />
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            <StatPill label="Submit once" value="~60 seconds" />
            <StatPill label="Callback goal" value="2 hours" />
            <StatPill label="Public listing" value="None" />
          </div>
        </Card>
      </div>
    </section>
  );
}

function ValueCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <Card className="rounded-2xl border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-slate-900 shadow-sm">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-tight text-slate-900">{title}</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-700">{desc}</p>
        </div>
      </div>
    </Card>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">{label}</p>
      <p className="mt-1 text-sm font-semibold tracking-tight text-slate-900">{value}</p>
    </div>
  );
}