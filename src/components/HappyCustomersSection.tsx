import { useEffect, useMemo, useRef, useState } from "react";
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

function PhotoTile({ src, alt, className }: Photo) {
  return (
    <div className={cn("absolute overflow-hidden rounded-2xl shadow-[0_18px_38px_rgba(15,23,42,0.18)]", className)}>
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
    </div>
  );
}

function Dots({
  count,
  active,
  onDot,
}: {
  count: number;
  active: number;
  onDot: (idx: number) => void;
}) {
  return (
    <div className="mt-4 flex items-center justify-center gap-2" aria-label="Carousel pagination">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onDot(i)}
          className={cn(
            "h-2.5 w-2.5 rounded-full transition",
            i === active ? "bg-[#0B3A7A]" : "bg-slate-300 hover:bg-slate-400",
          )}
          aria-label={`Go to review ${i + 1}`}
        />
      ))}
    </div>
  );
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function ReviewsThreeUpCarousel({
  items,
  className,
  intervalMs = 5200,
}: {
  items: ReadonlyArray<Review>;
  className?: string;
  intervalMs?: number;
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const startXRef = useRef<number | null>(null);
  const deltaXRef = useRef<number>(0);

  const maxIdx = Math.max(0, items.length - 3);

  function go(next: number) {
    setIdx(clamp(next, 0, maxIdx));
  }

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIdx((p) => (p >= maxIdx ? 0 : p + 1));
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [paused, intervalMs, maxIdx]);

  function onPointerDown(e: React.PointerEvent) {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    startXRef.current = e.clientX;
    deltaXRef.current = 0;
    setPaused(true);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (startXRef.current == null) return;
    deltaXRef.current = e.clientX - startXRef.current;

    const track = trackRef.current;
    if (!track) return;

    track.style.transition = "none";
    track.style.transform = `translateX(calc(${-idx * (100 / 3)}% + ${deltaXRef.current}px))`;
  }

  function onPointerUp() {
    const dx = deltaXRef.current;
    startXRef.current = null;

    const track = trackRef.current;
    if (track) {
      track.style.transition = "";
      track.style.transform = "";
    }

    const threshold = 60;
    if (dx <= -threshold) go(idx + 1);
    else if (dx >= threshold) go(idx - 1);

    window.setTimeout(() => setPaused(false), 1200);
  }

  const activeDot = idx;

  return (
    <section
      className={cn("relative", className)}
      aria-label="Customer reviews carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-white/0 sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-white/0 sm:w-16" />

      <div
        className={cn(
          "relative overflow-hidden",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="group"
        aria-roledescription="carousel"
      >
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(${-idx * (100 / 3)}%)` }}
        >
          {items.map((r) => (
            <div key={r.name + r.text.slice(0, 10)} className="w-full shrink-0 px-1 sm:px-2 md:w-1/3">
              <Card className="h-full rounded-2xl border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-extrabold tracking-tight text-[#0B3A7A]">{r.name}</p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Verified Google review
                    </p>
                  </div>
                  <GoogleBadge />
                </div>

                <div className="mt-3">
                  <StarsRow />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">“{r.text}”</p>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Dots count={Math.max(1, maxIdx + 1)} active={activeDot} onDot={(i) => go(i)} />
    </section>
  );
}

export function HappyCustomersSection({
  className,
  onEnquire,
}: {
  className?: string;
  onEnquire: () => void;
}) {
  const photos: Photo[] = useMemo(
    () => [
      {
        src: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Car keys in hand",
        className:
          "left-[2%] top-[16%] h-[180px] w-[145px] rotate-[-4deg] sm:left-[6%] sm:top-[14%] sm:h-[210px] sm:w-[165px] md:h-[250px] md:w-[190px]",
      },
      {
        src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Premium car front view",
        className:
          "right-[6%] top-[8%] h-[88px] w-[150px] rotate-[1deg] sm:right-[18%] sm:top-[6%] sm:h-[95px] sm:w-[160px] md:h-[110px] md:w-[185px]",
      },
      {
        src: "https://images.pexels.com/photos/4386324/pexels-photo-4386324.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Mobile form details",
        className:
          "left-[50%] top-[52%] h-[110px] w-[170px] -translate-x-1/2 rotate-[-2deg] sm:left-[60%] sm:top-[52%] sm:h-[120px] sm:w-[180px] md:h-[140px] md:w-[210px]",
      },
      {
        src: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Car exterior in daylight",
        className:
          "left-[16%] bottom-[10%] h-[135px] w-[220px] rotate-[2deg] sm:left-[26%] sm:bottom-[10%] sm:h-[150px] sm:w-[240px] md:h-[170px] md:w-[280px]",
      },
      {
        src: "https://images.pexels.com/photos/10394784/pexels-photo-10394784.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Happy customer near a car",
        className:
          "left-[46%] top-[10%] h-[220px] w-[210px] -translate-x-1/2 rotate-[1deg] sm:left-[40%] sm:top-[10%] sm:h-[260px] sm:w-[240px] md:h-[300px] md:w-[275px]",
      },
      {
        src: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Signing paperwork",
        className:
          "right-[2%] top-[22%] h-[110px] w-[170px] rotate-[2deg] sm:right-[10%] sm:top-[18%] sm:h-[120px] sm:w-[190px] md:h-[140px] md:w-[220px]",
      },
      {
        src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1400",
        alt: "Handshake agreement",
        className:
          "right-[0%] bottom-[10%] h-[150px] w-[235px] rotate-[-2deg] sm:right-[8%] sm:bottom-[12%] sm:h-[160px] sm:w-[250px] md:h-[190px] md:w-[300px]",
      },
    ],
    [],
  );

  const reviews: Review[] = useMemo(
    () => [
      {
        name: "Belinda W.",
        text: "The whole process was very smooth, quick and easy. Great people to deal with and offered reasonable price for car.",
      },
      {
        name: "Brad C",
        text: "Lachlan made the whole process very simple. Payment made promptly and then arrangements made to pick up car so easy to deal with.",
      },
      {
        name: "Greg C",
        text: "Given range for sale over phone pending an inspection, all went smoothly and received an offer I was happy with.",
      },
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
      {
        name: "Daniel R.",
        text: "Inspection was quick and on time. The offer was fair and the payment landed the same day.",
      },
      {
        name: "Amy T.",
        text: "Loved not having to deal with random messages. It was private, simple, and fast.",
      },
    ],
    [],
  );

  return (
    <section className={cn("w-full bg-white", className)} aria-label="Happy customers">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:px-6">
        <div className="text-center">
          <h2 className="text-[30px] font-extrabold tracking-tight text-[#0B3A7A] sm:text-[40px]">
            Join thousands of happy customers
          </h2>
          <p className="mt-2 text-[11px] font-semibold text-slate-500 sm:text-xs">
            Our national network means you can have your car sold fast, safe and at the best price.
          </p>
        </div>

        <div
          className={cn(
            "relative mx-auto mt-8 max-w-5xl overflow-visible",
            "h-[420px] sm:h-[420px] md:h-[460px]",
          )}
          aria-label="Customer photos"
        >
          {/* soft backdrop shape like the reference */}
          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <div className="h-[260px] w-[300px] rounded-[32px] bg-slate-100/70 sm:h-[300px] sm:w-[360px]" />
          </div>

          {photos.map((p) => (
            <PhotoTile key={p.alt} {...p} />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
          <ReviewsThreeUpCarousel items={reviews} />
        </div>

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