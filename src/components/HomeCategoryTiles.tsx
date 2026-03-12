import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
        pill: "bg-[#F47A1F] text-white",
        button: "bg-[#F47A1F] text-white hover:bg-[#E36E1C]",
        halo: "bg-[#F47A1F]/10",
      };
    case "mint":
      return {
        pill: "bg-[#66E3B1] text-[#0B3A7A]",
        button: "bg-[#66E3B1] text-[#0B3A7A] hover:bg-[#57D7A6]",
        halo: "bg-[#66E3B1]/18",
      };
    case "navy":
      return {
        pill: "bg-[#0B3A7A] text-white",
        button: "bg-[#0B3A7A] text-white hover:bg-[#082F64]",
        halo: "bg-[#0B3A7A]/10",
      };
  }
}

export function HomeCategoryTiles({ className, onNavigate }: { className?: string; onNavigate: (id: string) => void }) {
  const tiles: Tile[] = [
    {
      title: "Sell your car",
      question: "Thinking about selling your car?",
      accent: "orange",
      imageUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1400",
      onClick: () => onNavigate("sell"),
    },
    {
      title: "Sell your truck",
      question: "Thinking about selling your truck?",
      accent: "mint",
      imageUrl: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1400",
      onClick: () => onNavigate("sell"),
    },
    {
      title: "Sell your caravan",
      question: "Thinking about selling your caravan?",
      accent: "navy",
      imageUrl: "https://images.pexels.com/photos/12987932/pexels-photo-12987932.jpeg?auto=compress&cs=tinysrgb&w=1400",
      onClick: () => onNavigate("sell"),
    },
  ];

  return (
    <section className={cn("w-full", className)} aria-label="Categories">
      {/* Full-width band like the screenshot */}
      <div className="w-full bg-white py-12 ring-1 ring-slate-200 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          {/* Centered wordmark */}
          <div className="text-center">
            <p className="text-[34px] font-extrabold tracking-tight text-[#0B3A7A] sm:text-[44px]">
              SellYourRide
              <span className="ml-1 align-top text-[10px] font-extrabold text-[#0B3A7A]/70 sm:text-[11px]">
                .com.au
              </span>
            </p>

            <h2 className="mt-4 text-balance text-center text-4xl font-extrabold tracking-tight text-[#0B3A7A] sm:text-5xl">
              Australia&apos;s Leading
              <br />
              Car Buying Service
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-10">
            {tiles.map((t) => {
              const styles = accentStyles(t.accent);
              return (
                <div key={t.title} className="text-center">
                  <Card className="relative overflow-hidden rounded-3xl border-slate-200 bg-white shadow-sm">
                    {/* soft corner halo */}
                    <div className={cn("pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full", styles.halo)} />
                    <img
                      src={t.imageUrl}
                      alt={t.title}
                      className="h-[170px] w-full object-cover sm:h-[200px]"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </Card>

                  {/* Title + question */}
                  <p className="mt-6 text-xl font-extrabold tracking-tight text-[#0B3A7A]">{t.title}</p>
                  <p className="mt-2 text-sm font-medium text-slate-600">{t.question}</p>

                  {/* CTA */}
                  <Button
                    onClick={t.onClick}
                    className={cn("mt-6 h-11 rounded-full px-10 text-sm font-extrabold shadow-sm", styles.button)}
                  >
                    Get a quote
                  </Button>

                  {/* Small accent pill line (subtle, like screenshot vibe) */}
                  <div className="mt-4 flex justify-center">
                    <span className={cn("inline-flex rounded-full px-4 py-1 text-[11px] font-extrabold tracking-wide", styles.pill)}>
                      Fast • Private • Clear
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* bottom soft shapes (keep it clean and full-width) */}
          <div className="relative mt-12 h-16 overflow-hidden rounded-3xl bg-slate-50 ring-1 ring-slate-200">
            <div className="absolute -right-16 bottom-[-60px] h-[180px] w-[520px] rounded-[999px] bg-[#66E3B1]/60" />
            <div className="absolute -right-28 bottom-[-86px] h-[220px] w-[620px] rounded-[999px] bg-[#66E3B1]/35" />
            <div className="absolute -right-44 bottom-[-120px] h-[260px] w-[760px] rounded-[999px] bg-[#66E3B1]/22" />
          </div>
        </div>
      </div>
    </section>
  );
}