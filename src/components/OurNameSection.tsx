import { cn } from "@/lib/utils";

export function OurNameSection({ className }: { className?: string }) {
  return (
    <section className={cn("w-full bg-white", className)} aria-label="Our name">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Wordmark */}
          <div className="select-none text-[40px] font-extrabold leading-none tracking-tight sm:text-[46px]">
            <span className="text-[#0B3A7A]">Car</span>
            <span className="text-[#22B9C5]">Buyers</span>
            <span className="ml-1 align-top text-[10px] font-extrabold text-[#0B3A7A]/55 sm:text-[11px]">
              .com.au
            </span>
          </div>

          {/* Headline */}
          <h2 className="mt-6 max-w-3xl text-balance text-[26px] font-extrabold leading-[1.12] tracking-tight text-[#0B3A7A] sm:text-[34px]">
            I want to sell my car,
            <br />
            wherever I am in Australia
          </h2>

          {/* Body */}
          <p className="mt-6 max-w-[72ch] text-[11px] font-medium leading-[1.9] text-[#0B3A7A]/80 sm:text-[12px]">
            Whether you live in a busy metro location or out in the country, our buyers will visit you in any state or
            territory. With the largest mobile network in Australia, we have capability to visit you and make your car
            selling experience super easy. Not sure if we&apos;ll come to your area? Just try us! We&apos;re keen to
            bring great prices to all Australians so give us a call to arrange a time and location.
          </p>
        </div>
      </div>
    </section>
  );
}