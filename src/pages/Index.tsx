import { useEffect, useMemo, useRef, useState } from "react";
import { LeadForm } from "@/components/LeadForm";
import { HeroImageCard } from "@/components/HeroImageCard";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustStrip } from "@/components/TrustStrip";
import { SmoothExperienceStrip } from "@/components/SmoothExperienceStrip";
import { MobileNav } from "@/components/MobileNav";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { BackToTopButton } from "@/components/BackToTopButton";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Clock3,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { ReviewsMarquee } from "@/components/ReviewsMarquee";
import { SiteFooter } from "@/components/SiteFooter";

const NAV = [
  { id: "sell", label: "Sell Your Car" },
  { id: "how", label: "How It Works" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
] as const;

export default function Index() {
  const formRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<string>("sell");
  const [navHidden, setNavHidden] = useState(false);
  const { direction, y } = useScrollDirection({ thresholdPx: 6 });

  const adminWhatsAppLink = useMemo(() => {
    const fromEnv = (import.meta as any).env?.VITE_ADMIN_WHATSAPP_LINK as string | undefined;
    return fromEnv ?? "https://wa.me/6147093000";
  }, []);

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    if (window.location.hash !== `#${id}`) {
      window.history.replaceState(null, "", `#${id}`);
    }

    const headerOffsetPx = 84;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffsetPx;
    const clampedTop = Math.max(0, top);

    window.scrollTo({ top: clampedTop, behavior: "auto" });

    requestAnimationFrame(() => {
      window.scrollTo({ top: clampedTop, behavior: "smooth" });
    });
  }

  function navTo(id: string) {
    window.setTimeout(() => {
      scrollToSection(id);

      window.setTimeout(() => {
        window.scrollBy({ top: 1, left: 0, behavior: "auto" });
        window.scrollBy({ top: -1, left: 0, behavior: "auto" });
      }, 50);
    }, 60);
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

  useEffect(() => {
    const id = window.location.hash.replace("#", "").trim();
    if (!id) return;
    window.setTimeout(() => scrollToSection(id), 80);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (y < 24) {
      setNavHidden(false);
      return;
    }
    if (direction === "down") setNavHidden(true);
    if (direction === "up") setNavHidden(false);
  }, [direction, y]);

  const showTop = y > 520;

  const reviews = useMemo(
    () => [
      {
        name: "Omar",
        text: "Submitted in 40 seconds. Got a call the same day and the next steps were crystal clear.",
        avatarUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
      {
        name: "Sara",
        text: "No confusion, no marketplace spam. It felt private and surprisingly smooth on mobile.",
        avatarUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
      {
        name: "Imran",
        text: "Loved the WhatsApp follow-up. One form and then a real person called me, simple.",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
      {
        name: "Nadia",
        text: "Felt secure. No public listing of my number and the process was explained clearly.",
        avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
      {
        name: "Hassan",
        text: "Dealer interest came faster than I expected. The call helped set the right price expectations.",
        avatarUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
      {
        name: "Leila",
        text: "Clean design and quick to submit. I appreciated not having to deal with random messages.",
        avatarUrl: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <Header active={active} onNav={navTo} waLink={adminWhatsAppLink} hidden={navHidden} />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-20 md:px-6 md:pt-24">
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
              <HeroPromise
                icon={<Timer className="h-4 w-4" />}
                title="Call back within 2 hours"
                desc="Once you submit, it’s on us."
              />
              <HeroPromise
                icon={<ShieldCheck className="h-4 w-4" />}
                title="Private by design"
                desc="Your number isn’t posted online."
              />
              <HeroPromise
                icon={<Check className="h-4 w-4" />}
                title="One clean form"
                desc="Everything dealers need, in a structured format."
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                className="h-11 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                onClick={() => scrollToSection("sell")}
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

        <section id="how" className="mt-14 scroll-mt-24">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <SectionTitle kicker="How it works" title="You submit, we call within 2 hours." />
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700">
                Clear, old school service powered by smart automation. You don’t chase dealers. We bring the process to
                you with one structured submission and a real callback.
              </p>
            </div>

            <Card className="rounded-2xl border-slate-200 bg-white p-4 shadow-sm md:p-5">
              <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                <MiniHighlight
                  icon={<Clock3 className="h-4 w-4 text-indigo-700" />}
                  title="Fast"
                  desc="2 hour callback goal"
                />
                <MiniHighlight
                  icon={<ShieldCheck className="h-4 w-4 text-emerald-700" />}
                  title="Private"
                  desc="No public listing"
                />
                <MiniHighlight
                  icon={<PhoneCall className="h-4 w-4 text-slate-900" />}
                  title="Human"
                  desc="Real phone call"
                />
              </div>
            </Card>
          </div>

          <div className="mt-6">
            <HowItWorks />
          </div>
          <div className="mt-6">
            <TrustStrip />
          </div>
        </section>

        <section className="mt-12">
          <SectionTitle kicker="What you get" title="A smooth selling experience" />
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700">
            Designed for busy sellers: one structured submission, private handling, and a real follow up call, without
            public listings or marketplace noise.
          </p>
          <div className="mt-6">
            <SmoothExperienceStrip />
          </div>
        </section>

        <section id="reviews" className="mt-14 scroll-mt-24">
          <SectionTitle kicker="Reviews" title="Trusted by busy sellers" />
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700">
            Quick submissions, private handling, and a real call. Here’s what sellers say after using the intake.
          </p>

          <div className="mt-6">
            <ReviewsMarquee items={reviews} />
          </div>
        </section>

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
                  onClick={() => scrollToSection("sell")}
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

        <SiteFooter />
      </main>

      <FloatingWhatsAppButton href={adminWhatsAppLink} />
      <BackToTopButton show={showTop} />
    </div>
  );
}

function Header({
  active,
  onNav,
  waLink,
  hidden,
}: {
  active: string;
  onNav: (id: string) => void;
  waLink: string;
  hidden: boolean;
}) {
  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white transition-transform duration-200",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <button onClick={() => onNav("sell")} className="group inline-flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-600 text-white shadow-sm">SYR</span>
          <span className="text-sm font-semibold tracking-tight text-slate-900">Sell Your Ride</span>
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

function MiniHighlight({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">{desc}</p>
      </div>
    </div>
  );
}