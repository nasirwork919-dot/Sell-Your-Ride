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
  { name: "Geraldton", x: 14, y: 60 },
  { name: "Perth", x: 14, y: 72 },
  { name: "Busselton", x: 14, y: 80 },

  // North / QLD
  { name: "Cairns", x: 86, y: 20 },
  { name: "Townsville", x: 86, y: 29 },
  { name: "North Queensland", x: 83, y: 37 },

  // QLD coast
  { name: "Rockhampton", x: 87, y: 48 },
  { name: "Bundaberg", x: 87, y: 54 },
  { name: "Noosa Heads", x: 87, y: 61 },
  { name: "Brisbane", x: 87, y: 66 },
  { name: "Gold Coast", x: 87, y: 74 },

  // NSW / ACT / VIC / SA
  { name: "Sydney", x: 82, y: 80 },
  { name: "Canberra", x: 76.5, y: 84 },
  { name: "Melbourne", x: 77, y: 92 },
  { name: "Geelong", x: 72, y: 93.5 },
  { name: "Adelaide", x: 60, y: 84 },

  // TAS
  { name: "Tasmania", x: 79, y: 98 },
];

export function AustraliaCoverageMap({ className }: { className?: string }) {
  return (
    <section className={cn("w-full bg-white", className)} aria-label="Australia coverage map">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12 md:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-6">
          <div className="text-center">
            <p className="text-[22px] font-extrabold tracking-tight text-[#0B3A7A] sm:text-[28px]">
              We buy cars Australia wide
            </p>
            <p className="mt-2 text-[12px] font-semibold text-slate-600 sm:text-[13px]">
              Metro & regional coverage across Australia — we’ll confirm timing after you submit.
            </p>
          </div>

          <div className="relative mt-6 overflow-hidden rounded-2xl bg-[#F3F1D9] ring-1 ring-slate-200">
            <div className="relative h-[300px] w-full sm:h-[360px] md:h-[460px]">
              <img
                src={mapImg}
                alt="Australia coverage map"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Center car overlay */}
              <div className="pointer-events-none absolute left-1/2 top-[55%] w-[210px] -translate-x-1/2 -translate-y-1/2 sm:w-[250px] md:w-[320px]">
                <img
                  src={carImg}
                  alt="Car"
                  className="h-auto w-full object-contain drop-shadow-[0_18px_28px_rgba(15,23,42,0.16)]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Pins */}
              {CITIES.map((c) => (
                <CityPin key={c.name} x={c.x} y={c.y} label={c.name} />
              ))}
            </div>
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

        <span className="rounded-full bg-[#F47A1F] px-2.5 py-1 text-[10px] font-extrabold text-white shadow-[0_8px_18px_rgba(15,23,42,0.10)] sm:text-[11px]">
          {label}
        </span>
      </div>
    </div>
  );
}