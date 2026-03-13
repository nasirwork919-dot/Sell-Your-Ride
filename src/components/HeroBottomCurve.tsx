import { cn } from "@/lib/utils";

export function HeroBottomCurve({
  className,
  from = "#22B9C5",
  to = "#F3F6FA",
}: {
  className?: string;
  from?: string;
  to?: string;
}) {
  return (
    <div className={cn("relative w-full", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="block h-[120px] w-full sm:h-[150px] md:h-[180px]"
      >
        {/* Hero background */}
        <rect x="0" y="0" width="1440" height="220" fill={from} />
        {/* Big soft curve into next section */}
        <path
          d="M0,70
             C220,140 520,200 760,190
             C1020,178 1185,120 1440,88
             L1440,220 L0,220 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}