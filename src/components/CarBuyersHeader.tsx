import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

type NavItem = { id: string; label: string; hasDropdown?: boolean };

export function CarBuyersHeader({
  active,
  items,
  onNav,
  phoneText = "1300 770 571",
  hidden,
  scrolled,
}: {
  active: string;
  items: ReadonlyArray<NavItem>;
  onNav: (id: string) => void;
  phoneText?: string;
  hidden: boolean;
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);

  const mobileItems = useMemo(() => items, [items]);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  function goHome() {
    if (pathname !== "/") navigate("/");
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  }

  function navToHomeAnchor(id: string) {
    if (pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    onNav(id);
  }

  function handleNav(id: string) {
    // Dedicated pages
    if (id === "sell") {
      if (pathname !== "/sell-my-car") navigate("/sell-my-car");
      else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (id === "truck") {
      if (pathname !== "/sell-my-truck") navigate("/sell-my-truck");
      else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Everything else: go to the home page and use anchors there
    navToHomeAnchor(id);
  }

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-transform duration-200",
        "border-b border-slate-200",
        scrolled ? "bg-white/92 backdrop-blur" : "bg-white",
        hidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      {/* MOBILE (matches reference) */}
      <div className="mx-auto flex h-[64px] max-w-6xl items-center justify-between px-4 md:hidden">
        <button
          type="button"
          onClick={goHome}
          className="text-left"
          aria-label="Go to home page"
          title="SellYourRide"
        >
          <span className="text-[22px] font-extrabold tracking-tight text-[#0B3A7A]">SellYourRide</span>
        </button>

        <div className="flex items-center gap-2">
          <a href={`tel:${phoneText.replace(/\s/g, "")}`} className="inline-flex" aria-label="Call" title="Call">
            <Button
              variant="secondary"
              className="h-9 w-9 rounded-full border border-[#0B3A7A]/25 bg-white p-0 text-[#0B3A7A] hover:bg-slate-50"
            >
              <Phone className="h-4 w-4" />
            </Button>
          </a>

          <Button
            onClick={() => handleNav("sell")}
            className="h-9 rounded-full bg-white px-4 text-[12px] font-extrabold text-[#0B3A7A] ring-1 ring-[#0B3A7A]/30 hover:bg-slate-50"
          >
            Get a quote
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                className="h-9 w-9 rounded-full border border-[#0B3A7A]/25 bg-white p-0 text-[#0B3A7A] hover:bg-slate-50"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px] border-slate-200 bg-white p-0">
              <div className="p-5">
                <SheetHeader>
                  <SheetTitle className="text-left text-base font-semibold tracking-tight text-slate-900">
                    SellYourRide
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-4 grid gap-2">
                  <Button
                    onClick={() => {
                      handleNav("sell");
                      setOpen(false);
                    }}
                    className="h-11 w-full rounded-2xl bg-[#0B3A7A] text-white hover:bg-[#082F64]"
                  >
                    Get a quote
                  </Button>

                  {mobileItems.map((n) => (
                    <button
                      key={n.id}
                      type="button"
                      onClick={() => {
                        handleNav(n.id);
                        setOpen(false);
                      }}
                      className={cn(
                        "flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition",
                        active === n.id
                          ? "border-[#0B3A7A] bg-[#0B3A7A] text-white"
                          : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
                      )}
                    >
                      <span className="whitespace-nowrap">{n.label}</span>
                      {n.hasDropdown ? <ChevronDown className="h-4 w-4 opacity-80" /> : null}
                    </button>
                  ))}

                  <Link
                    to="/experience"
                    className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                    onClick={() => setOpen(false)}
                  >
                    <span className="whitespace-nowrap">Experience</span>
                    <ChevronDown className="h-4 w-4 text-slate-500" />
                  </Link>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-slate-600">
                  Clean, quick and professional. Submit once and we’ll follow up with next steps.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* DESKTOP (keep existing structure) */}
      <div className="mx-auto hidden h-[68px] max-w-6xl grid-cols-[minmax(220px,1fr)_minmax(0,2fr)_minmax(220px,1fr)] items-center px-4 md:grid md:px-6">
        {/* Left: icon + phone */}
        <div className="flex items-center justify-start">
          <button
            type="button"
            onClick={goHome}
            className="inline-flex items-center gap-3"
            aria-label="Go to home page"
            title="Home"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0B3A7A] text-white shadow-sm ring-1 ring-[#062B57]/60">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M8 7h10l2 6v6H6v-6l2-6Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path d="M7 13h14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="M9 19h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M17 19h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M9 5h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>

            <span className="whitespace-nowrap text-[22px] font-extrabold tracking-tight text-[#0B3A7A]">
              {phoneText}
            </span>
          </button>
        </div>

        {/* Center: nav (centered) */}
        <nav className="hidden min-w-0 items-center justify-center md:flex" aria-label="Primary navigation">
          <div className="flex min-w-0 items-center justify-center gap-7 whitespace-nowrap">
            {items.map((n) => (
              <button
                key={n.id}
                type="button"
                onClick={() => handleNav(n.id)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-2 text-sm font-semibold text-[#0B3A7A] transition",
                  "hover:bg-slate-100",
                  active === n.id ? "underline underline-offset-[12px] decoration-2" : "no-underline",
                )}
              >
                <span className="whitespace-nowrap">{n.label}</span>
                {n.hasDropdown ? <ChevronDown className="h-4 w-4 text-[#0B3A7A]/70" /> : null}
              </button>
            ))}
          </div>
        </nav>

        {/* Right: CTA */}
        <div className="flex items-center justify-end gap-2">
          <Button
            onClick={() => handleNav("sell")}
            className={cn(
              "hidden h-10 rounded-full px-8 font-extrabold md:inline-flex",
              "bg-white text-[#0B3A7A]",
              "ring-1 ring-[#0B3A7A] hover:bg-slate-50",
            )}
          >
            Get a quote
          </Button>

          <div className="h-10 w-10 md:hidden" />
        </div>
      </div>
    </header>
  );
}