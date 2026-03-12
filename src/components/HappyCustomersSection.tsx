import { useEffect, useMemo, useState } from "react";
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
          className={cn("h-1.5 w-1.5 rounded-full transition", i === active ? "bg-slate-900" : "bg-slate-300")}
        />
      ))}
    </div>
  );
}

function PhotoTile({ src, alt, className }: Photo) {
  return (
    <div
      className={cn(
        "absolute overflow-hidden rounded-xl",
        // remove the “white placeholder” feel: no white card, just photo + subtle border + shadow
        "bg-slate-200/30 shadow-[0_14px_30px_rgba(15,23,42,0.16)] ring-1 ring-slate-200/70",
        className,
      )}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
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
  const [paused, setPaused] = useState(false);

  // Auto rotate reviews (pause on hover/focus within the section)
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setPage((p) => p + 1), 5200);
    return () => window.clearInterval(id);
  }, [paused]);

  const photos: Photo[] = useMemo(
    () => [
      {
        src: "https://images.pexels.com/photos/955396/pexels-photo-955396.jpeg?auto=compress&cs=tinysrgb&w=900",
        alt: "Happy driver inside a car",
        className: "left-[5%] top-[12%] w-[210px] rotate-[-2deg] md:w-[240px]",
      },
      {
        src: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=900",
        alt: "Signing paperwork",
        className: "left-[40%] top-[6%] w-[190px] rotate-[2deg] md:w-[220px]",
      },
      {
        src: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=900",
        alt: "Blue car on the road",
        className: "right-[9%] top-[10%] w-[135px] rotate-[1deg] md:w-[155px]",
      },
      {
        src: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=900",
        alt: "Car keys in hand",
        className: "left-[25%] bottom-[12%] w-[150px] rotate-[-2deg] md:w-[170px]",
      },
      {
        src: "https://images.pexels.com/photos/4062222/pexels-photo-4062222.jpeg?auto=compress&cs=tinysrgb&w=900",
        alt: "Smiling customer outdoors",
        className: "left-[9%] bottom-[5%] w-[160px] rotate-[2deg] md:w-[185px]",
      },
      {
        src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=900",
        alt: "Handshake agreement",
        className: "right-[10%] bottom-[10%] w-[220px] rotate-[-1deg] md:w-[255px]",
      },
      {
        src: "https://images.pexels.com/photos/7652687/pexels-photo-7652687.jpeg?auto=compress&cs=tinysrgb&w=900",
        alt: "Happy customer with car",
        className: "right-[4%] top-[44%] w-[170px] rotate-[2deg] md:w-[195px]",
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
      [
        {
          name: "Daniel R.",
          text: "Inspection was quick and on time. The offer was fair and the payment landed the same day.",
        },
        {
          name: "Amy T.",
          text: "Loved not having to deal with random messages. It was private, simple, and fast.",
        },
        {
          name: "Khalid A.",
          text: "Clear communication from the first call. Pickup was organised without any stress.",
        },
      ],
    ],
    [],
  );

  const totalDots = 7;
  const current = pages[page % pages.length];

  return (
    <section
      className={cn("w-full bg-white", className)}
      aria-label="Happy customers"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
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

        {/* Collage (remove “white placeholder” by using a tinted panel + subtle pattern) */}
        <div className="relative mx-auto mt-8 h-[360px] max-w-5xl overflow-hidden rounded-3xl bg-[#F3F7FF] ring-1 ring-slate-200 sm:h-[420px]">
          {/* soft patterned base */}
          <div
            className="absolute inset-0 opacity-[0.55]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(11,58,122,0.10) 0 2px, transparent 2px), radial-gradient(circle at 70% 45%, rgba(11,58,122,0.08) 0 2px, transparent 2px)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden="true"
          />

          {/* faint AU silhouette */}
          <svg
            viewBox="0 0 1200 700"
            preserveAspectRatio="xMidYMid meet"
            className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 opacity-[0.12]"
            aria-hidden="true"
          >
            <path
              d="M353 105 L488 60 L518 110 L610 70 L730 66 L700 120 L785 168 L812 86 L872 240 L870 305 L920 338 L900 430 L842 505 L738 540 L700 590 L616 560 L585 518 L540 560 L462 518 L395 470 L346 500 L278 458 L198 420 L173 350 L192 252 L252 220 L313 180 Z"
              fill="#0B3A7A"
            />
            <path d="M775 590 L820 610 L812 660 L770 670 L740 640 Z" fill="#0B3A7A" />
          </svg>

          {photos.map((p) => (
            <PhotoTile key={p.alt} {...p} />
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

              <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-6">“{r.text}”</p>

              <div className="mt-4 h-1.5 w-full rounded-full bg-slate-100 ring-1 ring-slate-200">
                <div className="h-full w-[38%] rounded-full bg-slate-300" />
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <PaginationDots total={totalDots} active={page % totalDots} />
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