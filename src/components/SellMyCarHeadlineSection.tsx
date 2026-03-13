import { cn } from "@/lib/utils";

import carImg from "@/assets/transparent-blue-car.webp";

export function SellMyCarHeadlineSection({ className }: { className?: string }) {
  return (
    <section className={cn("w-full bg-[#F3F6FA]", className)} aria-label="Sell my car headline">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Wordmark */}
          <div className="select-none text-[40px] font-extrabold leading-none tracking-tight sm:text-[46px]">
            <span className="text-[#0B3A7A]">Sell</span>
            <span className="text-[#22B9C5]">Your</span>
            <span className="text-[#0B3A7A]">Ride</span>
            <span className="ml-1 align-top text-[10px] font-extrabold text-[#0B3A7A]/70 sm:text-[11px]">
              .com.au
            </span>
          </div>

          {/* Headline */}
          <h2 className="mt-6 text-balance text-[30px] font-extrabold leading-[1.12] tracking-tight text-[#0B3A7A] sm:text-[38px] md:text-[44px]">
            The Easiest, Fastest And Safest Way
            <br />
            To Sell Your Car
          </h2>

          {/* Image */}
          <div className="mt-10 w-full">
            <div className="mx-auto max-w-4xl">
              <img
                src={carImg}
                alt="Blue car"
                className="mx-auto h-auto w-full max-w-[860px] object-contain drop-shadow-[0_22px_40px_rgba(15,23,42,0.16)]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}