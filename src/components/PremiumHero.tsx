import { ArrowRight, Info, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

const TRUST_BADGES = [
  "Free towing Australia wide",
  "Instant bank transfer",
  "Any make, any condition",
  "Licensed buyers",
] as const;

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
    <section className={cn("grid gap-7 md:grid-cols-12 md:items-center md:gap-10", className)} aria-label="Hero">
      {/* LEFT: copy */}
      <div className="md:col-span-7">
        {/* Label */}
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-md bg-indigo-600 text-sm font-extrabold tracking-tight text-white shadow-sm md:h-11 md:w-11">
            SYR
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">Australia</p>
            <p className="text-sm font-semibold tracking-tight text-slate-900">Sell Your Ride</p>
          </div>
        </div>

        {/* Headline */}
        <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:mt-5 md:text-6xl">
          Sell your car fast.
          <span className="block">
            Get paid{" "}
            <span className="whitespace-nowrap rounded-md bg-indigo-50 px-2 py-0.5 text-indigo-900 ring-1 ring-indigo-100">
              today
            </span>
            .
          </span>
        </h1>

        {/* Supporting text */}
        <p className="mt-3 max-w-2xl text-pretty text-[15px] leading-relaxed text-slate-700 sm:text-base">
          One quick form. We handle everything. Same-day callback.
        </p>

        {/* CTAs */}
        <div className="mt-6 grid gap-2 sm:flex sm:items-center sm:gap-3">
          <Button
            className="h-12 w-full rounded-md bg-indigo-600 text-base text-white shadow-sm hover:bg-indigo-700 sm:w-auto"
            onClick={onPrimaryCta}
          >
            Get my instant offer
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <a href="#how" className="inline-flex">
            <Button
              variant="secondary"
              className="h-12 w-full rounded-md border border-slate-200 bg-white text-base text-slate-900 hover:bg-slate-50 sm:w-auto"
            >
              <Info className="mr-2 h-4 w-4" />
              How it works
            </Button>
          </a>

          <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex sm:ml-1">
            <Button className="h-12 w-full rounded-md bg-emerald-600 text-base text-white hover:bg-emerald-700 sm:w-auto">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_BADGES.map((t) => (
            <div
              key={t}
              className="flex items-start gap-2 rounded-md border border-slate-200 bg-white px-3 py-3 shadow-sm"
            >
              <span
                className="mt-1 h-5 w-5 shrink-0 rounded-md bg-emerald-600/10 text-emerald-700 ring-1 ring-emerald-600/20"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold leading-snug text-slate-900">{t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: image */}
      <div className="md:col-span-5">
        <div className="relative overflow-hidden rounded-md shadow-[0_16px_38px_rgba(15,23,42,0.16)]">
          <img
            src={images.hero}
            alt="Premium car in a clean setting"
            className="h-[220px] w-full object-cover sm:h-[300px] md:h-[560px]"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          {/* Subtle overlay for contrast (10–15%) */}
          <div className="pointer-events-none absolute inset-0 bg-slate-900/15" />
        </div>

        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
          Private intake • No public listing • Fast follow-up
        </p>
      </div>
    </section>
  );
}