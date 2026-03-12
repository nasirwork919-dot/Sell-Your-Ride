import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Banknote, Clock3, DollarSign, Headphones, ShieldCheck, Users } from "lucide-react";

const ITEMS = [
  {
    title: "National network of car buyers",
    icon: Users,
  },
  {
    title: "We pay more than dealers",
    icon: DollarSign,
  },
  {
    title: "Best price offer within 24 hours",
    icon: Clock3,
  },
  {
    title: "Get paid on the same day",
    icon: Banknote,
  },
  {
    title: "We do all the paperwork",
    icon: ShieldCheck,
  },
  {
    title: "Free onsite inspection & quote",
    icon: Headphones,
  },
] as const;

export function BenefitsOrangeSection({
  className,
  onEnquire,
}: {
  className?: string;
  onEnquire: () => void;
}) {
  return (
    <section className={cn("w-full bg-[#F47A1F]", className)} aria-label="Benefits">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:px-6">
        <div className="text-center">
          <h2 className="text-balance text-[34px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[44px]">
            We make selling your vehicle simple,
            <br />
            safe and fast.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => {
            const Icon = it.icon;
            return (
              <Card
                key={it.title}
                className={cn(
                  "rounded-3xl border-white/40 bg-white/18 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.12)] ring-1 ring-white/35",
                )}
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-[#0B3A7A] shadow-sm ring-1 ring-white/60">
                    <Icon className="h-7 w-7" />
                  </span>

                  <p className="text-pretty text-[18px] font-extrabold leading-tight tracking-tight text-white">
                    {it.title}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            onClick={onEnquire}
            className="h-11 rounded-full bg-[#137C2B] px-10 text-sm font-extrabold text-white shadow-[0_14px_28px_rgba(0,0,0,0.18)] hover:bg-[#106824]"
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </section>
  );
}