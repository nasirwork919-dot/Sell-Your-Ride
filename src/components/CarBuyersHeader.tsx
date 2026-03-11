import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

type NavItem = { id: string; label: string };

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

  const mobileItems = useMemo(
    () => items.filter((i) => i.id !== "sell"),
    [items],
  );

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b border-slate-200 transition-transform duration-200",
        scrolled ? "bg-white/85 backdrop-blur" : "bg-white",
        hidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      {/* top strip */}
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 md:px-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0B3A7A] text-white">
              <PhoneCall className="h-4 w-4" />
            </span>
            <span className="tracking-tight">{phoneText}</span>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <Button
              onClick={() => onNav("sell")}
              className="h-9 rounded-full bg-[#0B3A7A] px-4 font-semibold text-white hover:bg-[#082F64]"
            >
              Get a quote
            </Button>
          </div>
        </div>
      </div>

      {/* main row */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center px-4 py-3 md:grid-cols-12 md:px-6">
        {/* Brand */}
        <button
          type="button"
          onClick={() => onNav("sell")}
          className="col-span-1 inline-flex items-center gap-3 justify-self-start md:col-span-3"
          aria-label="Go to quote form"
        >
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#18B9C8] text-sm font-extrabold tracking-tight text-white shadow-sm">
            SYR
          </span>
          <div className="leading-none">
            <p className="text-base font-extrabold tracking-tight text-[#0B3A7A]">SellYourRide</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Car buying service
            </p>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="col-span-7 hidden items-center justify-center gap-7 md:flex" aria-label="Primary navigation">
          {items.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => onNav(n.id)}
              className={cn(
                "rounded-full px-2 py-2 text-sm font-semibold text-[#0B3A7A] transition hover:bg-slate-100",
                active === n.id ? "underline underline-offset-8" : "no-underline",
              )}
            >
              {n.label}
            </button>
          ))}
          <Link
            to="/experience"
            className="rounded-full px-2 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Experience
          </Link>
        </nav>

        {/* Right actions */}
        <div className="col-span-1 flex items-center justify-end gap-2 md:col-span-2">
          <Button
            onClick={() => onNav("sell")}
            className="hidden h-10 rounded-full bg-white px-5 font-semibold text-[#0B3A7A] ring-1 ring-[#0B3A7A]/30 hover:bg-slate-50 md:inline-flex"
          >
            Get a quote
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                className="h-10 w-10 rounded-2xl border border-slate-200 bg-white p-0 text-slate-900 hover:bg-slate-50 md:hidden"
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
                        "w-full rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition",
                        active === n.id
                          ? "border-[#0B3A7A] bg-[#0B3A7A] text-white"
                          : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
                      )}
                    >
                      {n.label}
                    </button>
                  ))}

                  <Link
                    to="/experience"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                    onClick={() => setOpen(false)}
                  >
                    Experience
                  </Link>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-slate-600">
                  Clean, quick and private. Submit once and we’ll follow up with next steps.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}