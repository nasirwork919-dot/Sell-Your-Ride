import { cn } from "@/lib/utils";

type Logo = {
  name: string;
  accent: "navy" | "teal" | "amber" | "indigo";
};

const LOGOS: Logo[] = [
  { name: "Drive Daily", accent: "navy" },
  { name: "AutoReview", accent: "teal" },
  { name: "Finance AU", accent: "amber" },
  { name: "The Telegraph", accent: "indigo" },
  { name: "Car Insider", accent: "navy" },
  { name: "Road & Track", accent: "teal" },
  { name: "Market Watch", accent: "amber" },
  { name: "Seller Stories", accent: "indigo" },
] as const;

function accentClass(accent: Logo["accent"]) {
  switch (accent) {
    case "navy":
      return "bg-[#0B3A7A] text-white";
    case "teal":
      return "bg-[#18B9C8] text-[#062B41]";
    case "amber":
      return "bg-amber-400 text-amber-950";
    case "indigo":
      return "bg-indigo-600 text-white";
  }
}

export function AsFeaturedInStrip({ className }: { className?: string }) {
  return (
    <section className={cn("w-full", className)} aria-label="As featured in">
      <div className="w-full bg-slate-100 py-10 ring-1 ring-slate-200">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-center text-xs font-extrabold uppercase tracking-[0.28em] text-slate-900">
            As featured in
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 md:flex md:flex-wrap md:items-center md:justify-center md:gap-4">
            {LOGOS.map((l) => (
              <div
                key={l.name}
                className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                title={l.name}
                aria-label={l.name}
              >
                <span className="inline-flex items-center gap-3">
                  <span className={cn("h-8 w-8 rounded-xl shadow-sm", accentClass(l.accent))} aria-hidden="true" />
                  <span className="text-sm font-extrabold tracking-tight text-slate-800">{l.name}</span>
                </span>
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-xs font-semibold text-slate-600">
            Sample logos for layout — replace with your real brand marks anytime.
          </p>
        </div>
      </div>
    </section>
  );
}