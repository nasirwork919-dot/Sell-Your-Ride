import { useMemo } from "react";
import { Link } from "react-router-dom";
import { BadgeCheck, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/LeadForm";
import { cn } from "@/lib/utils";
import heroMain from "@/assets/Hero-Main-1.webp";

export function CarBuyersStyleHero({
  onPrimaryCta,
  waLink,
  className,
}: {
  onPrimaryCta: () => void;
  waLink: string;
  className?: string;
}) {
  const promises = useMemo(() => ["Open 7 days a week", "Best price promise", "We come to you"], []);

  return (
    <section
      className={cn(
        "overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm",
        className
      )}
      aria-label="Hero"
    >
      <div className="grid md:grid-cols-12">
        {/* LEFT: turquoise stage */}
        <div className="relative bg-[#22B7C6] px-4 pb-6 pt-6 sm:px-6 md:col-span-7 md:px-8 md:pb-8 md:pt-7">
          <div className="mx-auto max-w-xl">
            {/* Top visual */}
            <div className="relative">
              <div className="mx-auto h-28 w-28 rounded-full bg-white/20 sm:h-32 sm:w-32 md:h-40 md:w-40" aria-hidden="true" />
              <div className="absolute left-1/2 top-1/2 w-[94%] -translate-x-1/2 -translate-y-1/2">
                <img
                  src={heroMain}
                  alt="Sell Your Ride hero"
                  className="h-28 w-full rounded-md object-cover shadow-sm ring-1 ring-white/25 sm:h-32 md:h-40"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Wordmark */}
            <div className="mt-5 text-center">
              <div className="inline-flex items-baseline justify-center gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-[#0A4D8C] sm:text-5xl">Sell</span>
                <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Your</span>
                <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Ride</span>
              </div>
              <p className="mt-2 text-xl font-extrabold tracking-tight text-[#9FE7D7] sm:text-2xl">Sell My Car</p>

              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-semibold text-white/95">
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
          <div className="mt-6 grid gap-3 sm:grid-cols-3 md:mt-8">
            <StepCard n={1} title="Get a quick offer" desc="Fill out the form and we’ll provide an estimate price." />
            <StepCard n={2} title="Convenient inspection" desc="We come to your preferred location to inspect." />
            <StepCard n={3} title="Get the best price" desc="We’ll make an offer and provide same-day payment." />
          </div>

          {/* Rating badge */}
          <div className="mt-5 flex items-center justify-center md:absolute md:bottom-6 md:left-8 md:mt-0 md:justify-start">
            <div className="flex items-center gap-3 rounded-md bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
              <div className="grid h-9 w-9 place-items-center rounded-md bg-slate-50 ring-1 ring-slate-200">
                <span className="text-base font-extrabold text-slate-900">G</span>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-700">Google Rating</p>
                <div className="mt-0.5 flex items-center gap-2">
                  <p className="text-sm font-extrabold text-indigo-700">4.7</p>
                  <div className="flex items-center gap-0.5" aria-label="Rating stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={cn("h-2.5 w-2.5 rounded-sm", i < 4 ? "bg-amber-400" : "bg-amber-200")}
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
        <div className="relative bg-[#22B7C6] p-4 sm:p-6 md:col-span-5 md:p-8">
          <Card className="relative overflow-hidden rounded-lg border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            {/* Burst sticker */}
            <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
              <div className="relative rotate-[-12deg]">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[#0A4D8C] text-white shadow-sm">
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

            <div className="pt-12 sm:pt-14">
              <h2 className="text-center text-lg font-extrabold tracking-tight text-[#0A4D8C] sm:text-xl">
                We will buy your car today!
              </h2>

              <div className="mt-3 flex items-center justify-center gap-3">
                <ProgressDot active label="1" />
                <div className="h-px w-12 bg-slate-200 sm:w-16" />
                <ProgressDot label="2" />
                <div className="h-px w-12 bg-slate-200 sm:w-16" />
                <ProgressDot icon={<Check className="h-4 w-4" />} />
              </div>

              <div className="mt-4">
                <LeadForm />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Button className="h-11 rounded-md bg-emerald-600 text-white hover:bg-emerald-700" onClick={onPrimaryCta}>
                  Instant offer
                </Button>

                <div className="flex gap-2">
                  <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex flex-1">
                    <Button
                      variant="secondary"
                      className="h-11 w-full rounded-md border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                  </a>

                  <Link to="/experience" className="inline-flex">
                    <Button
                      variant="secondary"
                      className="h-11 rounded-md border border-slate-200 bg-white px-4 text-slate-900 hover:bg-slate-50"
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
    <Card className="rounded-md border border-white/25 bg-white/10 p-3 text-white shadow-sm">
      <div className="flex items-start gap-3">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-[#0A4D8C] text-base font-extrabold text-white ring-1 ring-white/25">
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