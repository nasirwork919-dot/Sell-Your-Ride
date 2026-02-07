import { useEffect, useMemo, useRef, useState } from "react";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

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
    // Optional: set VITE_ADMIN_WHATSAPP_LINK to override
    const fromEnv = (import.meta as any).env?.VITE_ADMIN_WHATSAPP_LINK as string | undefined;
    return fromEnv ?? "https://wa.me/";
  }, []);

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
    <div className="min-h-screen bg-[radial-gradient(1200px_700px_at_70%_-10%,rgba(99,102,241,.22),transparent_60%),radial-gradient(900px_600px_at_10%_20%,rgba(16,185,129,.16),transparent_55%),radial-gradient(900px_700px_at_80%_90%,rgba(244,63,94,.10),transparent_50%)]">
      <Header active={active} onNav={(id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })} waLink={adminWhatsAppLink} />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-20 md:px-6 md:pt-24">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              Dealer-connected lead intake — no marketplace, no payments
            </div>

            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Sell Your Car Fast — Submit Details, We Connect You with Dealers
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-600">
              Share your car details once. Our backend automation delivers your lead to our admin via WhatsApp, and we connect you with relevant dealer partners.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                className="h-11 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700"
                onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
              >
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href={adminWhatsAppLink} target="_blank" rel="noreferrer" className="inline-flex">
                <Button variant="secondary" className="h-11 rounded-2xl">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp us
                </Button>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <MiniPill icon={<ShieldCheck className="h-4 w-4" />} title="Private" subtitle="No public listings" />
              <MiniPill icon={<Check className="h-4 w-4" />} title="Fast" subtitle="< 1 min to submit" />
            </div>
          </div>

          <div id="sell" ref={formRef} className="scroll-mt-24">
            <LeadForm />
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-14 scroll-mt-24">
          <SectionTitle kicker="How it works" title="Three steps. Clean and simple." />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <StepCard n="01" title="Submit your car" desc="Tell us the essentials: model, year, price, and mileage." />
            <StepCard n="02" title="Backend automation" desc="Server validates, stores, and formats a dealer-ready summary." />
            <StepCard n="03" title="WhatsApp delivery" desc="A structured message is delivered to our admin for quick follow-up." />
          </div>
        </section>

        {/* Flow strip */}
        <section className="mt-12">
          <Card className="rounded-3xl border-white/20 bg-white/60 p-5 backdrop-blur md:p-7">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-900">Architecture flow</p>
                <p className="mt-1 text-sm text-slate-600">Website Form → Backend Automation → WhatsApp Message to Admin</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                <span className="rounded-full bg-indigo-600 px-3 py-1 text-white">Form</span>
                <span className="text-slate-400">→</span>
                <span className="rounded-full bg-emerald-600 px-3 py-1 text-white">API + Validation</span>
                <span className="text-slate-400">→</span>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-white">WhatsApp</span>
              </div>
            </div>
          </Card>
        </section>

        {/* Trust */}
        <section className="mt-12">
          <SectionTitle kicker="Trust" title="Built for privacy & security" />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <TrustCard title="Server-side validation" desc="Input is validated on the server before saving or messaging." />
            <TrustCard title="Rate limiting + honeypot" desc="Basic bot protection and throttling help keep submissions clean." />
            <TrustCard title="No public access" desc="There’s no lead listing or admin dashboard exposed publicly." />
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="mt-14 scroll-mt-24">
          <SectionTitle kicker="Reviews" title="Trusted by busy sellers" />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { name: "Omar", text: "Submitted in 40 seconds. Got a call the same day." },
              { name: "Sara", text: "No confusion, no marketplace spam. Super straightforward." },
              { name: "Imran", text: "Loved the WhatsApp follow-up — quick and clear." },
              { name: "Nadia", text: "Felt secure. No public listing of my number." },
              { name: "Hassan", text: "Dealer offers came faster than I expected." },
              { name: "Leila", text: "Clean design, easy on mobile." },
            ].map((t) => (
              <Card key={t.name} className="rounded-3xl border-white/20 bg-white/60 p-5 backdrop-blur">
                <p className="text-sm leading-relaxed text-slate-700">“{t.text}”</p>
                <Separator className="my-4 bg-slate-200/60" />
                <p className="text-sm font-medium text-slate-900">{t.name}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-14 scroll-mt-24">
          <Card className="rounded-3xl border-white/20 bg-white/60 p-6 backdrop-blur md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">Ready to sell?</h3>
                <p className="mt-1 text-sm text-slate-600">Submit your car details and we’ll connect you with dealers.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  className="h-11 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700"
                  onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
                >
                  Submit details
                </Button>
                <a href={adminWhatsAppLink} target="_blank" rel="noreferrer" className="inline-flex">
                  <Button variant="secondary" className="h-11 rounded-2xl">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </section>

        <footer className="mt-12 rounded-3xl border border-white/15 bg-white/40 p-6 text-sm text-slate-600 backdrop-blur">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-slate-900">CarLead</p>
              <p className="mt-1">Lead collection + dealer connection platform.</p>
            </div>
            <div>
              <p className="font-medium text-slate-900">Contact</p>
              <p className="mt-1">Email: hello@example.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
            <div>
              <p className="font-medium text-slate-900">Address</p>
              <p className="mt-1">123 Placeholder Street, City, Country</p>
            </div>
          </div>
          <Separator className="my-5 bg-slate-200/60" />
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
    <div className="fixed left-0 right-0 top-0 z-50 border-b border-white/15 bg-white/55 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <button onClick={() => onNav("sell")} className="group inline-flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-indigo-600 text-white shadow-sm">CL</span>
          <span className="text-sm font-semibold tracking-tight text-slate-900">CarLead</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => onNav(n.id)}
              className={cn(
                "rounded-2xl px-3 py-2 text-sm font-medium transition",
                active === n.id ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-white/70"
              )}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex">
          <Button className="h-10 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700">
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
        </a>
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

function StepCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <Card className="rounded-3xl border-white/20 bg-white/60 p-5 backdrop-blur">
      <div className="flex items-start justify-between">
        <span className="rounded-2xl bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">{n}</span>
        <span className="text-xs font-medium text-slate-500">~1 minute</span>
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </Card>
  );
}

function TrustCard({ title, desc }: { title: string; desc: string }) {
  return (
    <Card className="rounded-3xl border-white/20 bg-white/60 p-5 backdrop-blur">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
    </Card>
  );
}

function MiniPill({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-3xl border border-white/20 bg-white/50 px-4 py-3 backdrop-blur">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="text-xs text-slate-600">{subtitle}</p>
      </div>
    </div>
  );
}
