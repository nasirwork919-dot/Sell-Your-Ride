import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export function MobileNav({
  active,
  items,
  onNav,
}: {
  active: string;
  items: ReadonlyArray<{ id: string; label: string }>;
  onNav: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [pendingNav, setPendingNav] = useState<string | null>(null);

  // Close on hash changes (simple UX)
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Run navigation only after the sheet is fully closed (more reliable on mobile)
  useEffect(() => {
    if (open) return;
    if (!pendingNav) return;
    onNav(pendingNav);
    setPendingNav(null);
  }, [open, pendingNav, onNav]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          className="h-10 rounded-lg border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px] border-slate-200 bg-white p-0">
        <div className="p-5">
          <SheetHeader>
            <SheetTitle className="text-left text-base font-semibold tracking-tight text-slate-900">
              Sell Your Ride
            </SheetTitle>
          </SheetHeader>

          <div className="mt-4 grid gap-2">
            {items.map((n) => (
              <button
                key={n.id}
                type="button"
                onClick={() => {
                  setPendingNav(n.id);
                  setOpen(false);
                }}
                className={cn(
                  "w-full rounded-lg border px-4 py-3 text-left text-sm font-semibold transition",
                  active === n.id
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                )}
              >
                {n.label}
              </button>
            ))}
          </div>

          <p className="mt-5 text-xs leading-relaxed text-slate-600">
            Submit the form and relax — we handle dealer outreach and call you back within 2 hours.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}