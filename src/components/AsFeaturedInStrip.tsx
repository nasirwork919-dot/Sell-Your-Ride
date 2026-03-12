import { cn } from "@/lib/utils";

type Logo = {
  name: string;
  src: string;
};

const LOGOS: Logo[] = [
  {
    name: "Australian FinTech",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Australian_FinTech_logo.png/320px-Australian_FinTech_logo.png",
  },
  {
    name: "Daily Mail",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Daily_Mail_logo.png/320px-Daily_Mail_logo.png",
  },
  {
    name: "Drive",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Drive.com.au_logo.svg/320px-Drive.com.au_logo.svg.png",
  },
  {
    name: "Daily Telegraph",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/The_Daily_Telegraph_logo.svg/320px-The_Daily_Telegraph_logo.svg.png",
  },
  {
    name: "Inwire",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Inwire_logo.svg/320px-Inwire_logo.svg.png",
  },
  {
    name: "Herald Sun",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Herald_Sun_logo.svg/320px-Herald_Sun_logo.svg.png",
  },
  {
    name: "Yahoo Finance",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Yahoo%21_Finance_logo_2021.svg/320px-Yahoo%21_Finance_logo_2021.svg.png",
  },
  {
    name: "Gumtree Cars",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Gumtree_logo.svg/320px-Gumtree_logo.svg.png",
  },
  {
    name: "CarExpert",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Car_logo.svg/320px-Car_logo.svg.png",
  },
];

export function AsFeaturedInStrip({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "mt-6 overflow-hidden rounded-3xl bg-slate-100 px-5 py-8 ring-1 ring-slate-200 sm:px-8 sm:py-10",
        className,
      )}
      aria-label="As featured in"
    >
      <p className="text-center text-xs font-extrabold uppercase tracking-[0.28em] text-slate-900">
        As featured in
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-10">
        {LOGOS.map((l) => (
          <div
            key={l.name}
            className="grid h-8 place-items-center opacity-80 grayscale transition-opacity hover:opacity-100 sm:h-9"
            title={l.name}
            aria-label={l.name}
          >
            <img
              src={l.src}
              alt={l.name}
              className="h-full w-auto object-contain"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}