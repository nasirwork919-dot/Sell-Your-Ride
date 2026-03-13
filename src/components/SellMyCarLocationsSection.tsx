import { cn } from "@/lib/utils";
import mapImg from "@/assets/coverage-map.png";
import carImg from "@/assets/transparent-blue-car.webp";

type CityPin = {
  name: string;
  x: number;
  y: number;
};

const PINS: CityPin[] = [
  { name: "Geraldton", x: 12, y: 58 },
  { name: "Perth", x: 16, y: 76 },
  { name: "Busselton", x: 18, y: 86 },

  { name: "Cairns", x: 74, y: 20 },
  { name: "Townsville", x: 74, y: 30 },
  { name: "North Queensland", x: 68, y: 37 },

  { name: "Rockhampton", x: 78, y: 48 },
  { name: "Bundaberg", x: 78, y: 56 },
  { name: "Noosa Heads", x: 78, y: 62 },
  { name: "Brisbane", x: 78, y: 69 },
  { name: "Gold Coast", x: 78, y: 78 },

  { name: "Sydney", x: 73.5, y: 86 },
  { name: "Canberra", x: 69.5, y: 90 },
  { name: "Adelaide", x: 53, y: 86 },
  { name: "Melbourne", x: 67, y: 96 },
  { name: "Geelong", x: 60.5, y: 98 },

  { name: "Tasmania", x: 72, y: 110 },
];

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

export function SellMyCarLocationsSection({ className }: { className?: string }) {
  return (
    <section className={cn("w-full bg-white", className)} aria-label="Sell your car locations">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:px-6">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[#F3F6FA] shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
          <div className="grid gap-10 p-6 sm:p-8 md:grid-cols-12 md:items-center md:gap-8 md:p-10">
            {/* Left copy */}
            <div className="md:col-span-5">
              <h2 className="text-balance text-[30px] font-extrabold leading-[1.12] tracking-tight text-[#0B3A7A] sm:text-[34px]">
                Sell your car in the
                <br />
                following locations:
              </h2>

              <ul className="mt-6 grid gap-2 text-[13px] font-semibold text-[#0B3A7A]">
                {LIST.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B3A7A]/70" aria-hidden="true" />
                    <span className="leading-relaxed text-[#0B3A7A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right map */}
            <div className="md:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F7FBEA] p-4 shadow-sm sm:p-6">
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

                  <div className="pointer-events-none absolute left-1/2 top-1/2 w-[170px] -translate-x-1/2 -translate-y-1/2 sm:w-[200px] md:w-[230px]">
                    <img
                      src={carImg}
                      alt="Car"
                      className="h-auto w-full object-contain drop-shadow-[0_18px_30px_rgba(15,23,42,0.22)]"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {PINS.map((p) => (
                    <MapPin key={p.name} x={p.x} y={p.y} label={p.name} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="h-2 bg-white" />
        </div>
      </div>
    </section>
  );
}

function MapPin({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <div className="absolute" style={{ left: `${x}%`, top: `${y}%` }} aria-label={label} title={label}>
      <div className="flex items-center gap-2">
        <span className="relative grid h-3.5 w-3.5 place-items-center rounded-full bg-white ring-2 ring-[#0B3A7A]">
          <span className="h-2 w-2 rounded-full bg-[#0B3A7A]" />
        </span>

        <span className="rounded-full bg-[#F47A1F] px-2.5 py-1 text-[10px] font-extrabold text-white shadow-[0_10px_18px_rgba(15,23,42,0.14)] sm:text-[11px]">
          {label}
        </span>
      </div>
    </div>
  );
}