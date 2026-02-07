import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { images } from "@/lib/images";
import { ArrowLeft, ArrowRight, Check, Clock, PhoneCall, Users } from "lucide-react";
import { Link } from "react-router-dom";

const POINTS = [
  {
    title: "A real person reviews your details",
    desc: "We quickly check for completeness and context—so the next steps are clear.",
    icon: Users,
  },
  {
    title: "Call within 2 hours",
    desc: "You get a simple conversation: interest, expectations, and what happens next.",
    icon: PhoneCall,
  },
  {
    title: "No public negotiations",
    desc: "No listing. No inbox chaos. We coordinate dealer outreach behind the scenes.",
    icon: Clock,
  },
] as const;

export default function FollowUp() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-flex">
              <Button
                variant="secondary"
                className="h-10 rounded-lg border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">Experience</p>
              <h1 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                Human follow-up, fast
              </h1>
            </div>
          </div>

          <Link to="/#sell" className="hidden sm:inline-flex">
            <Button className="h-10 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
              Submit details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <div className="grid gap-6 md:grid-cols-12 md:items-start">
          <Card className="rounded-2xl border-slate-200 bg-white p-5 shadow-sm md:col-span-7 md:p-7">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              You shouldn’t have to chase dealers.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-[15px]">
              Marketplace selling is noisy: dozens of messages, unclear intent, and endless “Is it available?” chats. We
              keep it simple—submit once, then get a real call. We handle the dealer outreach for you.
            </p>

            <Separator className="my-6 bg-slate-200" />

            <div className="grid gap-3">
              {POINTS.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-900">
                      <Icon className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-900">{p.title}</p>
                      <p className="mt-0.5 text-sm text-slate-700">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <div className="flex items-start gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg border border-emerald-200 bg-white">
                  <Check className="h-4 w-4 text-emerald-700" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-emerald-950">What you’ll get on the call</p>
                  <p className="mt-1 text-sm leading-relaxed text-emerald-900">
                    A quick confirmation of your car details, expected next steps, and how dealer interest will be
                    handled—without pressure.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-semibold text-slate-600">Less friction. More clarity. Real follow-up.</p>
              <Link to="/#sell" className="inline-flex">
                <Button className="h-11 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">Submit car details</Button>
              </Link>
            </div>
          </Card>

          <div className="md:col-span-5">
            <Card className="rounded-2xl border-slate-200 bg-white p-3 shadow-sm">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <img
                  src={images.handshake}
                  alt="A real conversation and follow-up call"
                  className="h-56 w-full object-cover md:h-[360px]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-3 grid gap-3">
                <MiniStat title="Fast response" value="Within 2 hours" />
                <MiniStat title="No spam" value="No public listing" />
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function MiniStat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">{title}</p>
      <p className="mt-1 text-base font-semibold tracking-tight text-slate-900">{value}</p>
    </div>
  );
}