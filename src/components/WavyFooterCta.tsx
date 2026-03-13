import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Facebook, Instagram } from "lucide-react";

function TopWave() {
  const waveD = `
    M 0 130
    C 140 72, 260 72, 360 130
    C 460 188, 620 188, 720 130
    C 820 72, 980 72, 1080 130
    C 1180 188, 1340 188, 1440 130
  `.trim();

  const label = "Australia-wide → Receive quote → Host inspection → Get paid instantly → We pick up your vehicle";

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="block h-[120px] w-full sm:h-[140px]"
        aria-hidden="true"
      >
        <defs>
          <path id="wavePath" d={waveD} />
        </defs>

        <rect x="0" y="0" width="1440" height="220" fill="#FFFFFF" />

        <path
          d={`
            ${waveD}
            L 1440 220
            L 0 220
            Z
          `}
          fill="#163F75"
        />

        <path d={waveD} fill="none" stroke="rgba(11,58,122,0.22)" strokeWidth="6" strokeLinecap="round" />

        <text
          fill="#22B9C5"
          fontSize="24"
          fontWeight="900"
          letterSpacing="0.6"
          textAnchor="middle"
          dominantBaseline="middle"
          opacity="0.99"
        >
          <textPath
            href="#wavePath"
            startOffset="50%"
            method="align"
            spacing="auto"
            textLength={1180}
            lengthAdjust="spacingAndGlyphs"
          >
            <tspan dy={-10} style={{ paintOrder: "stroke", stroke: "rgba(255,255,255,0.55)", strokeWidth: 2 }}>
              {label}
            </tspan>
          </textPath>
        </text>
      </svg>
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
            <a href={it.href} className="text-[12px] font-semibold text-white/90 transition hover:text-white">
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WavyFooterCta({ className, onEnquire }: { className?: string; onEnquire: () => void }) {
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
      {/* Seamless join: pull the navy footer up behind the wave slightly */}
      <div className="relative">
        <div className="translate-y-[1px]">
          <TopWave />
        </div>

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
      </div>
    </footer>
  );
}