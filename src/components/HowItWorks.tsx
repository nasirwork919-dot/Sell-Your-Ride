import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardPenLine, Handshake, Wallet } from "lucide-react";

export function HowItWorks() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Step
        n="01"
        title="Quick form"
        desc="Tell us your car basics in under a minute. No listings, no back-and-forth."
        icon={<ClipboardPenLine className="h-5 w-5 text-indigo-600" />}
      />
      <Step
        n="02"
        title="Dealer match"
        desc="We match your details to relevant buyers and handle the outreach for you."
        icon={<Handshake className="h-5 w-5 text-indigo-600" />}
      />
      <Step
        n="03"
        title="Get paid"
        desc="Accept the best option and get paid fast—simple, clear, and private."
        icon={<Wallet className="h-5 w-5 text-indigo-600" />}
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
    <Card className="group rounded-md border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md md:p-6">
      <div className="flex items-start justify-between gap-3">
        <Badge className="rounded-md bg-indigo-600 px-2.5 py-1 text-white hover:bg-indigo-600">{n}</Badge>
        <div className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 bg-slate-50 text-slate-900 transition-colors group-hover:bg-white">
          {icon}
        </div>
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{desc}</p>
    </Card>
  );
}