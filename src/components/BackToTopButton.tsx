import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function BackToTopButton({ show }: { show: boolean }) {
  return (
    <div
      className={[
        "fixed bottom-4 right-4 z-50 transition-all duration-200 md:bottom-6 md:right-6",
        show ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
      ].join(" ")}
    >
      <Button
        variant="secondary"
        className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-slate-900 shadow-lg shadow-slate-900/5 hover:bg-slate-50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp className="mr-2 h-5 w-5" />
        Top
      </Button>
    </div>
  );
}