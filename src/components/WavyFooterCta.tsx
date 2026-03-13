import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Facebook, Instagram } from "lucide-react";

function TopWave() {
  return (
    <div className="relative w-full" aria-hidden="true">
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="block h-[84px] w-full sm:h-[96px]">
        <path
          d="M0,40 C180,10 360,90 540,50 C720,10 900,90 1080,50 C1260,10 1350,40 1440,26 L1440,0 L0,0 Z"
          fill="#FFFFFF"
        />
        <path
          d="M0,40 C180,10 360,90 540,50 C720,10 900,90 1080,50 C1260,10 1350,40 1440,26"
          fill="none"
          stroke="rgba(11,58,122,0.16)"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>

      {/* Curved text strip */}
      <div className="pointer-events-none absolute left-0 right-0 top-3 sm:top-4">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="select-none text-center text-[15px] font-extrabold tracking-tight text-[#22B9C5] sm:text-[18px]">
            Australia-wide → Receive quote → Host inspection → Get paid instantly → We pick up your vehicle
          </p>
        </div>
      </div>
    </div>
  );
}

type Col = {
  title: string;
  items: Array<{ label: string; href: string }>;
};

function FooterCol({ col }: { col: Col }) {
  return (
    <div>
      <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/80">{col.title}</p>
      <ul className="mt-4 grid gap-2">
        {col.items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              className="text-[12px] font-semibold text-white/90 transition hover:text-white"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WavyFooterCta({
  className,
  onEnquire,
}: {
  className?: string;
  onEnquire: () => void;
}) {
  const cols: Col[] = [
    {
      title: "Sell",
      items: [
        { label: "Car", href: "#sell" },
        { label: "Truck", href: "#truck" },
        { label: "Caravan", href: "#caravan" },
        { label: "Motorbike", href: "#sell" },
      ],
    },
    {
      title: "Sell Your Ride",
      items: [
        { label: "Home", href: "/" },
        { label: "FAQs", href: "#faq" },
        { label: "Contact Us", href: "#sell" },
        { label: "Blog", href: "#about" },
      ],
    },
    {
      title: "Locations",
      items: [
        { label: "Melbourne", href: "#video" },
        { label: "Sydney", href: "#video" },
        { label: "Perth", href: "#video" },
        { label: "Brisbane", href: "#video" },
        { label: "Adelaide", href: "#video" },
        { label: "Canberra", href: "#video" },
        { label: "Tasmania", href: "#video" },
      ],
    },
    {
      title: "Other",
      items: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms & Conditions", href: "#terms" },
      ],
    },
  ];

  return (
    <footer className={cn("w-full", className)} aria-label="Footer">
      <TopWave />

      <div className="bg-[#163F75]">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 md:px-6 md:pt-12">
          {/* CTA */}
          <div className="text-center">
            <p className="text-[22px] font-extrabold tracking-tight text-[#66E3B1] sm:text-[26px]">
              Ready to sell your car?
            </p>
            <p className="mt-2 text-[12px] font-semibold text-white/95 sm:text-[13px]">
              Contact us today to get your instant offer
            </p>

            <p className="mt-6 text-[12px] font-semibold text-white/95">and many more!</p>

            <div className="mt-4 flex justify-center">
              <Button
                onClick={onEnquire}
                className="h-11 rounded-full bg-white px-10 text-[12px] font-extrabold text-[#0B3A7A] hover:bg-white/95"
              >
                Enquire Now
              </Button>
            </div>
          </div>

          {/* Link grid */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-10 sm:grid-cols-5 sm:gap-8">
            <FooterCol col={cols[0]} />
            <FooterCol col={cols[1]} />
            <FooterCol col={cols[2]} />
            <FooterCol col={cols[3]} />

            {/* Social */}
            <div className="sm:col-span-1">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/80">Social</p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/15"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/15"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Licenses / small lines */}
          <div className="mt-12 text-center">
            <p className="text-[10px] font-extrabold tracking-[0.18em] text-[#66E3B1]">
              VIC LMCT: 13029 &nbsp;&nbsp; NSW: MD099272 &nbsp;&nbsp; WA: MD28980 &nbsp;&nbsp; SA: MVD312051
              &nbsp;&nbsp; QLD: 4874443 &nbsp;&nbsp; TAS: 6267
            </p>

            <div className="mt-4">
              <a href="#privacy" className="text-[11px] font-semibold text-white/95 hover:text-white">
                Privacy Policy
              </a>
              <span className="mx-2 text-white/40">|</span>
              <a href="#terms" className="text-[11px] font-semibold text-white/95 hover:text-white">
                Terms & Conditions
              </a>
            </div>

            <p className="mt-5 text-[11px] font-semibold text-white/70">
              TWG Sell Your Ride Pty Ltd (ABN 11 686 678 633). Copyright 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}