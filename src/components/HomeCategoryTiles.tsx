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
        button: "bg-[#F47A1F] text-white hover:bg-[#E36E1C]",
      };
    case "mint":
      return {
        button: "bg-[#66E3B1] text-[#0B3A7A] hover:bg-[#57D7A6]",
      };
    case "navy":
      return {
        button: "bg-[#0B3A7A] text-white hover:bg-[#082F64]",
      };
  }
}

export function HomeCategoryTiles({ className, onNavigate }: { className?: string; onNavigate: (id: string) => void }) {
  const tiles: Tile[] = [
    {
      title: "Sell your car",
      question: "Thinking about selling your car?",
      accent: "orange",
      imageUrl:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
      onClick: () => onNavigate("sell"),
    },
    {
      title: "Sell your truck",
      question: "Thinking about selling your truck?",
      accent: "mint",
      imageUrl:
        "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800",
      onClick: () => onNavigate("sell"),
    },
    {
      title: "Sell your caravan",
      question: "Thinking about selling your caravan?",
      accent: "navy",
      imageUrl:
        "https://images.pexels.com/photos/12987932/pexels-photo-12987932.jpeg?auto=compress&cs=tinysrgb&w=800",
      onClick: () => onNavigate("sell"),
    },
  ];

  return (
    <section className={cn("relative", className)} aria-label="Categories">
      <div className="relative overflow-hidden rounded-3xl bg-white px-5 py-10 shadow-sm ring-1 ring-slate-200 sm:px-8 md:px-10">
        <h2 className="text-balance text-center font-extrabold tracking-tight text-[#0B3A7A] text-4xl sm:text-5xl">
          Australia&apos;s Leading
          <br />
          Car Buying Service
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-10">
          {tiles.map((t) => (
            <div key={t.title} className="text-center">
              <Card className="overflow-hidden rounded-3xl border-slate-200 bg-white shadow-sm">
                <img
                  src={t.imageUrl}
                  alt=""
                  className="h-[160px] w-full object-cover sm:h-[190px]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </Card>

              <p className="mt-5 text-lg font-extrabold tracking-tight text-[#0B3A7A]">{t.title}</p>
              <p className="mt-2 text-sm font-medium text-slate-600">{t.question}</p>
              <Button
                onClick={t.onClick}
                className={cn(
                  "mt-5 h-11 rounded-full px-10 text-sm font-extrabold shadow-sm",
                  accentStyles(t.accent).button,
                )}
              >
                Get a quote
              </Button>
            </div>
          ))}
        </div>

        {/* simple wave footer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24">
          <div className="absolute -right-10 bottom-[-60px] h-[180px] w-[520px] rounded-[999px] bg-[#66E3B1]/70" />
          <div className="absolute -right-24 bottom-[-80px] h-[220px] w-[620px] rounded-[999px] bg-[#66E3B1]/40" />
          <div className="absolute -right-40 bottom-[-110px] h-[260px] w-[760px] rounded-[999px] bg-[#66E3B1]/25" />
        </div>
      </div>
    </section>
  );
}
