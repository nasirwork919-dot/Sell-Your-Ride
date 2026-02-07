import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-12">
      <Card className="rounded-2xl border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-sm font-extrabold tracking-tight text-white shadow-sm">
                SYR
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold tracking-tight text-slate-900">Sell Your Ride</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
                  Australia • Private lead intake
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-700">
              A fast, private way to sell your car without marketplace noise. Submit once — we coordinate dealer interest
              and call you back with next steps.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge className="rounded-lg bg-emerald-600 px-2.5 py-1 text-white hover:bg-emerald-600">
                Callback within 2 hours
              </Badge>
              <Badge className="rounded-lg bg-slate-900 px-2.5 py-1 text-white hover:bg-slate-900">No public listing</Badge>
              <Badge className="rounded-lg bg-indigo-50 px-2.5 py-1 text-indigo-900 ring-1 ring-indigo-200 hover:bg-indigo-50">
                Built for mobile
              </Badge>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              <FooterBlock
                icon={<MapPin className="h-4 w-4 text-indigo-600" />}
                title="Service area"
                lines={["Australia-wide", "Metro + regional coverage"]}
              />
              <FooterBlock
                icon={<Clock className="h-4 w-4 text-indigo-600" />}
                title="Hours"
                lines={["Mon–Sat: 9:00am – 6:00pm", "Sun: Limited availability"]}
              />
              <FooterBlock
                icon={<Phone className="h-4 w-4 text-indigo-600" />}
                title="Phone"
                lines={["+61 4 7093 000", "We’ll call after you submit"]}
              />
              <FooterBlock
                icon={<Mail className="h-4 w-4 text-indigo-600" />}
                title="Email"
                lines={["hello@sell-your-ride.com.au", "Replies within 1 business day"]}
              />
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white">
                  <ShieldCheck className="h-5 w-5 text-emerald-700" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900">Privacy-first</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">
                    We collect only what’s needed to contact you and understand your car — and we never post your details
                    publicly.
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    ABN: 00 000 000 000 (placeholder)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-slate-200" />

        <div className="flex flex-col gap-3 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sell Your Ride. All rights reserved.</p>
          <p className="font-semibold">Made for Australian sellers • Fast • Private • Clear</p>
        </div>
      </Card>
    </footer>
  );
}

function FooterBlock({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: ReadonlyArray<string>;
}) {
  return (
    <div className="flex gap-3">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <div className="mt-1 grid gap-1">
          {lines.map((l) => (
            <p key={l} className="text-sm leading-relaxed text-slate-700">
              {l}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}