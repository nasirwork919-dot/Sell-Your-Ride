import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import holdenLogo from "@/assets/brands/holden.svg";
import fordLogo from "@/assets/brands/ford.svg";
import bmwLogo from "@/assets/brands/bmw.svg";
import volkswagenLogo from "@/assets/brands/volkswagen.svg";
import audiLogo from "@/assets/brands/audi.svg";
import hyundaiLogo from "@/assets/brands/hyundai.svg";
import mercedesBenzLogo from "@/assets/brands/mercedes-benz.svg";
import toyotaLogo from "@/assets/brands/toyota.svg";

type Brand = {
  name: string;
  logoUrl: string;
};

const BRANDS: Brand[] = [
  { name: "Holden", logoUrl: holdenLogo },
  { name: "Ford", logoUrl: fordLogo },
  { name: "BMW", logoUrl: bmwLogo },
  { name: "Volkswagen", logoUrl: volkswagenLogo },
  { name: "Audi", logoUrl: audiLogo },
  { name: "Hyundai", logoUrl: hyundaiLogo },
  { name: "Mercedes-Benz", logoUrl: mercedesBenzLogo },
  { name: "Toyota", logoUrl: toyotaLogo },
];

function BottomCurve({ from = "#22B9C5", to = "#FFFFFF" }: { from?: string; to?: string }) {
  return (
    <div className="relative w-full" aria-hidden="true">
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="block h-[88px] w-full sm:h-[104px] md:h-[120px]">
        <rect x="0" y="0" width="1440" height="160" fill={from} />
        <path
          d="M0,36 C220,82 480,108 720,92 C980,74 1210,22 1440,38 L1440,160 L0,160 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}

export function SellByBrandSection({
  className,
  onBrand,
}: {
  className?: string;
  onBrand?: (brand: string) => void;
}) {
  return (
    <section className={cn("w-full bg-[#22B9C5]", className)} aria-label="Sell by brand">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:px-6">
        <h2 className="text-center text-[18px] font-extrabold tracking-tight text-white sm:text-[20px]">
          Sell your car by brand
        </h2>

        <div className="mx-auto mt-8 max-w-4xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
            {BRANDS.map((b) => (
              <button
                key={b.name}
                type="button"
                onClick={() => onBrand?.(b.name)}
                className="text-left"
                aria-label={`Sell ${b.name}`}
                title={b.name}
              >
                <Card
                  className={cn(
                    "group rounded-2xl border-white/65 bg-white p-4 shadow-[0_18px_36px_rgba(15,23,42,0.10)] transition",
                    "hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(15,23,42,0.14)]",
                  )}
                >
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="grid h-[54px] w-[96px] place-items-center sm:h-[60px] sm:w-[108px]">
                      <img
                        src={b.logoUrl}
                        alt={`${b.name} logo`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-3 text-[12px] font-extrabold tracking-tight text-[#0B3A7A]">{b.name}</p>
                  </div>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* End-of-section curve into next (white) section */}
      <div className="-mb-[1px]">
        <BottomCurve from="#22B9C5" to="#FFFFFF" />
      </div>
    </section>
  );
}