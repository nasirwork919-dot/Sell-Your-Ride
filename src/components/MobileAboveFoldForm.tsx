import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LockKeyhole, MessageCircle, PhoneCall, ShieldCheck, Star, Zap } from "lucide-react";

export function MobileAboveFoldForm({
  onWhatsApp,
  onOpenReviews,
}: {
  onWhatsApp: () => void;
  onOpenReviews: () => void;
}) {
  return (
    <section className="md:hidden">
      <div className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        {/* Brand row */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600 text-sm font-extrabold tracking-tight text-white shadow-sm">
              SYR
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-700">Australia</p>
              <p className="text-sm font-semibold tracking-tight text-slate-900">Sell Your Ride</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenReviews}
            className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-900"
            aria-label="Open Google reviews"
            title="Google Reviews"
          >
            <Star className="h-4 w-4" />
            4.9 <span className="text-amber-800/70">(200+)</span>
          </button>
        </div>

        {/* Headline */}
        <h1 className="mt-4 text-pretty text-[28px] font-semibold leading-[1.1] tracking-tight text-slate-900">
          A private way to sell your car —{" "}
          <span className="rounded-xl bg-indigo-50 px-2 py-1 text-indigo-900 ring-1 ring-indigo-100">
            without marketplace spam
          </span>
          .
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          Submit your car details once. We do the dealer outreach and call you back within{" "}
          <span className="font-semibold text-slate-900">2 hours</span> with next steps.
        </p>

        {/* Trust chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          <TrustChip icon={<Zap className="h-4 w-4 text-indigo-700" />} text="~60s form" />
          <TrustChip icon={<PhoneCall className="h-4 w-4 text-indigo-700" />} text="Human callback" />
          <TrustChip icon={<ShieldCheck className="h-4 w-4 text-emerald-700" />} text="No public listing" />
          <TrustChip icon={<LockKeyhole className="h-4 w-4 text-slate-700" />} text="Secure handling" />
        </div>

        {/* Actions */}
        <div className="mt-4 grid grid-cols-1 gap-2">
          <Button
            className="h-12 rounded-2xl bg-indigo-600 text-base text-white shadow-sm hover:bg-indigo-700"
            onClick={() => {
              const el = document.getElementById("sell");
              if (!el) return;
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Start with the form
          </Button>

          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="secondary"
              className="h-11 rounded-2xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
              onClick={onWhatsApp}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>

            <Button
              variant="secondary"
              className="h-11 rounded-2xl border border-amber-200 bg-white text-slate-900 hover:bg-amber-50"
              onClick={onOpenReviews}
            >
              <Star className="mr-2 h-4 w-4 text-amber-700" />
              Reviews
            </Button>
          </div>
        </div>

        {/* Micro reassurance */}
        <div className="mt-4 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-white text-slate-900 shadow-sm ring-1 ring-indigo-100">
              <ShieldCheck className="h-4 w-4 text-indigo-700" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-indigo-950">What we are</p>
              <p className="mt-1 text-sm leading-relaxed text-indigo-950/80">
                A private intake + dealer outreach service. Not a public marketplace, and we never post your phone
                number.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form immediately after (campaign-ready) */}
      <div className="mt-4" id="sell">
        <Card className="rounded-3xl border border-slate-200/70 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Get dealer offers</p>
            <p className="mt-1 text-sm font-semibold tracking-tight text-slate-900">
              Enter your car details below — we’ll call you soon.
            </p>
          </div>

          <div className="mt-3">
            <LeadForm />
          </div>
        </Card>
      </div>

      <Card className="mt-4 rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">What happens next</p>
        <div className="mt-3 grid gap-2">
          <NextRow icon={<PhoneCall className="h-4 w-4 text-indigo-700" />} title="We call you" desc="Confirm details and next steps." />
          <NextRow icon={<ShieldCheck className="h-4 w-4 text-emerald-700" />} title="Private outreach" desc="We coordinate dealer interest." />
          <NextRow icon={<Zap className="h-4 w-4 text-slate-900" />} title="Move fast" desc="Clear options without inbox noise." />
        </div>
      </Card>
    </section>
  );
}

function TrustChip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm">
      <span className="grid h-6 w-6 place-items-center rounded-full bg-slate-50 ring-1 ring-slate-200">{icon}</span>
      <span className="whitespace-nowrap">{text}</span>
    </div>
  );
}

function NextRow({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className={cn("flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3")}>
      <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl bg-white text-slate-900 shadow-sm ring-1 ring-slate-200">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-0.5 text-sm leading-relaxed text-slate-700">{desc}</p>
      </div>
    </div>
  );
}