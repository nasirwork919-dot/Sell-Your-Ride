import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardPenLine, Headset, PhoneCall } from "lucide-react";

export function HowItWorks() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Step
        n="01"
        title="You submit the form"
        desc="Tell us your car’s essentials in one clean step — no listings, no negotiations online."
        icon={<ClipboardPenLine className="h-5 w-5" />}
      />
      <Step
        n="02"
        title="We do the dealer outreach"
        desc="Our team reviews your details and matches your car with relevant dealers from our network."
        icon={<Headset className="h-5 w-5" />}
      />
      <Step
        n="03"
        title="We call you within 2 hours"
        desc="You get a clear call with next steps and dealer interest — simple, fast, and private."
        icon={<PhoneCall className="h-5 w-5" />}
      />
    </div>
  );
}

function Step({
  n,
  title,
  desc,
  icon,
}: {
  n: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="rounded-xl border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <Badge className="rounded-md bg-indigo-600 px-2.5 py-1 text-white hover:bg-indigo-600">{n}</Badge>
        <div className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-900">
          {icon}
        </div>
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{desc}</p>
    </Card>
  );
}
