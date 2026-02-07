import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { images } from "@/lib/images";
import { ArrowLeft, ArrowRight, BadgeCheck, Check, ClipboardList, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const BULLETS = [
  "Capture the essentials dealers actually ask for—no fluff, no repeated messages.",
  "Designed mobile-first: big inputs, clear labels, and zero clutter.",
  "Reduces mistakes with instant validation (so we can move fast after you submit).",
  "Structured details help us match you faster with the right dealers in our network.",
] as const;

export default function Clarity() {
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
                Clarity in one minute
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
            <div className="inline-flex items-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-950">
              <BadgeCheck className="h-4 w-4 text-indigo-600" />
              One clean submission. Faster matching.
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Dealers move faster when details are complete.
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-[15px]">
              Most sales stall because the same questions get asked again and again. Our intake is intentionally short,
              but it captures the exact information that helps us qualify your car and contact the right dealers—fast.
            </p>

            <Separator className="my-6 bg-slate-200" />

            <div className="grid gap-3">
              {BULLETS.map((b) => (
                <div key={b} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-900">
                    <Check className="h-4 w-4 text-emerald-600" />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700">{b}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                Built for speed—without cutting corners.
              </div>
              <Link to="/#sell" className="inline-flex">
                <Button className="h-11 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">Submit car details</Button>
              </Link>
            </div>
          </Card>

          <div className="md:col-span-5">
            <Card className="rounded-2xl border-slate-200 bg-white p-3 shadow-sm">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <img
                  src={images.interior}
                  alt="Quick mobile form entry for clear car details"
                  className="h-56 w-full object-cover md:h-[360px]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                <MiniStat icon={<ClipboardList className="h-4 w-4" />} title="No repeated questions" desc="We collect it once—properly." />
                <MiniStat icon={<BadgeCheck className="h-4 w-4" />} title="Dealer-ready format" desc="Structured details dealers expect." />
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function MiniStat({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
      <div className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-900">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-0.5 text-sm text-slate-700">{desc}</p>
      </div>
    </div>
  );
}