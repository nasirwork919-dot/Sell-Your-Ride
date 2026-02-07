import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { images } from "@/lib/images";
import { ArrowLeft, ArrowRight, BadgeCheck, PhoneCall, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const SECTIONS = [
  {
    title: "Clarity in one minute",
    icon: BadgeCheck,
    image: images.interior,
    imageAlt: "Quick mobile form entry for clear car details",
    bullets: [
      "A simple form that captures the essentials dealers ask for.",
      "No back-and-forth messages to collect missing details.",
      "Designed for mobile—fast to complete, easy to understand.",
    ],
  },
  {
    title: "Human follow-up, fast",
    icon: PhoneCall,
    image: images.handshake,
    imageAlt: "A real conversation and follow-up call",
    bullets: [
      "We review your submission and reach out within 2 hours.",
      "You get a clear call with next steps and dealer interest.",
      "No public negotiations or inbox spam.",
    ],
  },
  {
    title: "Private & secure by design",
    icon: ShieldCheck,
    image: images.security,
    imageAlt: "Secure and private handling of your information",
    bullets: [
      "Your contact details are never posted publicly.",
      "Server-side validation, honeypot bot protection, and rate limiting.",
      "Built to keep your data minimal and purpose-driven.",
    ],
  },
] as const;

export default function Experience() {
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
                A smooth selling experience
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
        <Card className="rounded-2xl border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm leading-relaxed text-slate-700">
            This isn’t a marketplace. It’s a fast, private intake that helps us do the dealer outreach for you—then we
            call you back with next steps.
          </p>

          <Separator className="my-6 bg-slate-200" />

          <div className="grid gap-6 md:grid-cols-3">
            {SECTIONS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="min-w-0">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="mt-4 flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-900">
                      <Icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-base font-semibold tracking-tight text-slate-900">{s.title}</h2>
                      <ul className="mt-2 grid gap-2 text-sm text-slate-700">
                        {s.bullets.map((b) => (
                          <li key={b} className="leading-relaxed">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-relaxed text-slate-600">
              Want to get started? Submit your car details once and we’ll handle the follow-up.
            </p>

            <Link to="/#sell" className="inline-flex">
              <Button className="h-11 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">Submit car details</Button>
            </Link>
          </div>
        </Card>
      </main>
    </div>
  );
}