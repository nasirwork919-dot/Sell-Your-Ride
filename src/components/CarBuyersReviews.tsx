import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export type Review = {
  name: string;
  text: string;
};

export function CarBuyersReviews({
  className,
  items,
}: {
  className?: string;
  items: ReadonlyArray<Review>;
}) {
  return (
    <section className={cn("rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8", className)}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Reviews</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B3A7A] sm:text-3xl">
            Trusted by Australian sellers
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Clean process, fast follow-up, and clear next steps.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
          <Star className="h-4 w-4 text-amber-500" />
          4.9 <span className="text-slate-500">(200+)</span>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.slice(0, 6).map((r) => (
          <Card key={r.name + r.text.slice(0, 8)} className="rounded-3xl border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-500" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500" />
                ))}
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Verified</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">“{r.text}”</p>
            <p className="mt-4 text-sm font-extrabold tracking-tight text-[#0B3A7A]">{r.name}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}