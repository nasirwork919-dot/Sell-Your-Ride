import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function IsItTimeToSellTruckSection({
  className,
  onContact,
}: {
  className?: string;
  onContact: () => void;
}) {
  return (
    <section className={cn("w-full bg-[#163F75]", className)} aria-label="Is it time to sell your truck">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Wordmark */}
          <div className="select-none text-[28px] font-extrabold leading-none tracking-tight text-white sm:text-[34px]">
            Sell<span className="text-[#22B9C5]">Your</span>Ride
            <span className="ml-1 align-top text-[10px] font-extrabold text-white/85 sm:text-[11px]">.com.au</span>
          </div>

          {/* Headline */}
          <h2 className="mt-6 text-balance text-[34px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[44px]">
            Is it time to sell your truck?
          </h2>

          {/* Copy (kept close to screenshot density/line-height) */}
          <div className="mt-6 space-y-5 text-[12px] font-semibold leading-[1.95] text-white/90 sm:text-[13px]">
            <p>
              It doesn&apos;t matter where you are at in the buying stage. SellYourRide is your optimal selling option.
              If you&apos;ve never sold before and are mulling it over, our buying service is a real winner, way better
              than private selling or dealerships.
            </p>

            <p>
              Private selling can be time consuming and extremely costly, not to mention the price for advertising.
              Furthermore, dealer trade in is often dodgy buying techniques.
            </p>

            <p>
              SellYourRide works to achieve happy results for our valued clients. We want to ensure a smooth, positive
              and stress-free selling solution. Indeed, you could potentially make more from private selling, but it
              might not be worth the risk when you factor in all other costs. This is why truck owners choose
              SellYourRide for selling — we work hard to create a good service and a happy price for our valued
              customers.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Button
              onClick={onContact}
              className={cn(
                "h-12 min-w-[220px] rounded-full px-10 text-sm font-extrabold",
                "bg-[#66E3B1] text-[#0B3A7A] shadow-[0_12px_22px_rgba(0,0,0,0.22)]",
                "hover:bg-[#57D7A6] active:translate-y-[1px]",
                "ring-2 ring-[#2AB77D]/55",
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