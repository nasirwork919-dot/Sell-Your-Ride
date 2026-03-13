import { cn } from "@/lib/utils";
import mapImg from "@/assets/carb-buyers-australia-service-areas.png";

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
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F7FBEA] p-4 shadow-sm sm:p-6">
                  <div className="relative h-[280px] w-full bg-[#F7FBEA] sm:h-[340px] md:h-[360px]">
                    <div className="absolute inset-0 bg-[#F7FBEA]" aria-hidden="true" />

                    <img
                      src={mapImg}
                      alt="Australia service areas map"
                      className="absolute inset-0 h-full w-full object-contain mix-blend-multiply"
                      style={{
                        filter: "saturate(0.45) contrast(0.92) brightness(1.03) hue-rotate(-6deg)",
                        opacity: 0.75,
                      }}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

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
      </div>
    </section>
  );
}

function MapPin({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <div className="absolute" style={{ left: `${x}%`, top: `${y}%` }} aria-label={label} title={label}>
      <span className="relative grid h-3.5 w-3.5 place-items-center rounded-full bg-white ring-2 ring-[#0B3A7A]">
        <span className="h-2 w-2 rounded-full bg-[#0B3A7A]" />
      </span>
    </div>
  );
}