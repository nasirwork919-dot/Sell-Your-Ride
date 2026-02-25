import { useMemo } from "react";
import { Link } from "react-router-dom";
import { BadgeCheck, Check, MessageCircle, ShieldCheck, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/LeadForm";
import { cn } from "@/lib/utils";

export function CarBuyersStyleHero({
  onPrimaryCta,
  waLink,
  className,
}: {
  onPrimaryCta: () => void;
  waLink: string;
  className?: string;
}) {
  const bullets = useMemo(
    () => [
      "Open 6 days a week",
      "Best-price guidance",
      "We come to you (by phone)",
    ],
    []
  );

  return (
    <section
      className={cn(
        "rounded-3xl border border-slate-200 bg-white shadow-sm",
        className
      )}
      aria-label="Hero"
    >
      <div className="grid overflow-hidden rounded-3xl md:grid-cols-12">
        {/* Left stage */}
        <div className="relative md:col-span-7">
          <div className="h-full bg-[#22B7C6] px-5 pb-8 pt-8 sm:px-7 sm:pt-10 md:px-10 md:pb-10">
            {/* Brand row */}
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 text-sm font-extrabold tracking-tight text-white ring-1 ring-white/25">
                SYR
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/90">Australia</p>
                <p className="text-sm font-semibold tracking-tight text-white">Sell Your Ride</p>
              </div>
            </div>

            {/* Headline stack */}
            <div className="mt-10">
              <h1 className="text-balance text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                Sell
                <span className="text-[#0A4D8C]">Your</span>
                Ride
              </h1>

              <p className="mt-4 text-xl font-semibold tracking-tight text-white/90 sm:text-2xl">
                Private lead intake. Dealer connected.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-white/95">
                {bullets.map((b, idx) => (
                  <span key={b} className="inline-flex items-center gap-3">
                    <span>{b}</span>
                    {idx < bullets.length - 1 ? (
                      <span className="h-1 w-1 rounded-full bg-white/70" aria-hidden="true" />
                    ) : null}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  className="h-11 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
                  onClick={onPrimaryCta}
                >
                  Submit car details
                </Button>

                <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex">
                  <Button className="h-11 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </a>

                <Link to="/experience" className="inline-flex">
                  <Button
                    variant="secondary"
                    className="h-11 rounded-xl border border-white/25 bg-white/10 text-white hover:bg-white/15"
                  >
                    See how it works
                  </Button>
                </Link>
              </div>
            </div>

            {/* Steps row */}
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <StepCard
                n={1}
                title="Submit once"
                desc="One clean form. No public listing."
              />
              <StepCard
                n={2}
                title="We do outreach"
                desc="We match your car with relevant dealers."
              />
              <StepCard
                n={3}
                title="We call you"
                desc="Clear next steps with a real callback."
              />
            </div>

            {/* Rating badge */}
            <div className="mt-6">
              <div className="inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50 text-slate-900 ring-1 ring-slate-200">
                  <BadgeCheck className="h-5 w-5 text-indigo-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-extrabold tracking-tight text-slate-900">
                    Google Rating <span className="text-indigo-700">4.7</span>
                  </p>
                  <p className="text-xs font-semibold text-slate-600">Based on 1,236 reviews</p>
                </div>
                <div className="ml-1 hidden items-center gap-1 sm:flex" aria-label="Rating stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "h-2.5 w-2.5 rounded-full",
                        i < 4 ? "bg-amber-400" : "bg-amber-200"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative circles (no gradients) */}
          <div
            className="pointer-events-none absolute -top-10 left-10 hidden h-40 w-40 rounded-full bg-white/20 md:block"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-8 left-40 hidden h-28 w-28 rounded-full bg-white/15 md:block"
            aria-hidden="true"
          />
        </div>

        {/* Right form panel */}
        <div className="relative bg-slate-50 md:col-span-5">
          <div className="px-5 pb-8 pt-6 sm:px-7 md:px-8 md:py-10">
            <Card className="relative overflow-hidden rounded-3xl border-slate-200 bg-white p-5 shadow-sm md:p-6">
              {/* Top badge */}
              <div className="absolute -left-8 -top-8 rotate-[-10deg] rounded-2xl bg-indigo-700 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-white shadow-sm">
                We pay more than dealers
              </div>

              <h2 className="mt-3 text-center text-xl font-extrabold tracking-tight text-slate-900">
                We’ll review your car today.
              </h2>
              <p className="mt-2 text-center text-sm leading-relaxed text-slate-700">
                Submit your details once — we’ll call you within <span className="font-semibold text-slate-900">2 hours</span>.
              </p>

              <div className="mt-4 flex items-center justify-center gap-3">
                <ProgressDot active label="1" />
                <div className="h-px w-10 bg-slate-200" />
                <ProgressDot label="2" />
                <div className="h-px w-10 bg-slate-200" />
                <ProgressDot icon={<Check className="h-4 w-4" />} />
              </div>

              <div className="mt-5">
                <LeadForm />
              </div>

              <div className="mt-4 grid gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <MiniAssurance
                  icon={<ShieldCheck className="h-4 w-4 text-emerald-700" />}
                  title="No public listing"
                  desc="Your details are never posted publicly."
                />
                <MiniAssurance
                  icon={<Timer className="h-4 w-4 text-indigo-700" />}
                  title="Fast callback goal"
                  desc="We aim to call within 2 hours."
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <Card className="rounded-2xl border border-white/25 bg-white/10 p-4 text-white shadow-sm">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/15 text-lg font-extrabold text-white ring-1 ring-white/25">
          {n}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-extrabold tracking-tight text-white">{title}</p>
          <p className="mt-1 text-sm leading-relaxed text-white/90">{desc}</p>
        </div>
      </div>
    </Card>
  );
}

function ProgressDot({
  active,
  label,
  icon,
}: {
  active?: boolean;
  label?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid h-10 w-10 place-items-center rounded-full border text-sm font-extrabold",
        active
          ? "border-[#22B7C6] bg-[#22B7C6] text-white"
          : "border-slate-200 bg-white text-slate-400"
      )}
      aria-label={label ? `Step ${label}` : "Step"}
    >
      {icon ?? label}
    </div>
  );
}

function MiniAssurance({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl border border-slate-200 bg-white">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-extrabold tracking-tight text-slate-900">{title}</p>
        <p className="mt-0.5 text-sm text-slate-700">{desc}</p>
      </div>
    </div>
  );
}