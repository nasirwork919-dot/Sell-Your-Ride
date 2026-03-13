import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BookOpen, KeyRound, MailOpen } from "lucide-react";

type Item = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
};

const ITEMS: Item[] = [
  { title: "All spare keys", icon: KeyRound },
  { title: "Comprehensive Service History", icon: BookOpen },
  { title: "Letter of Payout", icon: MailOpen },
];

export function InspectionChecklistSection({ className }: { className?: string }) {
  return (
    <section className={cn("w-full bg-white", className)} aria-label="Inspection checklist">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:px-6">
        <div className="text-center">
          <p className="text-[18px] font-extrabold tracking-tight text-[#0B3A7A] sm:text-[20px]">SellYourRide</p>
          <p className="mx-auto mt-3 max-w-2xl text-balance text-[18px] font-extrabold leading-[1.15] tracking-tight text-[#0B3A7A] sm:text-[22px]">
            For a fast sale and smooth processing, <br className="hidden sm:block" />
            bring the following to your inspection.
          </p>
        </div>

        <div className="mx-auto mt-7 max-w-3xl">
          <Card className="rounded-2xl border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-7">
            <div className="grid gap-4 sm:grid-cols-3">
              {ITEMS.map((it) => {
                const Icon = it.icon;
                return (
                  <div key={it.title} className="flex flex-col items-center text-center">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F47A1F]/15 text-[#F47A1F] ring-1 ring-[#F47A1F]/25">
                      <Icon className="h-6 w-6" />
                    </span>
                    <p className="mt-3 text-[12px] font-extrabold tracking-tight text-[#0B3A7A] sm:text-[13px]">
                      {it.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}