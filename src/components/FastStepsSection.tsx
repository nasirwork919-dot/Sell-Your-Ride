import { cn } from "@/lib/utils";
import personImg from "@/assets/fastest-sell-person.webp";
import { Button } from "@/components/ui/button";

type Step = {
  n: string;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  {
    n: "1",
    title: "Get a quick offer",
    desc: "Fill out the form with your details and we'll provide an estimate price.",
  },
  {
    n: "2",
    title: "Host an inspection",
    desc: "Our expert buyer will visit your location, assess the vehicle in just 15 minutes,\nallowing you to continue your day with minimal disruption.",
  },
  {
    n: "3",
    title: "Get paid instantly",
    desc: "After inspecting the vehicle, we'll make you an offer. If you're satisfied, we'll\ntransfer payment to your chosen bank account.",
  },
  {
    n: "4",
    title: "We pick up your vehicle",
    desc: "Once the funds clear in your account, we'll coordinate another pickup at your\npreferred time and location.",
  },
];

export function FastStepsSection({
  className,
  onEnquire,
}: {
  className?: string;
  onEnquire: () => void;
}) {
  return (
    <section className={cn("w-full bg-[#1E4C86]", className)} aria-label="Fast steps">
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:px-6">
          {/* Heading */}
          <h2 className="text-center text-[34px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[44px]">
            The easiest, fastest, and safest way
            <br />
            to sell your vehicle!
          </h2>

          <div className="mt-10 grid items-end gap-10 md:grid-cols-12 md:gap-8">
            {/* Left: steps */}
            <div className="md:col-span-7">
              <div className="grid gap-8">
                {STEPS.map((s) => (
                  <div key={s.n} className="grid grid-cols-[52px_1fr] gap-4 sm:grid-cols-[60px_1fr]">
                    <div className="flex justify-center">
                      <span className="text-[44px] font-extrabold leading-none text-white/18 sm:text-[56px]">
                        {s.n}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <p className="text-[18px] font-extrabold tracking-tight text-white sm:text-[20px]">
                        {s.title}
                      </p>
                      <p className="mt-1 whitespace-pre-line text-[12px] font-medium leading-relaxed text-white/80 sm:text-[13px]">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="pt-2">
                  <Button
                    onClick={onEnquire}
                    className="h-11 rounded-full bg-[#29C6C8] px-10 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(0,0,0,0.22)] hover:bg-[#25B9BB]"
                  >
                    Enquire Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Right: person */}
            <div className="relative md:col-span-5">
              <div className="relative mx-auto w-[260px] sm:w-[320px] md:w-[380px]">
                <img
                  src={personImg}
                  alt="Person using phone"
                  className="h-auto w-full object-contain"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Embedded white wave (part of this blue section) */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
            className="block h-[128px] w-full sm:h-[160px] md:h-[190px]"
          >
            {/*
              Shape goals:
              - lower on the left (keeps clear below the CTA button)
              - rises up on the right (tucks under the person image)
              - smooth, premium, no harsh dip
            */}
            <path
              d="M0,130
                 C220,185 520,210 760,190
                 C980,172 1180,120 1440,86
                 L1440,220 L0,220 Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>

        {/* Space so content doesn't overlap the wave */}
        <div className="h-[128px] sm:h-[160px] md:h-[190px]" />
      </div>
    </section>
  );
}