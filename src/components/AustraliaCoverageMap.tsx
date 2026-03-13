import { cn } from "@/lib/utils";
import carImg from "@/assets/transparent-blue-car.webp";
import mapImg from "@/assets/coverage-map.png";
import { FaqTopWave } from "@/components/FaqTopWave";

type City = {
  name: string;
  x: number; // percentage within the map box
  y: number; // percentage within the map box
};

const CITIES: City[] = [
  // West
  { name: "Geraldton", x: 8, y: 65 },
  { name: "Perth", x: 8, y: 76 },
  { name: "Busselton", x: 8, y: 83 },

  // North / QLD
  { name: "Cairns", x: 80, y: 20 },
  { name: "Townsville", x: 80, y: 30 },
  { name: "North Queensland", x: 77, y: 37 },

  // QLD coast
  { name: "Rockhampton", x: 81, y: 49 },
  { name: "Bundaberg", x: 81, y: 55 },
  { name: "Noosa Heads", x: 81, y: 62 },
  { name: "Brisbane", x: 81, y: 67 },
  { name: "Gold Coast", x: 81, y: 75 },

  // NSW / ACT / VIC / SA
  { name: "Sydney", x: 76, y: 81 },
  { name: "Canberra", x: 71, y: 85 },
  { name: "Melbourne", x: 72, y: 93 },
  { name: "Geelong", x: 66, y: 94.5 },
  { name: "Adelaide", x: 54, y: 85 },

  // TAS
  { name: "Tasmania", x: 74, y: 98 },
];

export function AustraliaCoverageMap({ className }: { className?: string }) {
  return (
    <section className={cn("w-full", className)} aria-label="Australia coverage">
      {/* White -> Green curve cap (no text), matching footer/FAQ style */}
      <div className="-mb-[18px] sm:-mb-[22px]">
        <FaqTopWave from="#FFFFFF" to="#66E3B1" />
      </div>

      <div className="w-full bg-[#66E3B1]">
        <div className="w-full px-4 py-10 sm:py-12 md:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-[38px] font-extrabold tracking-tight text-[#0B3A7A] sm:text-[52px]">
              We buy cars Australia wide
            </h2>

            <div className="relative mx-auto mt-8 max-w-5xl">
              {/* Map frame */}
              <div className={cn("relative mx-auto w-full overflow-hidden rounded-3xl", "h-[420px] sm:h-[520px] md:h-[660px]")}>
                {/* Map image (uploaded) */}
                <img
                  src={mapImg}
                  alt="Australia coverage map"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Center car image (kept) */}
                <div className="pointer-events-none absolute left-1/2 top-[55%] w-[220px] -translate-x-1/2 -translate-y-1/2 sm:w-[260px] md:w-[320px]">
                  <img
                    src={carImg}
                    alt="Car"
                    className="h-auto w-full object-contain drop-shadow-[0_18px_28px_rgba(15,23,42,0.18)]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Pins + labels */}
                {CITIES.map((c) => (
                  <CityPin key={c.name} x={c.x} y={c.y} label={c.name} />
                ))}
              </div>

              <p className="mt-4 text-center text-[12px] font-semibold text-[#0B3A7A]/80 sm:text-[13px]">
                Metro & regional coverage across Australia — we’ll confirm timing after you submit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CityPin({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
      aria-label={label}
      title={label}
    >
      <div className="flex items-center gap-2">
        <span className="relative grid h-3.5 w-3.5 place-items-center rounded-full bg-[#0B3A7A] shadow-sm">
          <span className="h-2 w-2 rounded-full bg-white" />
        </span>

        <span className="rounded-full bg-[#F47A1F] px-3 py-1 text-[11px] font-extrabold text-white shadow-[0_8px_18px_rgba(15,23,42,0.10)]">
          {label}
        </span>
      </div>
    </div>
  );
}