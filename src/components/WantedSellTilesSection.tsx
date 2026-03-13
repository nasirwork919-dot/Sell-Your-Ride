import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import carImg from "@/assets/transparent-blue-car.webp";
import truckImg from "@/assets/psd_box_truck_template.webp";
import caravanImg from "@/assets/transparent-caravan.webp";

type Accent = "mint" | "orange" | "navy";

type Tile = {
  id: string;
  title: string;
  subtitle: string;
  accent: Accent;
  imageUrl: string;
};

function accentToButton(accent: Accent) {
  switch (accent) {
    case "mint":
      return "bg-[#66E3B1] text-[#0B3A7A] hover:bg-[#57D7A6] ring-1 ring-[#2AB77D]/35";
    case "orange":
      return "bg-[#F47A1F] text-white hover:bg-[#E36E1C] ring-1 ring-[#D96512]/60";
    case "navy":
      return "bg-[#0B3A7A] text-white hover:bg-[#082F64] ring-1 ring-[#062B57]/60";
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
      title: "Wanting to sell\nyour car?",
      subtitle: "We buy all sorts of vehicles across Australia.",
      accent: "mint",
      imageUrl: carImg,
    },
    {
      id: "truck",
      title: "Wanting to sell\nyour truck?",
      subtitle: "We provide the same smooth service for trucks as we do with caravans.",
      accent: "orange",
      imageUrl: truckImg,
    },
    {
      id: "caravan",
      title: "Wanting to sell\nyour caravan?",
      subtitle: "We provide the same smooth service for caravans as we do with trucks.",
      accent: "navy",
      imageUrl: caravanImg,
    },
  ];

  return (
    <section className={cn("w-full bg-white", className)} aria-label="Vehicle quote tiles">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12 md:px-6">
        <div className="space-y-10 sm:space-y-12">
          {tiles.map((t, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <div key={t.id}>
                <div
                  className={cn(
                    "grid items-center gap-8",
                    "sm:grid-cols-12 sm:gap-10",
                    reversed ? "sm:[&_.copy]:order-2 sm:[&_.media]:order-1" : "",
                  )}
                >
                  {/* Copy */}
                  <div className={cn("copy sm:col-span-5", reversed ? "sm:col-start-7" : "")}
                  >
                    <h3 className="text-balance text-[32px] font-extrabold leading-[1.06] tracking-tight text-[#0B3A7A] sm:text-[40px]">
                      {t.title.split("\\n").map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>
                    <p className="mt-3 max-w-[46ch] text-[12px] font-semibold leading-relaxed text-slate-600 sm:text-[13px]">
                      {t.subtitle}
                    </p>

                    <Button
                      onClick={onQuote}
                      className={cn(
                        "mt-5 h-11 rounded-full px-8 text-sm font-extrabold",
                        "shadow-[inset_0_-2px_0_rgba(0,0,0,0.14)] transition-colors",
                        accentToButton(t.accent),
                      )}
                    >
                      Get a quote
                    </Button>
                  </div>

                  {/* Media */}
                  <div className={cn("media sm:col-span-7", reversed ? "sm:col-start-1" : "")}
                  >
                    <div className="mx-auto w-full max-w-[520px]">
                      <img
                        src={t.imageUrl}
                        alt={t.title.replace("\\n", " ")}
                        className="h-auto w-full object-contain"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                {idx !== tiles.length - 1 && <div className="mt-10 h-px w-full bg-slate-200/70" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
