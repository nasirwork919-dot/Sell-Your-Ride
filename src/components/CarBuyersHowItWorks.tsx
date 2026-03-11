import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BadgeCheck, ClipboardPenLine, Handshake, PhoneCall } from "lucide-react";

const STEPS = [
  {
    n: "1",
    title: "Tell us about your car",
    desc: "Quick form. Clear details. No clutter.",
    icon: ClipboardPenLine,
  },
  {
    n: "2",
    title: "We come to you",
    desc: "Free inspection at a time that suits you.",
    icon: PhoneCall,
  },
  {
    n: "3",
    title: "Best offer within 24 hours",
    desc: "We evaluate and present your best option fast.",
    icon: BadgeCheck,
  },
] as const;

export function CarBuyersHowItWorks({ className }: { className?: string }) {
  return (
    <section className={cn("rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8", className)}>
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">How it works</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0B3A7A] sm:text-3xl">
            Simple, clear, fast.
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            A straightforward process built for busy sellers. We keep it private and practical.
          </p>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
            <Handshake className="h-4 w-4 text-[#18B9C8]" />
            Trusted local team
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {STEPS.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.n} className="rounded-3xl border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#0B3A7A] text-sm font-extrabold text-white">
                  {s.n}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-[#0B3A7A] ring-1 ring-slate-200">
                  <Icon className="h-5 w-5" />
                </span>
              </div>

              <p className="mt-4 text-lg font-extrabold tracking-tight text-[#0B3A7A]">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}