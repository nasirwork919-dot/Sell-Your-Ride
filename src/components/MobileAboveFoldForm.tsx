import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShieldCheck, PhoneCall, Zap } from "lucide-react";

export function MobileAboveFoldForm({ onWhatsApp }: { onWhatsApp: () => void }) {
  return (
    <section className="md:hidden">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">Australia</p>
        <h1 className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-slate-900">
          Sell your car privately — we bring dealer interest to you.
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          Not a marketplace. No public listing. Submit once and our team calls you within{" "}
          <span className="font-semibold text-slate-900">2 hours</span> with next steps.
        </p>

        <div className="mt-4 grid gap-2">
          <MiniPill icon={<Zap className="h-4 w-4 text-indigo-700" />} text="~60 seconds to submit" />
          <MiniPill icon={<PhoneCall className="h-4 w-4 text-indigo-700" />} text="Real human callback" />
          <MiniPill icon={<ShieldCheck className="h-4 w-4 text-emerald-700" />} text="Private & secure handling" />
        </div>

        <div className="mt-4">
          <Button
            variant="secondary"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
            onClick={onWhatsApp}
          >
            Prefer WhatsApp? Message us first
          </Button>
        </div>
      </div>

      <div className="mt-4" id="sell">
        <LeadForm />
      </div>

      <Card className="mt-4 rounded-2xl border-slate-200 bg-slate-50 p-4 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">What happens next</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          We review your details, contact you to confirm, then coordinate dealer outreach privately.
        </p>
      </Card>
    </section>
  );
}

function MiniPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-white ring-1 ring-slate-200">{icon}</span>
      <p className="text-sm font-semibold tracking-tight text-slate-900">{text}</p>
    </div>
  );
}