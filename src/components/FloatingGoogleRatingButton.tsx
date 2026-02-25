import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function FloatingGoogleRatingButton({
  href,
  rating = "4.9",
  countText = "200+",
}: {
  href: string;
  rating?: string;
  countText?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-[76px] left-4 z-50 md:bottom-[92px] md:left-6"
      aria-label="Open Google reviews"
      title="Google Reviews"
    >
      <Button
        className="h-12 rounded-full border border-amber-200 bg-white/80 px-4 text-slate-900 shadow-lg shadow-slate-900/10 backdrop-blur hover:bg-white"
        variant="secondary"
      >
        <span className="mr-2 grid h-8 w-8 place-items-center rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-200">
          <Star className="h-4 w-4" />
        </span>
        <span className="flex flex-col items-start leading-none">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">Google</span>
          <span className="mt-1 text-sm font-semibold">
            {rating} <span className="text-slate-500">({countText})</span>
          </span>
        </span>
      </Button>
    </a>
  );
}