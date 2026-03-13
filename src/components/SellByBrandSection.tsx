import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Brand = {
  name: string;
  logoUrl: string;
};

const BRANDS: Brand[] = [
  {
    name: "Holden",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Holden_logo.svg/512px-Holden_logo.svg.png",
  },
  {
    name: "Ford",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/512px-Ford_logo_flat.svg.png",
  },
  {
    name: "BMW",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/512px-BMW.svg.png",
  },
  {
    name: "Volkswagen",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/512px-Volkswagen_logo_2019.svg.png",
  },
  {
    name: "Audi",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi_logo_detail.svg/512px-Audi_logo_detail.svg.png",
  },
  {
    name: "Hyundai",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Hyundai_logo.svg/512px-Hyundai_logo.svg.png",
  },
  {
    name: "Mercedes-Benz",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/512px-Mercedes-Logo.svg.png",
  },
  {
    name: "Toyota",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/512px-Toyota_carlogo.svg.png",
  },
];

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
                    <div className="grid h-[54px] w-[84px] place-items-center sm:h-[60px] sm:w-[92px]">
                      <img
                        src={b.logoUrl}
                        alt={`${b.name} logo`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                        referrerPolicy="no-referrer"
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
    </section>
  );
}