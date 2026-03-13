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
        className="block h-[120px] w-full sm:h-[150px] md:h-[190px]"
      >
        {/* hero background */}
        <rect x="0" y="0" width="1440" height="220" fill={from} />

        {/* big footer-style curve into next section */}
        <path
          d="
            M 0 70
            C 240 40, 480 25, 720 25
            C 960 25, 1200 40, 1440 70
            L 1440 220
            L 0 220
            Z
          "
          fill={to}
        />

        {/* subtle seam like footer (keeps it crisp on all displays) */}
        <path
          d="
            M 0 70
            C 240 40, 480 25, 720 25
            C 960 25, 1200 40, 1440 70
          "
          fill="none"
          stroke="rgba(11,58,122,0.10)"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}