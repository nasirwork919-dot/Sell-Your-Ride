import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck, PhoneCall, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "@/lib/images";

const ITEMS = [
  {
    title: "Clarity in one minute",
    desc: "A structured form that captures the exact details dealers ask for—so you don’t repeat yourself.",
    icon: BadgeCheck,
    image: images.interior,
    imageAlt: "Quick mobile form entry for clear car details",
    href: "/experience/clarity",
  },
  {
    title: "Human follow-up, fast",
    desc: "We review your details and call you within 2 hours with next steps and dealer interest.",
    icon: PhoneCall,
    image: images.handshake,
    imageAlt: "A real conversation and follow-up call",
    href: "/experience/follow-up",
  },
  {
    title: "Private & secure by design",
    desc: "No public listing, server-side validation, bot protection, and rate limiting from the start.",
    icon: ShieldCheck,
    image: images.security,
    imageAlt: "Secure and private handling of your information",
    href: "/experience/security",
  },
] as const;

export function SmoothExperienceStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {ITEMS.map((it) => {
        const Icon = it.icon;
        return (
          <Card key={it.title} className="group rounded-2xl border-slate-200 bg-white p-3 shadow-sm">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <img
                src={it.image}
                alt={it.imageAlt}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="mt-3 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
                  <Icon className="h-4 w-4 text-indigo-600" />
                  Experience
                </div>

                <p className="mt-2 text-base font-semibold tracking-tight text-slate-900">{it.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">{it.desc}</p>
              </div>

              <Button
                asChild
                size="icon"
                className="mt-0.5 h-10 w-10 shrink-0 rounded-full bg-indigo-600 text-white shadow-sm hover:bg-indigo-700"
                aria-label="Open experience details"
                title="Open details"
              >
                <Link to={it.href}>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}