import { useMemo } from "react";
import { Link } from "react-router-dom";
import { BadgeCheck, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/LeadForm";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";

export function CarBuyersStyleHero({
  onPrimaryCta,
  waLink,
  className,
}: {
  onPrimaryCta: () => void;
  waLink: string;
  className?: string;
}) {
  const promises = useMemo(
    () => ["Open 7 days a week", "Best price promise", "We come to you"],
    []
  );

  return (
    <section className={cn("overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm", className)}>
      <div className="grid md:grid-cols-12">
        {/* LEFT: turquoise stage */}
        <div className="relative bg-[#22B7C6] px-5 pb-7 pt-6 md:col-span-7 md:px-10 md:pb-10 md:pt-8">
          {/* Top visual */}
          <div className="mx-auto max-w-xl">
            <div className="relative">
              <div className="mx-auto h-36 w-36 rounded-full bg-white/20 md:h-44 md:w-44" aria-hidden="true" />
              <div className="absolute left-1/2 top-1/2 w-[92%] -translate-x-1/2 -translate-y-1/2">
                <img
                  src={images.hero}
                  alt="Premium car"
                  className="h-32 w-full rounded-2xl object-cover shadow-sm ring-1 ring-white/25 md:h-40"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Wordmark block (CarBuyers-like) */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-baseline justify-center gap-1">
                <span className="text-5xl font-extrabold tracking-tight text-[#0A4D8C] md:text-6xl">Sell</span>
                <span className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">Your</span>
                <span className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">Ride</span>
              </div>
              <p className="mt-2 text-2xl font-extrabold tracking-tight text-[#9FE7D7] md:text-3xl">Sell My Car</p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-semibold text-white/95">
                {promises.map((p, idx) => (
                  <span key={p} className="inline-flex items-center gap-3">
                    <span>{p}</span>
                    {idx < promises.length - 1 ? (
                      <span className="h-1 w-1 rounded-full bg-white/70" aria-hidden="true" />
                    ) : null}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Steps row */}
          <div className="mt-7 grid gap-4 md:mt-10 md:grid-cols-3">
            <StepCard
              n={1}
              title="Get a quick offer"
              desc="Fill out the form with your details and we’ll provide an estimate price."
            />
            <StepCard
              n={2}
              title="Convenient inspection"
              desc="We come to a location of your choice to inspect the vehicle."
            />
            <StepCard n={3} title="Get the best price" desc="We’ll make an offer and provide same-day payment." />
          </div>

          {/* Rating badge bottom-left */}
          <div className="mt-6 flex items-center justify-center md:absolute md:bottom-7 md:left-8 md:mt-0 md:justify-start">
            <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-slate-50 ring-1 ring-slate-200">
                <span className="text-lg font-extrabold text-slate-900">G</span>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-700">Google Rating</p>
                <div className="mt-0.5 flex items-center gap-2">
                  <p className="text-sm font-extrabold text-indigo-700">4.7</p>
                  <div className="flex items-center gap-0.5" aria-label="Rating stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={cn("h-2.5 w-2.5 rounded-full", i < 4 ? "bg-amber-400" : "bg-amber-200")}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-[11px] font-semibold text-slate-500">Based on 1,236 reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: form panel */}
        <div className="relative bg-[#22B7C6] p-5 md:col-span-5 md:p-8">
          <Card className="relative overflow-hidden rounded-3xl border-slate-200 bg-white p-5 shadow-sm md:p-6">
            {/* Burst sticker */}
            <div className="absolute left-6 top-6">
              <div className="relative rotate-[-12deg]">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-[#0A4D8C] text-white shadow-sm">
                  <p className="px-2 text-center text-[10px] font-extrabold uppercase leading-tight tracking-[0.14em]">
                    We pay
                    <br />
                    more than
                    <br />
                    dealers
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-14">
              <h2 className="text-center text-xl font-extrabold tracking-tight text-[#0A4D8C] md:text-2xl">
                We will buy your car today!
              </h2>

              <div className="mt-4 flex items-center justify-center gap-3">
                <ProgressDot active label="1" />
                <div className="h-px w-16 bg-slate-200" />
                <ProgressDot label="2" />
                <div className="h-px w-16 bg-slate-200" />
                <ProgressDot icon={<Check className="h-4 w-4" />} />
              </div>

              {/* Form */}
              <div className="mt-5">
                <LeadForm />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Button
                  className="h-11 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
                  onClick={onPrimaryCta}
                >
                  Instant offer
                </Button>

                <div className="flex gap-2">
                  <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex flex-1">
                    <Button
                      variant="secondary"
                      className="h-11 w-full rounded-full border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                  </a>

                  <Link to="/experience" className="inline-flex">
                    <Button
                      variant="secondary"
                      className="h-11 rounded-full border border-slate-200 bg-white px-4 text-slate-900 hover:bg-slate-50"
                      aria-label="See the experience"
                      title="See the experience"
                    >
                      <BadgeCheck className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function StepCard({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <Card className="rounded-2xl border border-white/25 bg-white/10 p-4 text-white shadow-sm">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#0A4D8C] text-lg font-extrabold text-white ring-1 ring-white/25">
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
        active ? "border-[#22B7C6] bg-[#22B7C6] text-white" : "border-slate-200 bg-white text-slate-400"
      )}
      aria-label={label ? `Step ${label}` : "Step"}
    >
      {icon ?? label}
    </div>
  );
}