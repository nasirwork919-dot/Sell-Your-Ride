import { cn } from "@/lib/utils";
import mapImg from "@/assets/coverage-map.png";

function TopCurve({ from = "#22B9C5", to = "#FFFFFF" }: { from?: string; to?: string }) {
  return (
    <div className="relative w-full" aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block h-[64px] w-full sm:h-[76px] md:h-[88px]">
        <path
          d="M0,0H1440V35C1320,52 1220,78 1080,82C920,87 820,54 720,45C610,35 500,55 360,72C220,89 120,90 0,74Z"
          fill={from}
        />
        <path
          d="M0,74C120,90 220,89 360,72C500,55 610,35 720,45C820,54 920,87 1080,82C1220,78 1320,52 1440,35V120H0Z"
          fill={to}
        />
      </svg>
    </div>
  );
}

export function SellMyCarLocationsSection({ className }: { className?: string }) {
  return (
    <section className={cn("w-full", className)} aria-label="Sell your car locations">
      {/* Curve should match page teal above */}
      <div className="-mt-[1px]">
        <TopCurve from="#22B9C5" to="#FFFFFF" />
      </div>

      <div className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:px-6">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[#F3F6FA] shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            <div className="p-6 sm:p-8 md:p-10">
              <h2 className="text-balance text-[30px] font-extrabold leading-[1.12] tracking-tight text-[#0B3A7A] sm:text-[34px]">
                Sell your car in the
                <br />
                following locations:
              </h2>

              <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-[#F7FBEA] p-4 shadow-sm sm:p-6">
                <p className="text-center text-[20px] font-extrabold tracking-tight text-[#0B3A7A] sm:text-[22px]">
                  We buy cars Australia wide
                </p>

                <div className="relative mt-4 h-[320px] w-full sm:h-[380px] md:h-[420px]">
                  <img
                    src={mapImg}
                    alt="Australia map"
                    className="absolute inset-0 h-full w-full object-contain opacity-95"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div className="h-2 bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}