import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { BadgeCheck, ThumbsUp } from "lucide-react";

export function SellMyCarEndNoteSection({ className }: { className?: string }) {
  return (
    <section className={cn("w-full bg-white", className)} aria-label="End note">
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:pb-16 sm:pt-12 md:px-6">
        <Card className="overflow-hidden rounded-3xl border-slate-200 bg-[#F3F6FA] shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-12 md:items-center md:gap-8 md:p-10">
            <div className="md:col-span-8">
              <p className="text-balance text-[26px] font-extrabold leading-[1.12] tracking-tight text-[#0B3A7A] sm:text-[32px]">
                It&apos;s easy to sell your car when you&apos;re working with CarBuyers.
              </p>
              <p className="mt-3 text-[12px] font-semibold leading-relaxed text-[#08304B]/80 sm:text-[13px]">
                We have the best service and the best prices.
              </p>
            </div>

            <div className="md:col-span-4">
              <div className="grid gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#22B9C5]/15 text-[#0B3A7A] ring-1 ring-[#22B9C5]/25">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12px] font-extrabold tracking-tight text-[#0B3A7A]">Best service</p>
                    <p className="mt-0.5 text-[11px] font-semibold text-slate-600">Fast, clear, professional</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F47A1F]/15 text-[#0B3A7A] ring-1 ring-[#F47A1F]/25">
                    <ThumbsUp className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12px] font-extrabold tracking-tight text-[#0B3A7A]">Best prices</p>
                    <p className="mt-0.5 text-[11px] font-semibold text-slate-600">Fair offers, no hassle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-2 bg-[#22B9C5]" />
        </Card>
      </div>
    </section>
  );
}