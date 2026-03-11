import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

type NavItem = { id: string; label: string; hasDropdown?: boolean };

export function CarBuyersHeader({
  active,
  items,
  onNav,
  phoneText = "+61 478 797 731",
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

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b border-slate-200 transition-transform duration-200",
        scrolled ? "bg-white/92 backdrop-blur" : "bg-white",
        hidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div className="mx-auto flex h-[74px] max-w-6xl items-center gap-4 px-4 md:px-6">
        {/* Left: icon + phone */}
        <button
          type="button"
          onClick={() => onNav("sell")}
          className="inline-flex items-center gap-4"
          aria-label="Go to quote form"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B3A7A] text-white shadow-sm">
            <span className="text-xl font-extrabold leading-none">$</span>
          </span>
          <span className="whitespace-nowrap text-xl font-extrabold tracking-tight text-[#0B3A7A] sm:text-2xl">
            {phoneText}
          </span>
        </button>

        {/* Center: nav */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center md:flex" aria-label="Primary navigation">
          <div className="flex min-w-0 items-center gap-10 whitespace-nowrap">
            {items.map((n) => (
              <button
                key={n.id}
                type="button"
                onClick={() => onNav(n.id)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-2 text-[13px] font-semibold text-[#0B3A7A] transition hover:bg-slate-100",
                  active === n.id ? "underline underline-offset-[12px] decoration-[1.5px]" : "no-underline",
                )}
              >
                <span className="whitespace-nowrap">{n.label}</span>
                {n.hasDropdown ? <ChevronDown className="h-4 w-4 text-[#0B3A7A]/70" /> : null}
              </button>
            ))}

            <Link
              to="/experience"
              className="inline-flex items-center gap-1 rounded-full px-2 py-2 text-[13px] font-semibold text-[#0B3A7A] transition hover:bg-slate-100"
            >
              <span className="whitespace-nowrap">Experience</span>
              <ChevronDown className="h-4 w-4 text-[#0B3A7A]/70" />
            </Link>
          </div>
        </nav>

        {/* Right: CTA + mobile menu */}
        <div className="ml-auto flex items-center gap-2">
          <Button
            onClick={() => onNav("sell")}
            className="hidden h-11 whitespace-nowrap rounded-full bg-white px-9 text-[13px] font-extrabold text-[#0B3A7A] ring-2 ring-[#0B3A7A]/90 hover:bg-slate-50 md:inline-flex"
          >
            Get a quote
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                className="h-11 w-11 rounded-2xl border border-slate-200 bg-white p-0 text-slate-900 hover:bg-slate-50 md:hidden"
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
                      onNav("sell");
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
                        onNav(n.id);
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
    </header>
  );
}