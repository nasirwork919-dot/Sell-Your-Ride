import { cn } from "@/lib/utils";
import mapImg from "@/assets/carb-buyers-australia-service-areas.png";

const LIST = [
  "Melbourne Country and Metro",
  "Sydney Country and Metro",
  "Brisbane Country and Metro",
  "Gold Coast Country and Metro",
  "Perth Country and Metro",
  "Adelaide Country and Metro",
  "Canberra Country and Metro",
  "Tasmania and Metro",
  "North Queensland and Metro",
  "Geelong Country and Metro",
] as const;

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
      <div className="-mt-[1px]">
        <TopCurve from="#22B9C5" to="#FFFFFF" />
      </div>

      <div className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:px-6">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[#F3F6FA] shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            <div className="grid gap-10 p-6 sm:p-8 md:grid-cols-12 md:items-center md:gap-10 md:p-10">
              <div className="md:col-span-5">
                <h2 className="text-balance text-[30px] font-extrabold leading-[1.12] tracking-tight text-[#0B3A7A] sm:text-[34px]">
                  Sell your car in the
                  <br />
                  following locations:
                </h2>

                <ul className="mt-6 grid gap-2.5 text-[13px] font-semibold text-[#0B3A7A]">
                  {LIST.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B3A7A]/70" aria-hidden="true" />
                      <span className="leading-relaxed text-[#0B3A7A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-7">
                {/* Match the site palette: slate/neutral instead of green */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
                  <div className="relative h-[280px] w-full overflow-hidden rounded-xl bg-slate-50 sm:h-[340px] md:h-[360px]">
                    {/* Soft vignette so the map feels embedded */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.0)_0%,rgba(248,250,252,0.0)_45%,rgba(248,250,252,0.92)_100%)]" />

                    {/* Map image only */}
                    <img
                      src={mapImg}
                      alt="Australia service areas map"
                      className="absolute inset-0 h-full w-full object-contain"
                      style={{
                        // Remove odd casts; keep it airy + neutral like the rest of the site
                        filter: "saturate(0.35) contrast(0.85) brightness(1.12)",
                        opacity: 0.42,
                      }}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
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