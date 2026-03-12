import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  BookOpen,
  HandCoins,
  Map,
  Smile,
  ThumbsUp,
  Zap,
} from "lucide-react";

type Item = {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

const ITEMS: Item[] = [
  {
    title: "Immediate Payment",
    desc: "Payment made directly into your\nbank account",
    icon: Zap,
  },
  {
    title: "On site vehicle inspections",
    desc: "We come to you at home or work",
    icon: BookOpen,
  },
  {
    title: "Open 7 Days in 7 states",
    desc: "Sell your car any day, anywhere in\nAustralia",
    icon: Map,
  },
  {
    title: "Smooth sales process",
    desc: "Free vehicle pickup and transfer of\nownership on your behalf",
    icon: ThumbsUp,
  },
  {
    title: "Best price guarantee",
    desc: "Shop around and get the best deal\nwith us",
    icon: BadgeCheck,
  },
  {
    title: "Customer satisfaction",
    desc: "Highly recommended by our\ncustomers",
    icon: Smile,
  },
];

export function ExactBenefitsOrangeSection({
  className,
  onEnquire,
}: {
  className?: string;
  onEnquire: () => void;
}) {
  return (
    <section
      className={cn("w-full bg-[#F07A5A]", className)}
      aria-label="Benefits (exact)"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12 md:px-6">
        <h2 className="mx-auto max-w-5xl text-center text-balance text-[28px] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[34px] md:text-[40px]">
          We&apos;ll take care of the paperwork and make a risk-free
          <br className="hidden sm:block" />
          payment directly to your bank account!
        </h2>

        <div className="mt-10 grid gap-y-12 sm:mt-12 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-16">
          {ITEMS.map((it) => (
            <Benefit key={it.title} item={it} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            onClick={onEnquire}
            className={cn(
              "h-11 min-w-[220px] rounded-full px-10 text-sm font-extrabold",
              "bg-[#67E2B0] text-[#0B3A7A] shadow-[0_12px_22px_rgba(0,0,0,0.22)]",
              "hover:bg-[#57D7A6] active:translate-y-[1px]",
              "ring-2 ring-[#2AB77D]/55",
            )}
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </section>
  );
}

function Benefit({ item }: { item: Item }) {
  const Icon = item.icon;

  return (
    <div className="mx-auto flex max-w-[260px] flex-col items-center text-center">
      <div className="mb-3 grid h-14 w-14 place-items-center text-white">
        <Icon className="h-12 w-12 stroke-[1.6]" />
      </div>

      <p className="text-[15px] font-extrabold tracking-tight text-white sm:text-base">
        {item.title}
      </p>

      <p className="mt-2 whitespace-pre-line text-[12px] font-medium leading-relaxed text-white/95 sm:text-[13px]">
        {item.desc}
      </p>
    </div>
  );
}