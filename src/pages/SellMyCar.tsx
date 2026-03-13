import { useMemo, useEffect, useState } from "react";
import { BackToTopButton } from "@/components/BackToTopButton";
import { CarBuyersHeader } from "@/components/CarBuyersHeader";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { MarketingPixels } from "@/components/MarketingPixels";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/LeadForm";
import { cn } from "@/lib/utils";

import heroSellMyCar from "@/assets/lady-with-a-blue-car-at-the-background.webp";

const NAV = [
  { id: "sell", label: "Sell my car" },
  { id: "truck", label: "Sell my truck" },
  { id: "caravan", label: "Sell my caravan" },
  { id: "difference", label: "Our Difference", hasDropdown: true },
  { id: "about", label: "About", hasDropdown: true },
] as const;

export default function SellMyCar() {
  const [active] = useState<string>("sell");
  const [navHidden, setNavHidden] = useState(false);
  const { direction, y } = useScrollDirection({ thresholdPx: 6 });

  const adminWhatsAppLink = useMemo(() => {
    const fromEnv = (import.meta as any).env?.VITE_ADMIN_WHATSAPP_LINK as string | undefined;
    return fromEnv ?? "https://wa.me/6147093000";
  }, []);

  function navTo(id: string) {
    if (id === "sell") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.href = `/#${id}`;
  }

  useEffect(() => {
    if (y < 24) {
      setNavHidden(false);
      return;
    }
    if (direction === "down") setNavHidden(true);
    if (direction === "up") setNavHidden(false);
  }, [direction, y]);

  const showTop = y > 520;
  const scrolled = y > 10;

  return (
    <div className="min-h-screen overflow-x-clip bg-[#22B9C5]">
      <MarketingPixels />

      <CarBuyersHeader
        active={active}
        items={NAV}
        onNav={navTo}
        hidden={navHidden}
        scrolled={scrolled}
        phoneText="1300 770 571"
      />

      <main className="w-full pb-0 pt-[74px] sm:pt-[74px]">
        {/* HERO (copied structure from home hero, with only image swapped) */}
        <section aria-label="Hero" className="relative w-full overflow-hidden bg-[#22B9C5] px-0 py-10 md:px-6 md:py-12">
          <div className="w-full px-4 md:mx-auto md:max-w-6xl md:px-6">
            <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
              {/* Left */}
              <div className="md:col-span-7">
                <div className="mx-auto max-w-[640px] text-center md:mx-0 md:text-left">
                  {/* Swapped image */}
                  <div className="relative mx-auto w-full max-w-[420px] md:mx-0">
                    <div className="relative mx-auto overflow-hidden rounded-[28px] bg-white/0 p-0 md:mx-0">
                      <img
                        src={heroSellMyCar}
                        alt="Lady with a blue car in the background"
                        className="mx-auto h-[210px] w-full max-w-[420px] rounded-[28px] object-contain md:mx-0"
                        loading="eager"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Wordmark */}
                  <div className="mt-5">
                    <p className="text-[56px] font-extrabold leading-none tracking-tight text-[#0B3A7A] sm:text-[68px]">
                      Sell<span className="text-white">Your</span>Ride
                      <span className="ml-1 align-top text-[10px] font-extrabold text-white/95 sm:text-[11px]">
                        .com.au
                      </span>
                    </p>
                    <p className="mt-2 text-[22px] font-extrabold tracking-tight text-[#0B3A7A] sm:text-[26px]">
                      Sell My Car
                    </p>
                    <p className="mx-auto mt-3 max-w-[70ch] text-[11px] font-semibold leading-relaxed text-[#08304B] sm:text-xs md:mx-0">
                      Open 7 days a week • Best price promise • We come to you
                    </p>
                  </div>

                  {/* Steps */}
                  <div className="mt-8 grid gap-4 sm:grid-cols-3 md:max-w-[680px]">
                    {[
                      {
                        n: 1,
                        title: "Get a quick offer",
                        desc: "Fill out the form with your details and we will provide an estimate price.",
                      },
                      { n: 2, title: "Convenient inspection", desc: "We come to a location of your choice to inspect the vehicle." },
                      { n: 3, title: "Get the best price", desc: "We make an offer and provide same-day payment." },
                    ].map((s) => (
                      <Card key={s.n} className="relative rounded-2xl border-white/55 bg-white/55 p-4 text-left shadow-sm">
                        <div className="absolute -top-4 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full bg-[#0B3A7A] text-sm font-extrabold text-white shadow">
                          {s.n}
                        </div>
                        <p className="mt-3 text-sm font-extrabold tracking-tight text-[#0B3A7A]">{s.title}</p>
                        <p className="mt-1 text-[11px] font-semibold leading-relaxed text-[#08304B]">{s.desc}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: form card */}
              <div className="md:col-span-5">
                <div className="relative w-full md:mx-auto md:max-w-none">
                  {/* Starburst badge */}
                  <div className="pointer-events-none absolute -top-7 left-10 z-10">
                    <div className="grid h-14 w-14 rotate-[-10deg] place-items-center rounded-[18px] bg-transparent">
                      <div className="relative grid h-14 w-14 place-items-center">
                        <div className="absolute inset-0 [clip-path:polygon(50%_0%,62%_12%,78%_4%,76%_22%,96%_20%,84%_34%,100%_50%,84%_66%,96%_80%,76%_78%,78%_96%,62%_88%,50%_100%,38%_88%,22%_96%,24%_78%,4%_80%,16%_66%,0%_50%,16%_34%,4%_20%,24%_22%,22%_4%,38%_12%)] bg-[#0B3A7A]" />
                        <div className="relative px-2 text-center text-[9px] font-extrabold leading-[1.05] tracking-[0.12em] text-white">
                          WE PAY
                          <br />
                          MORE THAN
                          <br />
                          DEALERS
                        </div>
                      </div>
                    </div>
                  </div>

                  <Card className="w-full rounded-2xl border-white/70 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.20)]">
                    <p className="pt-1 text-center text-[18px] font-extrabold tracking-tight text-[#0B3A7A]">
                      We will buy your car today!
                    </p>

                    {/* Step indicator */}
                    <div className="mt-4 flex items-center gap-3 px-2" aria-label="Quote steps">
                      <div className="grid h-7 w-7 place-items-center rounded-full bg-[#0B3A7A] text-[12px] font-extrabold text-white">
                        1
                      </div>
                      <div className="h-[2px] flex-1 rounded-full bg-slate-200" />
                      <div className="grid h-7 w-7 place-items-center rounded-full bg-white text-[12px] font-extrabold text-slate-300 ring-1 ring-slate-200">
                        2
                      </div>
                      <div className="h-[2px] flex-1 rounded-full bg-slate-200" />
                      <div className="grid h-7 w-7 place-items-center rounded-full bg-white text-[12px] font-extrabold text-slate-300 ring-1 ring-slate-200">
                        ✓
                      </div>
                    </div>

                    <div className={cn("mt-4")}>
                      <LeadForm
                        variant="hero-compact"
                        onPrimaryCta={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        phoneText="+61 478 797 731"
                      />
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsAppButton href={adminWhatsAppLink} />
      <BackToTopButton show={showTop} />
    </div>
  );
}