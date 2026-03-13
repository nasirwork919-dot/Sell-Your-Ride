import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import carImg from "@/assets/transparent-blue-car.webp";
import truckImg from "@/assets/psd_box_truck_template.webp";
import caravanImg from "@/assets/transparent-caravan.webp";

type Accent = "mint" | "orange" | "navy";

type Tile = {
  id: string;
  titleLines: [string, string];
  subtitle: string;
  accent: Accent;
  imageUrl: string;
  imageAlt: string;
};

function accentToButton(accent: Accent) {
  switch (accent) {
    case "mint":
      return "bg-[#66E3B1] text-[#0B3A7A] hover:bg-[#57D7A6] ring-1 ring-[#2AB77D]/45";
    case "orange":
      return "bg-[#F47A1F] text-white hover:bg-[#E36E1C] ring-1 ring-[#D96512]/60";
    case "navy":
      return "bg-[#153D78] text-white hover:bg-[#113564] ring-1 ring-[#0B2D5B]/60";
  }
}

export function WantedSellTilesSection({
  className,
  onQuote,
}: {
  className?: string;
  onQuote: () => void;
}) {
  const tiles: Tile[] = [
    {
      id: "car",
      titleLines: ["Wanting to sell", "your car?"],
      subtitle: "We buy all sorts of vehicles across Australia.",
      accent: "mint",
      imageUrl: carImg,
      imageAlt: "Blue car",
    },
    {
      id: "truck",
      titleLines: ["Wanting to sell", "your truck?"],
      subtitle: "We provide the same smooth service for trucks as we do with caravans.",
      accent: "orange",
      imageUrl: truckImg,
      imageAlt: "White truck",
    },
    {
      id: "caravan",
      titleLines: ["Wanting to sell", "your caravan?"],
      subtitle: "We provide the same smooth service for caravans as we do with trucks.",
      accent: "navy",
      imageUrl: caravanImg,
      imageAlt: "Caravan",
    },
  ];

  return (
    <section className={cn("w-full bg-white", className)} aria-label="Wanting to sell tiles">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12 md:px-6">
        <div className="space-y-10 sm:space-y-12">
          {tiles.map((t, idx) => {
            const reversed = idx % 2 === 1;

            return (
              <div key={t.id}>
                <div
                  className={cn(
                    "grid items-center gap-8",
                    "md:grid-cols-2 md:gap-10",
                    reversed ? "md:[&_.copy]:order-2 md:[&_.media]:order-1" : "",
                  )}
                >
                  {/* Copy (equal-width column) */}
                  <div className={cn("copy flex flex-col items-start")}>
                    <h3 className="text-balance text-[34px] font-extrabold leading-[1.03] tracking-tight text-[#0B3A7A] sm:text-[42px]">
                      <span className="block">{t.titleLines[0]}</span>
                      <span className="block">{t.titleLines[1]}</span>
                    </h3>

                    <p className="mt-3 max-w-[46ch] text-[12px] font-medium leading-relaxed text-slate-600 sm:text-[13px]">
                      {t.subtitle}
                    </p>

                    <Button
                      onClick={onQuote}
                      className={cn(
                        "mt-5 h-9 rounded-full px-7 text-[11px] font-extrabold",
                        "shadow-[inset_0_-2px_0_rgba(0,0,0,0.12)]",
                        "active:translate-y-[1px]",
                        accentToButton(t.accent),
                      )}
                    >
                      Get a quote
                    </Button>
                  </div>

                  {/* Media (equal-width column) */}
                  <div className={cn("media flex items-center justify-center")}>
                    <div className="w-full max-w-[560px]">
                      <div className="flex items-center justify-center">
                        <img
                          src={t.imageUrl}
                          alt={t.imageAlt}
                          className={cn(
                            "h-auto w-full object-contain",
                            // Keep images visually consistent across tiles and screen sizes
                            "max-h-[220px] sm:max-h-[260px] md:max-h-[280px] lg:max-h-[320px]",
                          )}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider (thin line with generous spacing) */}
                {idx !== tiles.length - 1 ? (
                  <div className="mt-10 sm:mt-12">
                    <div className="h-px w-full bg-slate-200/70" />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}