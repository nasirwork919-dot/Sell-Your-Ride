import { cn } from "@/lib/utils";
import { Bolt, ListChecks, MapPinned, MessageSquareText } from "lucide-react";

type Step = {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

const STEPS: Step[] = [
  {
    title: "Choose your Truck",
    desc: "Find your make, model, year and badge in the form above.",
    icon: ListChecks,
  },
  {
    title: "Request a quick offer",
    desc: "Once you've submitted the form one of our buyers will get back to you with a price.",
    icon: MessageSquareText,
  },
  {
    title: "On Site inspection",
    desc: "We'll meet you at your home or office anywhere in Australia.",
    icon: MapPinned,
  },
  {
    title: "Instant payment",
    desc: "We'll give you an offer and make payment on the day once you've agreed.",
    icon: Bolt,
  },
];

export function SellMyTruckStepsCard({ className }: { className?: string }) {
  return (
    <section className={cn("w-full bg-[#F3F6FA]", className)} aria-label="How it works steps (truck)">
      <div className="mx-auto max-w-6xl px-4 pb-12 sm:pb-14 md:px-6">
        <div
          className={cn(
            "mx-auto max-w-5xl rounded-3xl bg-white p-5 sm:p-7",
            "shadow-[0_18px_50px_rgba(15,23,42,0.10)] ring-1 ring-slate-200",
          )}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((s) => (
              <StepItem key={s.title} step={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step }: { step: Step }) {
  const Icon = step.icon;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="grid h-12 w-12 place-items-center">
        <Icon className="h-9 w-9 text-[#F47A1F]" />
      </div>

      <p className="mt-2 text-[14px] font-extrabold tracking-tight text-[#0B3A7A]">{step.title}</p>
      <p className="mt-1 text-[11px] font-semibold leading-relaxed text-[#08304B]/80">{step.desc}</p>
    </div>
  );
}