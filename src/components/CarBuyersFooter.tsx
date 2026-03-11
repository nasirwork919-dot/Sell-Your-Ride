import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function CarBuyersFooter({ className }: { className?: string }) {
  return (
    <footer className={cn("mt-12", className)}>
      <Card className="rounded-3xl border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#18B9C8] text-sm font-extrabold tracking-tight text-white shadow-sm">
                SYR
              </span>
              <div>
                <p className="text-lg font-extrabold tracking-tight text-[#0B3A7A]">SellYourRide</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Australia wide
                </p>
              </div>
            </div>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
              We come to you, inspect for free, evaluate your car and provide the best offer within 24 hours.
            </p>
          </div>

          <div className="grid gap-2 text-sm font-semibold text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Contact</p>
            <p>1300 770 571</p>
            <p className="text-slate-500">hello@sellyourride.com.au</p>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-200 pt-4 text-xs font-semibold text-slate-500">
          © {new Date().getFullYear()} SellYourRide. All rights reserved.
        </div>
      </Card>
    </footer>
  );
}