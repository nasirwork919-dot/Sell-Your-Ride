import { cn } from "@/lib/utils";
import serviceAreasImg from "@/assets/carb-buyers-australia-service-areas.png";

const LOCATIONS = [
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

export function AustraliaCoverageMap({ className }: { className?: string }) {
  return (
    <section className={cn("w-full bg-white", className)} aria-label="Australia coverage">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12 md:px-6">
        <div className="rounded-3xl border border-slate-200 bg-[#F3F6FA] p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-6">
          <div className="grid items-stretch gap-6 md:grid-cols-12 md:gap-8">
            {/* Left list */}
            <div className="md:col-span-5">
              <h2 className="text-balance text-[26px] font-extrabold leading-[1.1] tracking-tight text-[#0B3A7A] sm:text-[30px]">
                Sell your car in the following locations:
              </h2>

              <ul className="mt-5 grid gap-1.5 text-[12px] font-semibold text-[#0B3A7A] sm:text-[13px]">
                {LOCATIONS.map((l) => (
                  <li key={l} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B3A7A]" aria-hidden="true" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right image panel */}
            <div className="md:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
                <p className="text-center text-[16px] font-extrabold tracking-tight text-[#0B3A7A] sm:text-[18px]">
                  We buy cars Australia wide
                </p>

                <div className="mt-3 overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
                  <img
                    src={serviceAreasImg}
                    alt="CarBuyers Australia service areas"
                    className="h-auto w-full object-contain"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <p className="mt-3 text-center text-[11px] font-semibold text-slate-500 sm:text-[12px]">
                Metro & regional coverage across Australia — we’ll confirm timing after you submit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}