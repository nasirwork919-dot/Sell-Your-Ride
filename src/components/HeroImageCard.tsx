import { Card } from "@/components/ui/card";
import { images } from "@/lib/images";

export function HeroImageCard() {
  return (
    <Card className="rounded-xl border-slate-200 bg-white p-3 shadow-sm">
      <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
        <img
          src={images.hero}
          alt="A premium car in a clean setting"
          className="h-[220px] w-full object-cover sm:h-[260px]"
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold text-slate-900">Fast intake</p>
          <p className="mt-1 text-xs text-slate-600">Submit in under a minute</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold text-slate-900">Dealer outreach</p>
          <p className="mt-1 text-xs text-slate-600">We handle follow-ups</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold text-slate-900">Callback in 2 hours</p>
          <p className="mt-1 text-xs text-slate-600">Clear next steps</p>
        </div>
      </div>
    </Card>
  );
}
