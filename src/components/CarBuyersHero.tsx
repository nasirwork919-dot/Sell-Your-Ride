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
      { n: 1, title: "Get a quick offer", desc: "Fill out the form to get started." },
      { n: 2, title: "Free inspection", desc: "We come to you at a time that suits." },
      { n: 3, title: "Best offer", desc: "We evaluate and pay fast." },
    ],
    [],
  );

  return (
    <section
      aria-label="Hero"
      className={cn(
        "relative overflow-hidden rounded-3xl border border-slate-200 bg-[#18B9C8] shadow-[0_18px_50px_rgba(15,23,42,0.10)]",
        className,
      )}
    >
      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 z-10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B3A7A] text-white shadow-sm">
              <PhoneCall className="h-5 w-5" />
            </span>
            <p className="text-[15px] font-semibold tracking-tight text-[#0B3A7A] sm:text-base">
              {phoneText ?? "+61 478 797 731"}
            </p>
          </div>

          <Button
            onClick={onPrimaryCta}
            className="h-10 rounded-full bg-white px-4 font-semibold text-[#0B3A7A] ring-1 ring-[#0B3A7A]/25 shadow-sm hover:bg-slate-50"
          >
            Get a quote
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-6 pt-[86px] md:px-6 md:pb-10">
        <div className="grid gap-6 md:grid-cols-12 md:items-start md:gap-8">
          {/* LEFT */}
          <div className="md:col-span-7">
            <div className="relative">
              {/* soft spotlight */}
              <div className="pointer-events-none absolute left-8 top-6 h-44 w-44 rounded-full bg-white/35" />

              {/* vehicle image */}
              <div className="relative mx-auto w-full max-w-[620px]">
                <div className="overflow-hidden rounded-3xl bg-white/10 p-3 backdrop-blur sm:p-4">
                  <img
                    src={HERO_IMAGE_URL}
                    alt="Car on the road"
                    className="h-[170px] w-full rounded-2xl object-cover sm:h-[210px]"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  <div className="mt-4 text-center">
                    <p className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                      SellYourRide<span className="text-white/90">.com.au</span>
                    </p>
                    <p className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B3A7A] sm:text-3xl">
                      We Buy Any Car
                    </p>
                    <p className="mx-auto mt-2 max-w-[56ch] text-sm font-semibold leading-relaxed text-[#08304B]">
                      We come to you, inspect for free, we evaluate the car and get you the best offer within 24 hours.
                    </p>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {steps.map((s) => (
                      <Card
                        key={s.n}
                        className="relative rounded-2xl border-white/40 bg-white/20 p-4 shadow-sm backdrop-blur"
                      >
                        <div className="absolute -top-3 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full bg-[#0B3A7A] text-sm font-extrabold text-white shadow">
                          {s.n}
                        </div>
                        <p className="mt-3 text-sm font-extrabold text-white">{s.title}</p>
                        <p className="mt-1 text-xs font-semibold text-white/90">{s.desc}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-5">
            <div id="sell" className="scroll-mt-28">
              <div className="relative">
                <div className="absolute -top-5 left-6 z-10 rotate-[-10deg] rounded-2xl bg-[#0B3A7A] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white shadow">
                  We pay more than dealers
                </div>

                <Card className="rounded-3xl border-slate-200 bg-white p-4 shadow-[0_16px_44px_rgba(15,23,42,0.18)]">
                  <div className="px-2 pb-2">
                    <p className="text-xl font-extrabold tracking-tight text-[#0B3A7A] sm:text-2xl">
                      We will buy your car today!
                    </p>

                    <div className="mt-3 flex items-center gap-3" aria-label="Quote steps">
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-[#0B3A7A] text-sm font-extrabold text-white">
                        1
                      </div>
                      <div className="h-[2px] flex-1 rounded-full bg-slate-200" />
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-sm font-extrabold text-slate-400 ring-1 ring-slate-200">
                        2
                      </div>
                      <div className="h-[2px] flex-1 rounded-full bg-slate-200" />
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-sm font-extrabold text-slate-400 ring-1 ring-slate-200">
                        3
                      </div>
                    </div>
                  </div>

                  <div className="mt-2">
                    <LeadForm />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
