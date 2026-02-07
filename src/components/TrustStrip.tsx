import { Card } from "@/components/ui/card";
import { LockKeyhole, ShieldCheck, UserRoundCheck } from "lucide-react";

export function TrustStrip() {
  return (
    <Card className="rounded-xl border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Item
          icon={<LockKeyhole className="h-5 w-5" />}
          title="No public data"
          desc="Your details are never posted publicly. This is a private intake." 
        />
        <Item
          icon={<ShieldCheck className="h-5 w-5" />}
          title="Secure handling"
          desc="Validated submissions + bot protection + rate limiting on the server."
        />
        <Item
          icon={<UserRoundCheck className="h-5 w-5" />}
          title="Real team"
          desc="After you submit, it’s on us — a human follows up within 2 hours."
        />
      </div>
    </Card>
  );
}

function Item({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-900">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-700">{desc}</p>
      </div>
    </div>
  );
}
