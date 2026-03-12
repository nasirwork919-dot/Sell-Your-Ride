import { useMemo } from "react";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PhoneCall } from "lucide-react";

const HERO_IMAGE_URL =
  "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1600";

export function CarBuyersHero({
  onPrimaryCta,
  phoneText,
  className,
}: {
  onPrimaryCta: () => void;
  phoneText?: string;
  className?: string;
}) {
  const steps = useMemo(
    () => [
      { n: 1, title: "Get a quick offer", desc: "Fill out the form and we’ll estimate a price." },
      { n: 2, title: "Convenient inspection", desc: "We come to you at a time that suits." },
      { n: 3, title: "Get the best price", desc: "We make an offer and can pay same-day." },
    ],
    [],
  );

  return (
    <section
      aria-label="Hero"
      className={cn(
        "relative overflow-hidden rounded-none border border-slate-200 bg-[#18B9C8] shadow-none md:rounded-none",
        className,
      )}
    >
      {/* Top white strip (reference style) */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B3A7A] text-white shadow-sm">
              <PhoneCall className="h-5 w-5" />
            </span>
            <p className="text-[15px] font-extrabold tracking-tight text-[#0B3A7A] sm:text-base">
              {phoneText ?? "+61 478 797 731"}
            </p>
          </div>

          <Button
            onClick={onPrimaryCta}
            className="h-10 rounded-full bg-white px-5 font-extrabold text-[#0B3A7A] shadow-sm ring-1 ring-[#0B3A7A]/35 hover:bg-slate-50"
          >
            Get a quote
          </Button>
        </div>
      </div>

      {/* Main hero */}
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 md:px-6 md:pb-14">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          {/* Left */}
          <div className="md:col-span-7">
            <div className="relative">
              {/* Center brand block */}
              <div className="relative mx-auto max-w-[640px] text-center">
                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute -top-3 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-white/35 blur-[0.5px]" />
                  <div className="relative overflow-hidden rounded-[28px] bg-white/10 p-3 backdrop-blur sm:p-4">
                    <img
                      src={HERO_IMAGE_URL}
                      alt="Car and seller"
                      className="h-[170px] w-full rounded-2xl object-cover sm:h-[210px]"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-5xl font-extrabold tracking-tight text-[#0B3A7A] sm:text-6xl">
                    Car<span className="text-white">Buyers</span>
                    <span className="align-top text-xs font-extrabold text-white/90">.com.au</span>
                  </p>
                  <p className="mt-2 text-xl font-extrabold tracking-tight text-[#0B3A7A] sm:text-2xl">
                    Sell My Car
                  </p>
                  <p className="mx-auto mt-3 max-w-[64ch] text-xs font-semibold leading-relaxed text-[#08304B] sm:text-sm">
                    Open 7 days a week • Best price promise • We come to you
                  </p>
                </div>

                {/* Steps row */}
                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  {steps.map((s) => (
                    <Card
                      key={s.n}
                      className="relative rounded-2xl border-white/35 bg-white/20 p-4 text-left shadow-sm backdrop-blur"
                    >
                      <div className="absolute -top-3 left-5 grid h-9 w-9 place-items-center rounded-full bg-[#0B3A7A] text-sm font-extrabold text-white shadow">
                        {s.n}
                      </div>
                      <p className="mt-3 text-sm font-extrabold tracking-tight text-white">{s.title}</p>
                      <p className="mt-1 text-xs font-semibold leading-relaxed text-white/90">{s.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-5">
            <div id="sell" className="scroll-mt-28">
              <div className="relative">
                {/* angled badge */}
                <div className="absolute -top-6 left-8 z-10 rotate-[-10deg] rounded-2xl bg-[#0B3A7A] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white shadow">
                  WE PAY
                  <br />
                  MORE THAN
                  <br />
                  DEALERS
                </div>

                <Card className="rounded-3xl border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.20)]">
                  <p className="pt-1 text-center text-lg font-extrabold tracking-tight text-[#0B3A7A] sm:text-xl">
                    We will buy your car today!
                  </p>

                  {/* Step indicator */}
                  <div className="mt-4 flex items-center gap-3 px-2" aria-label="Quote steps">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-[#0B3A7A] text-sm font-extrabold text-white">
                      1
                    </div>
                    <div className="h-[2px] flex-1 rounded-full bg-slate-200" />
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-sm font-extrabold text-slate-400 ring-1 ring-slate-200">
                      2
                    </div>
                    <div className="h-[2px] flex-1 rounded-full bg-slate-200" />
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-sm font-extrabold text-slate-400 ring-1 ring-slate-200">
                      ✓
                    </div>
                  </div>

                  <div className="mt-4">
                    <LeadForm variant="hero-compact" />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave (approx using layered blobs, no gradients) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44">
        <div className="absolute -left-24 bottom-[-86px] h-[220px] w-[760px] rounded-[999px] bg-white/45" />
        <div className="absolute -left-12 bottom-[-104px] h-[240px] w-[820px] rounded-[999px] bg-white/80" />
        <div className="absolute -right-24 bottom-[-96px] h-[240px] w-[760px] rounded-[999px] bg-white/55" />
      </div>
    </section>
  );
}