import { cn } from "@/lib/utils";

type Logo = {
  name: string;
  src: string;
};

const LOGOS: Logo[] = [
  {
    name: "Drive",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Drive.com.au_logo.svg/512px-Drive.com.au_logo.svg.png",
  },
  {
    name: "Yahoo Finance",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Yahoo%21_Finance_logo_2021.svg/512px-Yahoo%21_Finance_logo_2021.svg.png",
  },
  {
    name: "Daily Mail",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Daily_Mail_logo.png/512px-Daily_Mail_logo.png",
  },
  {
    name: "The Daily Telegraph",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/The_Daily_Telegraph_logo.svg/512px-The_Daily_Telegraph_logo.svg.png",
  },
  {
    name: "Herald Sun",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Herald_Sun_logo.svg/512px-Herald_Sun_logo.svg.png",
  },
  {
    name: "Gumtree",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Gumtree_logo.svg/512px-Gumtree_logo.svg.png",
  },
  {
    name: "CarExpert (sample)",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Car_icon.svg/512px-Car_icon.svg.png",
  },
  {
    name: "MarketWatch",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/MarketWatch_logo.svg/512px-MarketWatch_logo.svg.png",
  },
];

function TopWave({
  from = "#22B9C5",
  to = "#F1F5F9", // slate-100
}: {
  from?: string;
  to?: string;
}) {
  return (
    <div className="relative w-full" aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block h-[72px] w-full sm:h-[88px] md:h-[104px]">
        {/* Top fill (hero teal) */}
        <path
          d="M0,0H1440V35C1320,52 1220,78 1080,82C920,87 820,54 720,45C610,35 500,55 360,72C220,89 120,90 0,74Z"
          fill={from}
        />
        {/* Bottom fill (this section bg) */}
        <path
          d="M0,74C120,90 220,89 360,72C500,55 610,35 720,45C820,54 920,87 1080,82C1220,78 1320,52 1440,35V120H0Z"
          fill={to}
        />
      </svg>
    </div>
  );
}

export function AsFeaturedInStrip({
  className,
  speedSeconds = 26,
}: {
  className?: string;
  speedSeconds?: number;
}) {
  const loop = [...LOGOS, ...LOGOS];

  return (
    <section className={cn("w-full", className)} aria-label="As featured in">
      {/* Merge: hero -> featured strip curve (teal to slate-100) */}
      <div className="-mt-[1px]">
        <TopWave from="#22B9C5" to="#F1F5F9" />
      </div>

      <div className="w-full bg-slate-100 py-10 ring-1 ring-slate-200">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-center text-xs font-extrabold uppercase tracking-[0.28em] text-slate-900">
            As featured in
          </p>
        </div>

        <div className="relative mt-6 overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-100 to-slate-100/0 sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-100 to-slate-100/0 sm:w-20" />

          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div
              className="group flex w-max items-center gap-10 motion-reduce:transform-none"
              style={
                {
                  animation: `featured-marquee ${speedSeconds}s linear infinite`,
                } as React.CSSProperties
              }
            >
              {loop.map((l, idx) => (
                <div
                  key={`${l.name}-${idx}`}
                  className="flex h-10 items-center justify-center sm:h-11"
                  title={l.name}
                  aria-label={l.name}
                >
                  <img
                    src={l.src}
                    alt={l.name}
                    className="h-full w-auto max-w-[170px] object-contain opacity-80 grayscale transition-opacity duration-200 hover:opacity-100"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-5 max-w-6xl px-4 md:px-6">
          <p className="text-center text-xs font-semibold text-slate-600">
            Logos shown for layout/demo purposes — replace with your real media mentions anytime.
          </p>
        </div>

        <style>{`
          @keyframes featured-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @media (prefers-reduced-motion: reduce) {
            .group { animation: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
}