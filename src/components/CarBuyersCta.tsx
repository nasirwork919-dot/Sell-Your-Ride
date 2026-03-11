import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, BadgeCheck } from "lucide-react";

export function CarBuyersCta({
  className,
  onQuote,
}: {
  className?: string;
  onQuote: () => void;
}) {
  return (
    <section className={cn(className)} aria-label="Call to action">
      <Card className="overflow-hidden rounded-3xl border-slate-200 bg-white shadow-sm">
        <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800 ring-1 ring-emerald-200">
              <BadgeCheck className="h-4 w-4" />
              Clean. Simple. Professional.
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0B3A7A] sm:text-3xl">
              Ready to get your best offer?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              Fill out the quick form and we’ll come to you for a free inspection.
            </p>
          </div>

          <div className="md:col-span-4 md:flex md:justify-end">
            <Button
              onClick={onQuote}
              className="h-12 w-full rounded-full bg-[#0B3A7A] px-6 text-base font-semibold text-white shadow-sm hover:bg-[#082F64] md:w-auto"
            >
              Get a quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="h-2 bg-[#18B9C8]" />
      </Card>
    </section>
  );
}