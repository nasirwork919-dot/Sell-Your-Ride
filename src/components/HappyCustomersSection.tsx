import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

type Review = {
  name: string;
  text: string;
};

type Photo = {
  src: string;
  alt: string;
  className: string;
};

function StarsRow() {
  return (
    <div className="flex items-center gap-0.5 text-amber-500" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-amber-500" />
      ))}
    </div>
  );
}

function GoogleBadge() {
  return (
    <span
      className="grid h-5 w-5 place-items-center rounded-full bg-white text-[11px] font-extrabold text-[#0B3A7A] ring-1 ring-slate-200"
      aria-label="Google"
      title="Google"
    >
      G
    </span>
  );
}

function PaginationDots({ total, active }: { total: number; active: number }) {
  return (
    <div className="mt-4 flex items-center justify-center gap-2" aria-label="Pagination">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "h-1.5 w-1.5 rounded-full transition",
            i === active ? "bg-slate-900" : "bg-slate-300",
          )}
        />
      ))}
    </div>
  );
}

export function HappyCustomersSection({
  className,
  onEnquire,
}: {
  className?: string;
  onEnquire: () => void;
}) {
  const [page, setPage] = useState(0);

  const photos: Photo[] = useMemo(
    () => [
      {
        src: "https://images.pexels.com/photos/7144196/pexels-photo-7144196.jpeg?auto=compress&cs=tinysrgb&w=700",
        alt: "Seller with car",
        className: "left-[6%] top-[14%] w-[190px] rotate-[-2deg] md:w-[220px]",
      },
      {
        src: "https://images.pexels.com/photos/4246113/pexels-photo-4246113.jpeg?auto=compress&cs=tinysrgb&w=700",
        alt: "Seller smiling near vehicle",
        className: "left-[41%] top-[8%] w-[170px] rotate-[2deg] md:w-[200px]",
      },
      {
        src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=700",
        alt: "Car front view",
        className: "right-[10%] top-[10%] w-[120px] rotate-[1deg] md:w-[140px]",
      },
      {
        src: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=700",
        alt: "Car side view",
        className: "left-[26%] bottom-[14%] w-[140px] rotate-[-2deg] md:w-[160px]",
      },
      {
        src: "https://images.pexels.com/photos/7144184/pexels-photo-7144184.jpeg?auto=compress&cs=tinysrgb&w=700",
        alt: "Seller outside with car",
        className: "left-[10%] bottom-[6%] w-[150px] rotate-[2deg] md:w-[170px]",
      },
      {
        src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=700",
        alt: "Handing over keys",
        className: "right-[11%] bottom-[12%] w-[200px] rotate-[-1deg] md:w-[230px]",
      },
      {
        src: "https://images.pexels.com/photos/7144183/pexels-photo-7144183.jpeg?auto=compress&cs=tinysrgb&w=700",
        alt: "Happy customer near vehicle",
        className: "right-[5%] top-[44%] w-[160px] rotate-[2deg] md:w-[185px]",
      },
    ],
    [],
  );

  const pages: Review[][] = useMemo(
    () => [
      [
        {
          name: "Belinda W.",
          text: "The whole process was very smooth, quick and easy. Great people to deal with and offered reasonable price for car.",
        },
        {
          name: "Brad C",
          text: "Lachlan made the whole process very simple. Payment made promptly and then arrangements made to pick up car so easy to deal with, would use again and highly recommend.",
        },
        {
          name: "Greg C",
          text: "I had a good experience with CarBuyers. Given range for sale over phone pending an inspection, all went smoothly and received an offer I was happy with.",
        },
      ],
      [
        {
          name: "Nadia S",
          text: "Fast call-back and clear next steps. No time-wasters and everything was explained clearly.",
        },
        {
          name: "Imran K",
          text: "Booked an inspection quickly and got an offer that matched expectations. Very easy process.",
        },
        {
          name: "Sara M",
          text: "Professional team, no marketplace spam. The follow-up was quick and friendly.",
        },
      ],
    ],
    [],
  );

  const current = pages[page % pages.length];

  return (
    <section className={cn("w-full bg-white", className)} aria-label="Happy customers">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:px-6">
        {/* Headline */}
        <div className="text-center">
          <h2 className="text-[30px] font-extrabold tracking-tight text-[#0B3A7A] sm:text-[40px]">
            Join thousands of happy customers
          </h2>
          <p className="mt-2 text-[11px] font-semibold text-slate-500 sm:text-xs">
            Our national network means you can have your car sold fast, safe and at the best price.
          </p>
        </div>

        {/* Collage */}
        <div className="relative mx-auto mt-8 h-[360px] max-w-5xl overflow-hidden rounded-3xl bg-slate-50/30 ring-1 ring-slate-200 sm:h-[420px]">
          {/* faint AU silhouette */}
          <svg
            viewBox="0 0 1200 700"
            preserveAspectRatio="xMidYMid meet"
            className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 opacity-[0.10]"
            aria-hidden="true"
          >
            <path
              d="M353 105 L488 60 L518 110 L610 70 L730 66 L700 120 L785 168 L812 86 L872 240 L870 305 L920 338 L900 430 L842 505 L738 540 L700 590 L616 560 L585 518 L540 560 L462 518 L395 470 L346 500 L278 458 L198 420 L173 350 L192 252 L252 220 L313 180 Z"
              fill="#0B3A7A"
            />
            <path d="M775 590 L820 610 L812 660 L770 670 L740 640 Z" fill="#0B3A7A" />
          </svg>

          {photos.map((p) => (
            <div
              key={p.alt}
              className={cn(
                "absolute overflow-hidden rounded-lg bg-white shadow-[0_12px_28px_rgba(15,23,42,0.18)] ring-1 ring-slate-200",
                p.className,
              )}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

        {/* Reviews row */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {current.map((r) => (
            <Card key={r.name} className="rounded-2xl border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-extrabold text-[#0B3A7A]">{r.name}</p>
                <GoogleBadge />
              </div>

              <div className="mt-2">
                <StarsRow />
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-6">{r.text}</p>

              {/* tiny scroll hint rail like the screenshot */}
              <div className="mt-4 h-1.5 w-full rounded-full bg-slate-100 ring-1 ring-slate-200">
                <div className="h-full w-[38%] rounded-full bg-slate-300" />
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <PaginationDots total={7} active={page % 7} />
        </div>

        {/* Controls are hidden (still functional for future) */}
        <div className="sr-only">
          <button type="button" onClick={() => setPage((p) => (p + 1) % pages.length)}>
            Next
          </button>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Button
            onClick={onEnquire}
            className="h-11 rounded-full bg-[#0B3A7A] px-10 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(15,23,42,0.18)] hover:bg-[#082F64]"
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </section>
  );
}