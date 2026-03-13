import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AboutWordmarkSection({
  className,
  onContact,
}: {
  className?: string;
  onContact: () => void;
}) {
  return (
    <section className={cn("w-full bg-white", className)} aria-label="About Sell Your Ride">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-slate-700">About</p>

          <h2 className="mt-6 text-balance text-[56px] font-extrabold leading-none tracking-tight sm:text-[72px] md:text-[86px]">
            <span className="text-[#0B3A7A]">Sell</span>
            <span className="text-[#22B9C5]">Your</span>
            <span className="text-[#0B3A7A]">Ride</span>
            <span className="ml-1 align-top text-[12px] font-extrabold text-slate-500 sm:text-[13px] md:text-[14px]">
              .com.au
            </span>
          </h2>

          <div className="mt-8 space-y-6 text-[12px] font-medium leading-[1.9] text-slate-600 sm:text-[13px]">
            <p>
              We’ve been helping Australian sellers move their vehicles on quickly and privately with a service built
              around clarity and speed. No public listings, no inbox spam — just one clean submission and a real
              follow-up.
            </p>

            <p>
              Sell Your Ride is focused on a smooth experience: fair guidance, practical next steps, and a team that
              handles the outreach so you don’t have to. We aim to make the process simple, professional, and
              stress‑free.
            </p>

            <p>
              Our approach is designed to be mobile-first, time efficient, and respectful of your privacy — so you can
              keep your information private while still moving toward a great outcome.
            </p>
          </div>

          <Button
            onClick={onContact}
            className={cn(
              "mt-10 h-11 min-w-[220px] rounded-full px-10 text-sm font-extrabold",
              "bg-[#F47A1F] text-white shadow-[0_12px_22px_rgba(0,0,0,0.18)]",
              "hover:bg-[#E36E1C] active:translate-y-[1px]",
              "ring-2 ring-[#D96512]/55",
            )}
          >
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}