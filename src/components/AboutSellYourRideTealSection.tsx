import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AboutSellYourRideTealSection({
  className,
  onContact,
}: {
  className?: string;
  onContact: () => void;
}) {
  return (
    <section className={cn("w-full bg-[#22B9C5]", className)} aria-label="About SellYourRide">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-white/90">About</p>

          {/* Big wordmark */}
          <div className="mt-6 select-none text-[56px] font-extrabold leading-none tracking-tight sm:text-[72px] md:text-[84px]">
            <span className="text-[#0B3A7A]">Sell</span>
            <span className="text-white">Your</span>
            <span className="text-[#0B3A7A]">Ride</span>
            <span className="ml-1 align-top text-[10px] font-extrabold text-white/90 sm:text-[11px] md:text-[12px]">
              .com.au
            </span>
          </div>

          {/* Copy (kept dense like screenshot) */}
          <div className="mt-8 space-y-5 text-[12px] font-semibold leading-[1.9] text-white/95 sm:text-[13px]">
            <p>
              We have been providing great prices and outstanding service to our customers since 2009. It&apos;s been
              over a decade since we purchased our first vehicle and have since grown to be one of the most trusted and
              reliable car buying services in the country.
            </p>

            <p>
              SellYourRide.com.au has pioneered the industry and we are proud of our success and dedication to customer
              satisfaction since our inception. We have evolved to offer same day money transfers, the most competitive
              prices, on site vehicle inspections, free valuations and extremely efficient mobile pick-ups and transfers.
            </p>

            <p>
              We are the purchasing subsidiary of Australian Automotive Sales, a brand known for our quality vehicles,
              service excellence and great prices.
            </p>
          </div>

          <div className="mt-10">
            <Button
              onClick={onContact}
              className={cn(
                "h-12 min-w-[220px] rounded-full px-10 text-sm font-extrabold",
                "bg-[#F47A1F] text-white shadow-[0_12px_22px_rgba(0,0,0,0.18)]",
                "hover:bg-[#E36E1C] active:translate-y-[1px]",
                "ring-2 ring-[#D96512]/60",
              )}
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}