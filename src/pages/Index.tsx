import { useEffect, useMemo, useRef, useState } from "react";
import { LeadForm } from "@/components/LeadForm";
import { HeroImageCard } from "@/components/HeroImageCard";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustStrip } from "@/components/TrustStrip";
import { ImageStrip } from "@/components/ImageStrip";
import { MobileNav } from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowRight, BadgeCheck, Check, MessageCircle, ShieldCheck, Timer } from "lucide-react";

const NAV = [
  { id: "sell", label: "Sell Your Car" },
  { id: "how", label: "How It Works" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
] as const;

export default function Index() {
  const formRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<string>("sell");

  const adminWhatsAppLink = useMemo(() => {
    const fromEnv = (import.meta as any).env?.VITE_ADMIN_WHATSAPP_LINK as string | undefined;
    return fromEnv ?? "https://wa.me/";
  }, []);

  function navTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.12, 0.2, 0.3] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header active={active} onNav={navTo} waLink={adminWhatsAppLink} />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-20 md:px-6 md:pt-24">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
              <BadgeCheck className="h-4 w-4 text-indigo-600" />
              Premium lead intake. Private and dealer-connected.
            </div>

            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Sell Your Car Fast. Submit Once. We Handle the Rest.
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-700">
              This is not a marketplace. No public listing. No payments. You submit your details, and our team does the
              dealer outreach. Then we call you back with next steps.
            </p>

            <div className="mt-5 grid gap-2">
              <HeroPromise icon={<Timer className="h-4 w-4" />} title="Call back within 2 hours" desc="Once you submit, it’s on us." />
              <HeroPromise icon={<ShieldCheck className="h-4 w-4" />} title="Private by design" desc="Your number isn’t posted online." />
              <HeroPromise icon={<Check className="h-4 w-4" />} title="One clean form" desc="Everything dealers need, in a structured format." />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                className="h-11 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
              >
                Submit car details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href={adminWhatsAppLink} target="_blank" rel="noreferrer" className="inline-flex">
                <Button
                  variant="secondary"
                  className="h-11 rounded-lg border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
            </div>

            <div className="mt-6">
              <HeroImageCard />
            </div>
          </div>

          <div id="sell" ref={formRef} className="scroll-mt-24">
            <LeadForm />
          </div>
        </section>

        {/* How it works (customer-centric) */}
        <section id="how" className="mt-14 scroll-mt-24">
          <SectionTitle kicker="How it works" title="You submit. We call you within 2 hours." />
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700">
            Clear, old-school service powered by smart automation. You don’t chase dealers. We bring the process to you.
          </p>
          <div className="mt-6">
            <HowItWorks />
          </div>
          <div className="mt-6">
            <TrustStrip />
          </div>
        </section>

        {/* Visual strip */}
        <section className="mt-12">
          <SectionTitle kicker="What you get" title="A smooth selling experience" />
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700">
            A simple form, a real follow-up call, and dealer interest without the noise.
          </p>
          <div className="mt-6">
            <ImageStrip />
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="mt-14 scroll-mt-24">
          <SectionTitle kicker="Reviews" title="Trusted by busy sellers" />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { name: "Omar", text: "Submitted in 40 seconds. Got a call the same day." },
              { name: "Sara", text: "No confusion, no marketplace spam. Super straightforward." },
              { name: "Imran", text: "Loved the WhatsApp follow-up. Quick and clear." },
              { name: "Nadia", text: "Felt secure. No public listing of my number." },
              { name: "Hassan", text: "Dealer offers came faster than I expected." },
              { name: "Leila", text: "Clean design, easy on mobile." },
            ].map((t) => (
              <Card key={t.name} className="rounded-xl border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm leading-relaxed text-slate-700">“{t.text}”</p>
                <Separator className="my-4 bg-slate-200" />
                <p className="text-sm font-semibold text-slate-900">{t.name}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-14 scroll-mt-24">
          <Card className="rounded-xl border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">Ready to sell?</h3>
                <p className="mt-1 text-sm text-slate-700">Submit your car details and we’ll call you within 2 hours.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  className="h-11 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                  onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
                >
                  Submit details
                </Button>
                <a href={adminWhatsAppLink} target="_blank" rel="noreferrer" className="inline-flex">
                  <Button
                    variant="secondary"
                    className="h-11 rounded-lg border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </section>

        <footer className="mt-12 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-slate-900">CarLead</p>
              <p className="mt-1">Private lead intake + dealer connection.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Contact</p>
              <p className="mt-1">Email: hello@example.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Address</p>
              <p className="mt-1">123 Placeholder Street, City, Country</p>
            </div>
          </div>
          <Separator className="my-5 bg-slate-200" />
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} CarLead. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

function Header({
  active,
  onNav,
  waLink,
}: {
  active: string;
  onNav: (id: string) => void;
  waLink: string;
}) {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <button onClick={() => onNav("sell")} className="group inline-flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-600 text-white shadow-sm">CL</span>
          <span className="text-sm font-semibold tracking-tight text-slate-900">CarLead</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => onNav(n.id)}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-semibold transition",
                active === n.id ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
              )}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={waLink} target="_blank" rel="noreferrer" className="hidden md:inline-flex">
            <Button className="h-10 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </a>
          <MobileNav active={active} items={NAV} onNav={onNav} />
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">{kicker}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
    </div>
  );
}

function HeroPromise({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-900">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-0.5 text-sm text-slate-700">{desc}</p>
      </div>
    </div>
  );
}