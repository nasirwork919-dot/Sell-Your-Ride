import { cn } from "@/lib/utils";
import phoneLadyImg from "@/assets/laday-on-the-phone.webp";

export function WhatsGreatAboutSection({ className }: { className?: string }) {
  return (
    <section className={cn("w-full bg-white", className)} aria-label="What's great about CarBuyers">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
          {/* Copy */}
          <div className="md:col-span-7">
            <div className="mx-auto max-w-[680px] md:mx-0">
              <h2 className="text-balance text-[28px] font-extrabold leading-[1.08] tracking-tight text-[#0B3A7A] sm:text-[34px]">
                What&apos;s great about
                <br />
                CarBuyers?
              </h2>

              <div className="mt-5 space-y-4 text-[12px] font-medium leading-relaxed text-[#08304B] sm:text-[13px]">
                <p>
                  CarBuyers has been providing amazing prices on vehicles since 2009. We bought our first car over a
                  decade ago and have since expanded to become Australia&apos;s go-to car buying service.
                </p>

                <p>
                  We are leaders for our quick and efficient service, ensuring our customers get the most out of our
                  service. We proudly offer on-site inspection, highly competitive rates, same-day transactions,
                  transfers and fast mobile pick-ups.
                </p>

                <p>
                  We are the official buying arm of Australian Automotive Sales, and work hard to continue providing our
                  customers with amazing service.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="md:col-span-5">
            <div className="mx-auto max-w-[420px] md:mx-0 md:ml-auto">
              <div className="overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
                <img
                  src={phoneLadyImg}
                  alt="Woman on the phone with a laptop"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}