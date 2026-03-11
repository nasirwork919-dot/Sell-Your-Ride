import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

export function VideoPlaceholder({ className }: { className?: string }) {
  return (
    <section className={cn("relative", className)} aria-label="Video">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[16/9] w-full bg-slate-50">
          <div className="absolute inset-0 grid place-items-center">
            <div className="flex flex-col items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-[#0B3A7A] text-white shadow">
                <Play className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold text-slate-700">Video space</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
