import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import carImg from "@/assets/transparent-blue-car.webp";
import truckImg from "@/assets/psd_box_truck_template.webp";
import caravanImg from "@/assets/transparent-caravan.webp";

type Tile = {
  title: string;
  question: string;
  accent: "orange" | "mint" | "navy";
  imageUrl: string;
  onClick: () => void;
};

function accentStyles(accent: Tile["accent"]) {
  switch (accent) {
    case "orange":
      return {
        button:
          "bg-[#F47A1F] text-white hover:bg-[#E36E1C] shadow-[inset_0_-2px_0_rgba(0,0,0,0.18)] ring-1 ring-[#D96512]",
      };
    case "mint":
      return {
        button:
          "bg-[#66E3B1] text-[#0B3A7A] hover:bg-[#57D7A6] shadow-[inset_0_-2px_0_rgba(0,0,0,0.12)] ring-1 ring-[#2AB77D]/40",
      };
    case "navy":
      return {
        button:
          "bg-[#0B3A7A] text-white hover:bg-[#082F64] shadow-[inset_0_-2px_0_rgba(0,0,0,0.22)] ring-1 ring-[#062B57]/60",
      };
  }
}

export function HomeCategoryTiles({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate: (id: string) => void;
}) {
  const tiles: Tile[] = [
    {
      title: "Sell your car",
      question: "Thinking about selling your car?",
      accent: "orange",
      imageUrl: carImg,
      onClick: () => onNavigate("sell"),
    },
    {
      title: "Sell your truck",
      question: "Thinking about selling your truck?",
      accent: "mint",
      imageUrl: truckImg,
      onClick: () => onNavigate("sell"),
    },
    {
      title: "Sell your caravan",
      question: "Thinking about selling your caravan?",
      accent: "navy",
      imageUrl: caravanImg,
      onClick: () => onNavigate("sell"),
    },
  ];

  return (
    <section className={cn("w-full bg-white", className)} aria-label="Categories">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {tiles.map((t) => {
            const styles = accentStyles(t.accent);
            return (
              <div key={t.title} className="flex flex-col items-center text-center">
                {/* Image (no border radius) */}
                <div className="h-[150px] w-full max-w-[320px] sm:h-[170px] md:h-[160px] md:max-w-none">
                  <img
                    src={t.imageUrl}
                    alt={t.title}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Text */}
                <p className="mt-6 text-[22px] font-extrabold tracking-tight text-[#0B3A7A] sm:text-2xl">
                  {t.title}
                </p>
                <p className="mt-2 text-sm font-medium text-[#0B3A7A]">{t.question}</p>

                {/* CTA (pill) */}
                <Button
                  onClick={t.onClick}
                  className={cn(
                    "mt-6 h-12 w-[220px] rounded-full px-10 text-sm font-extrabold",
                    "transition-colors",
                    styles.button,
                  )}
                >
                  Get a quote
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}