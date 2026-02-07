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
        size="icon"
        variant="secondary"
        className="h-12 w-12 rounded-full border border-slate-200/70 bg-white/70 text-slate-900 shadow-lg shadow-slate-900/10 backdrop-blur hover:bg-white/90"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
}