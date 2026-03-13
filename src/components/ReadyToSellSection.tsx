import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ReadyToSellSection({
  className,
  onQuote,
}: {
  className?: string;
  onQuote: () => void;
}) {
  return (
    <section className={cn("w-full bg-[#1E4C86]", className)} aria-label="Ready to sell">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Brand */}
          <div className="text-white">
            <p className="text-[26px] font-extrabold tracking-tight sm:text-[30px]">
              Sell <span className="text-[#66E3B1]">Your</span> Ride
            </p>
            <div className="mx-auto mt-2 h-[2px] w-12 rounded-full bg-white/20" />
          </div>

          {/* Title */}
          <h2 className="mt-6 text-balance text-[34px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[44px]">
            Ready to sell your car?
          </h2>

          {/* Copy blocks (centered, narrow, lots of line-height like screenshot) */}
          <div className="mt-7 space-y-6 text-[12px] font-semibold leading-[1.9] text-white/90 sm:text-[13px]">
            <p>
              At <span className="font-extrabold text-white">Sell Your Ride</span>, we have designed a service that
              caters to sellers no matter what stage you are at in your car selling journey.
            </p>

            <p>
              If you are new to the market and considering your options, it won&apos;t take you too long to work out
              that our service outweighs lengthy private sale and dealer trade ins in cost and convenience.
            </p>

            <p>
              Selling your car privately is extremely time consuming, risky and it costs you money to prepare your car
              and advertise it for sale. Further, selling to a dealership can come with its own risks relating to price
              and payment.
            </p>

            <p>
              At <span className="font-extrabold text-white">Sell Your Ride</span> we pride ourselves on providing a
              fast, stress free solution to sell your car for a fair price. We centre our service around you, from our
              best price guarantee and on-site inspections, to our same day payments and best price guarantee.
            </p>

            <p>
              So, whether you&apos;re simply interested in the process itself or keen to get started selling your car,
              get in touch with our team today and we&apos;ll be happy to help you out!
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button
              onClick={onQuote}
              className={cn(
                "h-12 min-w-[220px] rounded-full px-10 text-sm font-extrabold",
                "bg-[#66E3B1] text-[#0B3A7A] shadow-[0_12px_22px_rgba(0,0,0,0.22)]",
                "hover:bg-[#57D7A6] active:translate-y-[1px]",
                "ring-2 ring-[#2AB77D]/55",
              )}
            >
              Get a quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}