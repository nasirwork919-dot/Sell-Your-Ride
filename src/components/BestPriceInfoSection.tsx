import { cn } from "@/lib/utils";
import heroImg from "@/assets/two-girls-in-a-back-of-a-car.webp";

export function BestPriceInfoSection({ className }: { className?: string }) {
  return (
    <section className={cn("w-full bg-white", className)} aria-label="Best price information">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
          {/* Image */}
          <div className="md:col-span-5">
            <div className="mx-auto max-w-[420px] md:mx-0">
              <div className="overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
                <img
                  src={heroImg}
                  alt="Two girls sitting in the back of a car"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="md:col-span-7">
            <div className="mx-auto max-w-[680px] md:mx-0">
              <h2 className="text-balance text-[28px] font-extrabold leading-[1.12] tracking-tight text-[#0B3A7A] sm:text-[34px]">
                Looking to sell your vehicle
                <br />
                for the best price?
              </h2>

              <div className="mt-5 space-y-4 text-[12px] font-medium leading-relaxed text-slate-600 sm:text-[13px]">
                <p>
                  Regardless of where you are at with selling your car — <span className="font-extrabold">SellYourRide</span>{" "}
                  is the way to go. If you&apos;re new to selling or considering your options, be sure that our service
                  is more efficient than private selling or dodgy dealerships.
                </p>

                <p>
                  Private selling is a lengthy, frustrating process, with buyers who try and rip you off at any
                  opportunity. Dealerships aren&apos;t much better, if not far worse. Dealerships are renowned for their
                  dodgy buying practices and are simply not worth the bother.
                </p>

                <p>
                  <span className="font-extrabold">SellYourRide</span> is a trusted company that cares about you receiving
                  a fair price. We work hard to guarantee a positive, stress-free selling experience, with an aim
                  towards making the process run as efficiently as possible. This is why car owners across Australia have
                  been choosing us for over 10 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}