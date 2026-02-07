import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ReviewItem = {
  name: string;
  text: string;
  avatarUrl: string;
};

export function ReviewsMarquee({
  items,
  className,
  speedSeconds = 34,
}: {
  items: ReadonlyArray<ReviewItem>;
  className?: string;
  speedSeconds?: number;
}) {
  // Duplicate the list for seamless looping
  const loop = [...items, ...items];

  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",
        className
      )}
      aria-label="Customer reviews"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-white/0 md:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-white/0 md:w-16" />

      <div className="p-4 md:p-5">
        <div
          className="group flex w-max gap-3 md:gap-4 motion-reduce:transform-none"
          style={
            {
              animation: `reviews-marquee ${speedSeconds}s linear infinite`,
            } as React.CSSProperties
          }
        >
          {loop.map((r, idx) => (
            <ReviewCard key={`${r.name}-${idx}`} item={r} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes reviews-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Pause on hover/focus for better UX */
        section:hover .group { animation-play-state: paused; }
        section:focus-within .group { animation-play-state: paused; }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          section .group { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

function ReviewCard({ item }: { item: ReviewItem }) {
  return (
    <Card className="w-[280px] shrink-0 rounded-2xl border-slate-200 bg-white p-4 shadow-sm md:w-[340px] md:p-5">
      <div className="flex items-center gap-3">
        <img
          src={item.avatarUrl}
          alt={`${item.name} avatar`}
          className="h-10 w-10 rounded-full border border-slate-200 object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold tracking-tight text-slate-900">{item.name}</p>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">Verified seller</p>
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-700">“{item.text}”</p>
    </Card>
  );
}