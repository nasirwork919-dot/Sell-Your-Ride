import { useEffect, useMemo, useRef, useState } from "react";
import { CarBuyersHero } from "@/components/CarBuyersHero";
import { HomeCategoryTiles } from "@/components/HomeCategoryTiles";
import { WantedSellTilesSection } from "@/components/WantedSellTilesSection";
import { CarBuyersHeader } from "@/components/CarBuyersHeader";
import { BackToTopButton } from "@/components/BackToTopButton";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { MarketingPixels } from "@/components/MarketingPixels";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { AsFeaturedInStrip } from "@/components/AsFeaturedInStrip";
import { AustraliaCoverageMap } from "@/components/AustraliaCoverageMap";
import { FastStepsSection } from "@/components/FastStepsSection";
import { HappyCustomersSection } from "@/components/HappyCustomersSection";
import { ExactBenefitsOrangeSection } from "@/components/ExactBenefitsOrangeSection";
import { ReadyToSellSection } from "@/components/ReadyToSellSection";
import { AboutWordmarkSection } from "@/components/AboutWordmarkSection";
import { FaqSection } from "@/components/FaqSection";
import { WavyFooterCta } from "@/components/WavyFooterCta";
import { WaveSeparator } from "@/components/WaveSeparator";

const NAV = [
  { id: "sell", label: "Sell my car" },
  { id: "truck", label: "Sell my truck" },
  { id: "caravan", label: "Sell my caravan" },
  { id: "difference", label: "Our Difference", hasDropdown: true },
  { id: "about", label: "About", hasDropdown: true },
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

    const headerOffsetPx = 96;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffsetPx;
    const clampedTop = Math.max(0, top);

    window.scrollTo({ top: clampedTop, behavior: "auto" });
    requestAnimationFrame(() => window.scrollTo({ top: clampedTop, behavior: "smooth" }));
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
    const id = window.location.hash.replace("#", "").trim();
    if (!id) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const ids = ["sell", "truck", "caravan", "difference", "about", "video", "how", "reviews", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.12, 0.2, 0.3] },
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

  return (
    <div className="min-h-screen bg-slate-50">
      <MarketingPixels />

      <CarBuyersHeader
        active={active}
        items={NAV}
        onNav={navTo}
        hidden={navHidden}
        scrolled={scrolled}
        phoneText="+61 478 797 731"
      />

      <main className="w-full pb-0 pt-[88px] sm:pt-24">
        {/* Hero + form (quote) — FULL WIDTH */}
        <section id="sell" className="w-full scroll-mt-28">
          <CarBuyersHero
            className="w-full rounded-none"
            onPrimaryCta={() => {
              const el = document.getElementById("sell");
              if (!el) return;
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            phoneText="+61 478 797 731"
          />
        </section>

        {/* Curve under hero (teal -> white) */}
        <WaveSeparator from="#22B9C5" to="#FFFFFF" className="-mt-[2px]" />

        {/* Full-width featured strip */}
        <AsFeaturedInStrip />

        {/* Full-width category tiles */}
        <section id="truck" className="w-full scroll-mt-28">
          <HomeCategoryTiles onNavigate={navTo} />
        </section>

        {/* Full-width Australia coverage map section */}
        <section id="video" className="w-full scroll-mt-28">
          <AustraliaCoverageMap />
        </section>

        {/* Fast steps section (now contains the embedded white wave) */}
        <FastStepsSection onEnquire={() => navTo("sell")} />

        {/* Happy customers section */}
        <HappyCustomersSection onEnquire={() => navTo("sell")} />

        {/* Remaining sections: centered content */}
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          {/* Caravan anchor can map to same block for now */}
          <section id="caravan" className="sr-only" aria-hidden="true" />

          {/* Difference + About anchors (scroll targets for header items) */}
          <section id="difference" className="sr-only" aria-hidden="true" />
          <section id="about" className="sr-only" aria-hidden="true" />

          {/* How anchor kept for nav/scroll highlighting, but no longer renders the block */}
          <section id="how" className="sr-only" aria-hidden="true" />

          {/* Reviews anchor kept for nav/scroll highlighting */}
          <section id="reviews" className="sr-only" aria-hidden="true" />

          {/* Contact anchor kept for nav/scroll highlighting */}
          <section id="contact" className="sr-only" aria-hidden="true" />
        </div>

        {/* Exact clone benefits section (full width) */}
        <ExactBenefitsOrangeSection onEnquire={() => navTo("sell")} />

        {/* Requested clone section (now directly under the orange benefits section) */}
        <WantedSellTilesSection onQuote={() => navTo("sell")} />

        {/* Ready-to-sell section (reference screenshot) */}
        <ReadyToSellSection onQuote={() => navTo("sell")} />

        {/* About section (reference screenshot) */}
        <AboutWordmarkSection onContact={() => navTo("sell")} />

        {/* FAQ section (reference screenshot) */}
        <section id="faq" className="w-full scroll-mt-28">
          <FaqSection />
        </section>

        {/* New: exact wavy footer CTA like screenshot */}
        <WavyFooterCta onEnquire={() => navTo("sell")} />
      </main>

      <FloatingWhatsAppButton href={adminWhatsAppLink} />
      <BackToTopButton show={showTop} />
    </div>
  );
}