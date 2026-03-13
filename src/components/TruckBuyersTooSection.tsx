import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TruckBuyersTooSection({
  className,
  onContact,
}: {
  className?: string;
  onContact: () => void;
}) {
  return (
    <section className={cn("w-full bg-white", className)} aria-label="We're TruckBuyers too">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#0B3A7A]">JUST TRUCKBUYERS?</p>

          <h2 className="mt-6 text-balance text-[34px] font-extrabold leading-[1.05] tracking-tight text-[#0B3A7A] sm:text-[44px]">
            We&apos;re TruckBuyers too!
          </h2>

          <div className="mt-8 space-y-5 text-[12px] font-medium leading-[1.95] text-[#08304B]/80 sm:text-[13px]">
            <p>
              Selling your truck might seem like an impossible task, or at least, an annoying one, but our extensive
              experience tells us that&apos;s simply not true! At least, it shouldn&apos;t be.
            </p>

            <p>
              Forget dealerships and private sales, those processes are often marred by risk and hassle. We save you time
              and get you the best price in a straightforward and simple process we created by putting ourselves in the
              shoes of our clientele.
            </p>

            <p>
              You only need to ask friends or acquaintances who&apos;ve used these methods how stressful they can be.
              Yet you only need to speak to our customers or read our reviews to see the difference when you sell your
              truck through SellYourRide.
            </p>

            <p>
              We&apos;ve been around since 2009, buying everything from cars, to caravans, to trucks and beyond. We&apos;re
              the procurement arm of Australian Automotive Sales, a trusted and reputable brand known for great prices,
              quality vehicles and excellent customer service.
            </p>

            <p>
              We have become innovators in our industry by listening to our customers and providing a fast and no-nonsense
              service. We want to buy vehicles, and you want to sell your truck, it&apos;s a win-win scenario for both
              parties.
            </p>

            <p>
              It doesn&apos;t matter if you&apos;re just considering your options or looking to sell your truck tomorrow,
              whatever the case may be, get in touch today and we&apos;ll be able to help you out.
            </p>
          </div>

          <div className="mt-10">
            <Button
              onClick={onContact}
              className={cn(
                "h-12 min-w-[240px] rounded-full px-10 text-sm font-extrabold",
                "bg-[#22B9C5] text-white shadow-[0_12px_22px_rgba(0,0,0,0.14)]",
                "hover:bg-[#1FAEBA] active:translate-y-[1px]",
                "ring-2 ring-[#0B3A7A]/10",
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