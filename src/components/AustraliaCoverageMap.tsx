import { cn } from "@/lib/utils";
import mapImg from "@/assets/coverage-map.png";
import carImg from "@/assets/transparent-blue-car.webp";

type City = {
  name: string;
  x: number; // percentage within the map box
  y: number; // percentage within the map box
};

const CITIES: City[] = [
  // West
  { name: "Geraldton", x: 9, y: 63 },
  { name: "Perth", x: 9, y: 74 },
  { name: "Busselton", x: 9, y: 82 },

  // North / QLD
  { name: "Cairns", x: 76, y: 20 },
  { name: "Townsville", x: 76, y: 30 },
  { name: "North Queensland", x: 70, y: 37 },

  // QLD coast
  { name: "Rockhampton", x: 78, y: 49 },
  { name: "Bundaberg", x: 78, y: 56 },
  { name: "Noosa Heads", x: 78, y: 62 },
  { name: "Brisbane", x: 78, y: 69 },
  { name: "Gold Coast", x: 78, y: 78 },

  // NSW / ACT / VIC / SA
  { name: "Sydney", x: 74.5, y: 86 },
  { name: "Canberra", x: 69.5, y: 90 },
  { name: "Adelaide", x: 53, y: 87 },
  { name: "Melbourne", x: 67, y: 97 },
  { name: "Geelong", x: 60.5, y: 98.5 },

  // TAS
  { name: "Tasmania", x: 72, y: 110 },
];

export function AustraliaCoverageMap({ className }: { className?: string }) {
  return (
    <section className={cn("w-full bg-white", className)} aria-label="We buy cars Australia wide">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12 md:px-6">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[#66E3B1] shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
          <div className="px-5 pt-8 text-center sm:px-10 sm:pt-10">
            <h2 className="text-balance text-[34px] font-extrabold tracking-tight text-[#0B3A7A] sm:text-[44px]">
              We buy cars Australia wide
            </h2>
          </div>

          <div className="relative mx-auto mt-6 w-full max-w-5xl px-3 pb-10 sm:mt-8 sm:px-8 sm:pb-12">
            {/* Map stage */}
            <div className="relative overflow-visible">
              <div className="relative h-[320px] w-full sm:h-[380px] md:h-[460px]">
                {/* Australia outline map (image) */}
                <img
                  src={mapImg}
                  alt="Australia map"
                  className="absolute inset-0 h-full w-full object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Center car */}
                <div className="pointer-events-none absolute left-1/2 top-[52%] w-[200px] -translate-x-1/2 -translate-y-1/2 sm:w-[240px] md:w-[300px]">
                  <img
                    src={carImg}
                    alt="Car"
                    className="h-auto w-full object-contain drop-shadow-[0_18px_30px_rgba(15,23,42,0.20)]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* City pins */}
                {CITIES.map((c) => (
                  <CityPin key={c.name} x={c.x} y={c.y} label={c.name} />
                ))}
              </div>
            </div>

            {/* Small footer spacing like the reference */}
            <p className="mt-6 text-center text-[11px] font-semibold text-[#0B3A7A]/75 sm:text-[12px]">
              Metro & regional coverage — we’ll confirm timing after you submit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CityPin({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <div className="absolute" style={{ left: `${x}%`, top: `${y}%` }} aria-label={label} title={label}>
      <div className="flex items-center gap-2">
        <span className="relative grid h-3.5 w-3.5 place-items-center rounded-full bg-[#0B3A7A] shadow-sm">
          <span className="h-2 w-2 rounded-full bg-white" />
        </span>

        <span className="rounded-full bg-[#F47A1F] px-2.5 py-1 text-[10px] font-extrabold text-white shadow-[0_10px_18px_rgba(15,23,42,0.14)] sm:text-[11px]">
          {label}
        </span>
      </div>
    </div>
  );
}