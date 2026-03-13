import { cn } from "@/lib/utils";
import truckImg from "@/assets/psd_box_truck_template-2.webp";

export function SellMyTruckHeadlineSection({ className }: { className?: string }) {
  return (
    <section className={cn("w-full bg-[#F3F6FA]", className)} aria-label="Sell my truck headline">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Wordmark */}
          <div className="select-none text-[40px] font-extrabold leading-none tracking-tight sm:text-[46px]">
            <span className="text-[#0B3A7A]">Car</span>
            <span className="text-[#22B9C5]">Buyers</span>
            <span className="ml-1 align-top text-[10px] font-extrabold text-[#0B3A7A]/70 sm:text-[11px]">
              .com.au
            </span>
          </div>

          {/* Headline */}
          <h2 className="mt-6 text-balance text-[22px] font-extrabold leading-[1.15] tracking-tight text-[#0B3A7A] sm:text-[26px] md:text-[30px]">
            We are Australia&apos;s Go-To Truck Buyer
            <br />
            for a Good Reason
          </h2>

          {/* Image */}
          <div className="mt-10 w-full">
            <div className="mx-auto max-w-4xl">
              <img
                src={truckImg}
                alt="Box truck"
                className="mx-auto h-auto w-full max-w-[860px] object-contain drop-shadow-[0_22px_40px_rgba(15,23,42,0.14)]"
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