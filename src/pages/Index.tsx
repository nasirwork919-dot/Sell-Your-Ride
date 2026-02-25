import { useEffect, useMemo, useRef, useState } from "react";
import { LeadForm } from "@/components/LeadForm";
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
import { Clock3, MessageCircle, PhoneCall, ShieldCheck, ArrowRight, Zap } from "lucide-react";
import { ReviewsMarquee } from "@/components/ReviewsMarquee";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingGoogleRatingButton } from "@/components/FloatingGoogleRatingButton";
import { MarketingPixels } from "@/components/MarketingPixels";
import { images } from "@/lib/images";
import { Link } from "react-router-dom";

const NAV = [
  { id: "sell", label: "Get an Offer" },
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

  const googleReviewsLink = useMemo(() => {
    const fromEnv = (import.meta as any).env?.VITE_GOOGLE_REVIEWS_LINK as string | undefined;
    return fromEnv ?? "https://www.google.com/search?q=sell+your+ride+reviews";
  }, []);

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    if (window.location.hash !== `#${id}`) {
      window.history.replaceState(null, "", `#${id}`);
    }

    const headerOffsetPx = 88; // slightly larger on mobile due to taller header
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
  const scrolled = y > 10;

  const reviews = useMemo(
    () => [
      {
        name: "Omar",
        text: "Submitted in 40 seconds. Got a call the same day and the next steps were clear.",
        avatarUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
      {
        name: "Sara",
        text: "No confusion, no marketplace spam. It felt private and smooth on mobile.",
        avatarUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
      {
        name: "Imran",
        text: "Loved the WhatsApp follow up. One form and then a real person called me.",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
      {
        name: "Nadia",
        text: "Felt secure. No public listing of my number and the process was explained clearly.",
        avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
      {
        name: "Hassan",
        text: "Dealer interest came faster than I expected. The call helped set price expectations.",
        avatarUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
      {
        name: "Leila",
        text: "Clean design and quick to submit. I appreciated not dealing with random messages.",
        avatarUrl: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <MarketingPixels />

      <Header active={active} onNav={navTo} waLink={adminWhatsAppLink} hidden={navHidden} scrolled={scrolled} />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-[88px] sm:pt-24 md:px-6 md:pt-24">
        {/* Above-the-fold: hero background + two columns */}
        <section
          aria-label="Hero + form"
          className={cn(
            "relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
          )}
        >
          {/* Global background */}
          <div className="absolute inset-0">
            <img
              src={images.hero}
              alt=""
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 35%" }}
              loading="eager"
              referrerPolicy="no-referrer"
            />
            {/* Subtle readability wash (not a gradient) */}
            <div className="absolute inset-0 bg-white/65" />
          </div>

          {/* Decorative hero cutout image (desktop only) */}
          <div className="pointer-events-none absolute left-[39%] top-14 hidden -translate-x-1/2 md:block">
            <img
              src={images.heroMain1}
              alt=""
              className="h-[210px] w-auto select-none object-contain drop-shadow-[0_22px_60px_rgba(15,23,42,0.26)]"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="relative p-5 sm:p-7 md:p-10">
            <div className="grid gap-6 md:grid-cols-12 md:items-stretch md:gap-8">
              {/* LEFT */}
              <div className="md:col-span-7 md:flex md:items-center">
                <div className="w-full">
                  {/* Brand */}
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600 text-sm font-extrabold tracking-tight text-white shadow-sm">
                      SYR
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">Australia</p>
                      <p className="text-sm font-semibold tracking-tight text-slate-900">Sell Your Ride</p>
                    </div>
                  </div>

                  <h1 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-4xl md:mt-5 md:text-5xl">
                    Sell your car privately and get a real callback.
                  </h1>

                  <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-slate-700 sm:text-base md:text-[15px]">
                    One clean submission. We do the dealer outreach and call you with next steps.
                  </p>

                  {/* CTAs */}
                  <div className="mt-5 grid gap-2 sm:flex sm:items-center sm:gap-3 md:mt-6">
                    <Button
                      className="h-11 w-full rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 sm:w-auto sm:rounded-xl"
                      onClick={() => {
                        const el = document.getElementById("sell");
                        if (!el) return;
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                    >
                      Start with the form
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <a href={adminWhatsAppLink} target="_blank" rel="noreferrer" className="inline-flex">
                      <Button
                        variant="secondary"
                        className="h-11 w-full rounded-2xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 sm:w-auto sm:rounded-xl"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Button>
                    </a>

                    <Link to="/experience" className="hidden md:inline-flex md:ml-1">
                      <Button
                        variant="ghost"
                        className="h-11 rounded-2xl text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      >
                        See the experience
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  {/* Cards: 2x2 */}
                  <div className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-8">
                    <HeroMiniCard
                      icon={<Zap className="h-4 w-4 text-indigo-700" />}
                      title="Quick intake"
                      desc="One clean form. No listing."
                    />
                    <HeroMiniCard
                      icon={<ShieldCheck className="h-4 w-4 text-emerald-700" />}
                      title="Dealer outreach"
                      desc="We match and follow up."
                    />
                    <HeroMiniCard
                      icon={<PhoneCall className="h-4 w-4 text-indigo-700" />}
                      title="Real callback"
                      desc="Clear next steps in 2 hours."
                    />
                    <HeroMiniCard
                      icon={<ShieldCheck className="h-4 w-4 text-slate-900" />}
                      title="Private handling"
                      desc="Secure by default."
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="md:col-span-5">
                <div id="sell" ref={formRef} className="scroll-mt-28">
                  <Card className="rounded-3xl border-slate-200 bg-white/90 p-3 shadow-sm backdrop-blur">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                        Get dealer offers
                      </p>
                      <p className="mt-1 text-sm font-semibold tracking-tight text-slate-900">
                        Enter your car details — we’ll call you soon.
                      </p>
                    </div>
                    <div className="mt-3">
                      <LeadForm />
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Keep the rest of the page sections */}
        <section id="how" className="mt-12 scroll-mt-28 sm:mt-14">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-5">
            <div className="min-w-0">
              <SectionTitle kicker="How it works" title="One form. We handle the rest." />
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                Designed for busy Australian sellers: a clean intake, private handling, and a real callback.
              </p>
            </div>

            <Card className="rounded-2xl border-slate-200 bg-white p-4 shadow-sm md:rounded-md md:p-5">
              <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                <MiniHighlight icon={<Clock3 className="h-4 w-4 text-indigo-700" />} title="Fast" desc="Same-day callback" />
                <MiniHighlight
                  icon={<ShieldCheck className="h-4 w-4 text-emerald-700" />}
                  title="Private"
                  desc="No public listing"
                />
                <MiniHighlight icon={<PhoneCall className="h-4 w-4 text-slate-900" />} title="Human" desc="Real conversation" />
              </div>
            </Card>
          </div>

          <div className="mt-5 sm:mt-6">
            <HowItWorks />
          </div>
          <div className="mt-5 sm:mt-6">
            <TrustStrip />
          </div>
        </section>

        <section className="mt-10 sm:mt-12">
          <SectionTitle kicker="What you get" title="A smooth selling experience" />
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-[15px]">
            One structured submission, private handling, and a fast follow-up—without marketplace noise.
          </p>
          <div className="mt-5 sm:mt-6">
            <SmoothExperienceStrip />
          </div>
        </section>

        <section id="reviews" className="mt-12 scroll-mt-28 sm:mt-14">
          <SectionTitle kicker="Reviews" title="Trusted by busy sellers" />
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-[15px]">
            Quick submissions, private handling, and a real call. Here is what sellers say after using the intake.
          </p>

          <div className="mt-5 sm:mt-6">
            <ReviewsMarquee items={reviews} />
          </div>
        </section>

        <section id="contact" className="mt-12 scroll-mt-28 sm:mt-14">
          <Card className="rounded-2xl border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:rounded-md md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">Ready to sell?</h3>
                <p className="mt-1 text-sm text-slate-700 sm:text-[15px]">
                  Submit your car details and we will call you soon.
                </p>
              </div>
              <div className="grid gap-2 sm:flex sm:flex-row sm:gap-3">
                <Button
                  className="h-12 rounded-xl bg-indigo-600 text-base text-white hover:bg-indigo-700 sm:h-11 sm:rounded-md sm:text-sm"
                  onClick={() => scrollToSection("sell")}
                >
                  Get my instant offer
                </Button>
                <a href={adminWhatsAppLink} target="_blank" rel="noreferrer" className="inline-flex">
                  <Button
                    variant="secondary"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white text-base text-slate-900 hover:bg-slate-50 sm:h-11 sm:w-auto sm:rounded-md sm:text-sm"
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

      <FloatingGoogleRatingButton href={googleReviewsLink} rating="4.9" countText="200+" />
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
  scrolled,
}: {
  active: string;
  onNav: (id: string) => void;
  waLink: string;
  hidden: boolean;
  scrolled: boolean;
}) {
  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b border-slate-200 transition-transform duration-200",
        scrolled ? "bg-white/80 backdrop-blur" : "bg-white",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center px-4 py-3 md:grid-cols-3 md:px-6">
        <button onClick={() => onNav("sell")} className="group inline-flex items-center gap-2 justify-self-start">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-white shadow-sm md:h-9 md:w-9 md:rounded-md">
            SYR
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-slate-900 md:text-sm">Sell Your Ride</span>
        </button>

        <nav className="hidden items-center justify-center gap-1 md:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => onNav(n.id)}
              className={cn(
                "whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-semibold transition lg:px-3",
                active === n.id ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
              )}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <a href={waLink} target="_blank" rel="noreferrer" className="hidden md:inline-flex">
            <Button className="h-10 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">
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
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-700 sm:text-xs">{kicker}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
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
    <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 md:rounded-md">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white md:h-9 md:w-9 md:rounded-md">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function HeroMiniCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Card className="rounded-2xl border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
      <div className="flex items-start justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-indigo-600 text-[11px] font-extrabold text-white">
            •
          </span>
          Step
        </div>
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-slate-50">{icon}</span>
      </div>

      <p className="mt-3 text-sm font-semibold tracking-tight text-slate-900">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-slate-700">{desc}</p>
    </Card>
  );
}