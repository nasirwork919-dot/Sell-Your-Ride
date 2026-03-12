import { cn } from "@/lib/utils";
import carImg from "@/assets/transparent-blue-car.webp";

type City = {
  name: string;
  x: number; // percentage within the map box
  y: number; // percentage within the map box
};

const CITIES: City[] = [
  // West
  { name: "Geraldton", x: 12, y: 58 },
  { name: "Perth", x: 12, y: 69 },
  { name: "Busselton", x: 12, y: 76 },

  // North / QLD
  { name: "Cairns", x: 77, y: 25 },
  { name: "Townsville", x: 77, y: 34 },
  { name: "North Queensland", x: 74.5, y: 41 },

  // QLD coast
  { name: "Rockhampton", x: 78, y: 52 },
  { name: "Bundaberg", x: 78, y: 58 },
  { name: "Noosa Heads", x: 78, y: 65 },
  { name: "Brisbane", x: 78, y: 70 },
  { name: "Gold Coast", x: 78, y: 78 },

  // NSW / ACT / VIC / SA
  { name: "Sydney", x: 73, y: 84 },
  { name: "Canberra", x: 68, y: 88 },
  { name: "Melbourne", x: 69, y: 96 },
  { name: "Geelong", x: 63.5, y: 97.5 },
  { name: "Adelaide", x: 52, y: 88 },

  // TAS
  { name: "Tasmania", x: 70, y: 114 },
];

export function AustraliaCoverageMap({ className }: { className?: string }) {
  return (
    <section className={cn("w-full bg-[#66E3B1]", className)} aria-label="Australia coverage">
      <div className="w-full px-4 py-10 sm:py-12 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-[38px] font-extrabold tracking-tight text-[#0B3A7A] sm:text-[52px]">
            We buy cars Australia wide
          </h2>

          <div className="relative mx-auto mt-8 max-w-5xl">
            {/* Map frame */}
            <div className="relative mx-auto aspect-[16/9] w-full">
              {/* Australia outline (stylized to match the screenshot) */}
              <svg
                viewBox="0 0 1200 700"
                preserveAspectRatio="xMidYMid meet"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                {/* Outline */}
                <path
                  d="M353 105 L488 60 L518 110 L610 70 L730 66 L700 120 L785 168 L812 86 L872 240 L870 305 L920 338 L900 430 L842 505 L738 540 L700 590 L616 560 L585 518 L540 560 L462 518 L395 470 L346 500 L278 458 L198 420 L173 350 L192 252 L252 220 L313 180 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.95)"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />

                {/* Tasmania */}
                <path
                  d="M775 590 L820 610 L812 660 L770 670 L740 640 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.95)"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Center car image */}
              <div className="pointer-events-none absolute left-1/2 top-[52%] w-[220px] -translate-x-1/2 -translate-y-1/2 sm:w-[260px] md:w-[320px]">
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
          </div>

          {/* Bottom-left rating badge (like screenshot) */}
          <div className="mt-6 flex items-center justify-start">
            <div className="inline-flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.10)] ring-1 ring-slate-200">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-slate-50 text-[#0B3A7A] ring-1 ring-slate-200">
                <span className="text-lg font-extrabold">G</span>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-600">Google Rating</p>
                <p className="mt-0.5 text-sm font-extrabold text-[#0B3A7A]">
                  4.7 <span className="text-amber-500">★★★★★</span>
                </p>
                <p className="mt-0.5 text-[11px] font-semibold text-slate-500">Based on 1233 reviews</p>
              </div>
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
        {/* blue dot */}
        <span className="relative grid h-3.5 w-3.5 place-items-center rounded-full bg-[#0B3A7A] shadow-sm">
          <span className="h-2 w-2 rounded-full bg-white" />
        </span>

        {/* orange label */}
        <span className="rounded-full bg-[#F47A1F] px-3 py-1 text-[11px] font-extrabold text-white shadow-[0_8px_18px_rgba(15,23,42,0.10)]">
          {label}
        </span>
      </div>
    </div>
  );
}