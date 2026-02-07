import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-12">
      <Card className="rounded-2xl border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">Australia</p>
            <div className="mt-2 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-sm font-extrabold tracking-tight text-white shadow-sm">
                SYR
              </span>
              <div className="min-w-0">
                <p className="text-base font-semibold tracking-tight text-slate-900">Sell Your Ride</p>
                <p className="text-sm text-slate-700">Private lead intake, dealer connected</p>
              </div>
            </div>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-700">
              Submit your car details once. We coordinate dealer interest and call you back with next steps.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge className="rounded-lg bg-emerald-600 px-2.5 py-1 text-white hover:bg-emerald-600">
              Callback within 2 hours
            </Badge>
            <Badge className="rounded-lg bg-slate-900 px-2.5 py-1 text-white hover:bg-slate-900">
              No public listing
            </Badge>
            <Badge className="rounded-lg bg-indigo-50 px-2.5 py-1 text-indigo-900 ring-1 ring-indigo-200 hover:bg-indigo-50">
              Mobile first
            </Badge>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white">
                <ShieldCheck className="h-5 w-5 text-emerald-700" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900">Privacy first</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  We never publish your phone number. Your details are shared only with our team and dealer partners to
                  progress your sale.
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                    <span className="text-slate-500">ABN</span>
                    <span className="text-slate-900">00 000 000 000</span>
                    <span className="text-slate-500">(placeholder)</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                    Australian support team
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <a href="#sell" className="inline-flex">
                <Button className="h-11 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700">Submit car details</Button>
              </a>
              <a href="https://wa.me/6147093000" target="_blank" rel="noreferrer" className="inline-flex">
                <Button
                  variant="secondary"
                  className="h-11 rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                >
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-slate-200" />

        <div className="grid gap-6 md:grid-cols-12">
          <FooterBlock
            className="md:col-span-4"
            icon={<MapPin className="h-4 w-4 text-indigo-600" />}
            title="Service area"
            lines={["Australia wide", "Metro and regional coverage"]}
          />
          <FooterBlock
            className="md:col-span-4"
            icon={<Clock className="h-4 w-4 text-indigo-600" />}
            title="Hours"
            lines={["Mon to Sat: 9:00am to 6:00pm", "Sun: limited availability"]}
          />
          <FooterBlock
            className="md:col-span-4"
            icon={<Phone className="h-4 w-4 text-indigo-600" />}
            title="Contact"
            lines={["+61 4 7093 000", "hello@sell-your-ride.com.au"]}
            trailingIcon={<Mail className="h-4 w-4 text-slate-900" />}
          />
        </div>

        <Separator className="my-6 bg-slate-200" />

        <div className="flex flex-col gap-3 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sell Your Ride. All rights reserved.</p>
          <p className="font-semibold">Made for Australian sellers. Fast, private, clear.</p>
        </div>
      </Card>
    </footer>
  );
}

function FooterBlock({
  icon,
  title,
  lines,
  className,
  trailingIcon,
}: {
  icon: React.ReactNode;
  title: string;
  lines: ReadonlyArray<string>;
  className?: string;
  trailingIcon?: React.ReactNode;
}) {
  return (
    <div className={className}>
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-slate-900">{title}</p>
            {trailingIcon ? (
              <span className="grid h-6 w-6 place-items-center rounded-lg border border-slate-200 bg-white">
                {trailingIcon}
              </span>
            ) : null}
          </div>
          <div className="mt-1 grid gap-1">
            {lines.map((l) => (
              <p key={l} className="text-sm leading-relaxed text-slate-700">
                {l}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}