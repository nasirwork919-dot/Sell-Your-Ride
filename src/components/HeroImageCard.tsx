import { Card } from "@/components/ui/card";

export function HeroImageCard() {
  return (
    <Card className="rounded-xl border-slate-200 bg-white p-3 shadow-sm">
      <div className="relative overflow-hidden rounded-lg border border-slate-200">
        <img
          src="/placeholder.svg"
          alt="A car in a clean showroom setting"
          className="h-[220px] w-full object-cover sm:h-[260px]"
          loading="eager"
        />
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold text-slate-900">Fast intake</p>
          <p className="mt-1 text-xs text-slate-600">Submit in under a minute</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold text-slate-900">Dealer-ready</p>
          <p className="mt-1 text-xs text-slate-600">Structured WhatsApp format</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold text-slate-900">Private</p>
          <p className="mt-1 text-xs text-slate-600">No public listings</p>
        </div>
      </div>
    </Card>
  );
}
