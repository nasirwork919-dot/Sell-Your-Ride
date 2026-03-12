import { cn } from "@/lib/utils";

export function WaveSeparator({
  className,
  from = "#22B9C5",
  to = "#FFFFFF",
  dash = "rgba(255,255,255,0.55)",
}: {
  className?: string;
  /** Top section color */
  from?: string;
  /** Bottom section color */
  to?: string;
  /** Dashed highlight stroke color */
  dash?: string;
}) {
  return (
    <div className={cn("relative w-full", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[72px] w-full sm:h-[88px] md:h-[104px]"
      >
        {/* Top fill (teal) */}
        <path
          d="M0,0H1440V35C1320,52 1220,78 1080,82C920,87 820,54 720,45C610,35 500,55 360,72C220,89 120,90 0,74Z"
          fill={from}
        />
        {/* Bottom fill (white) */}
        <path
          d="M0,74C120,90 220,89 360,72C500,55 610,35 720,45C820,54 920,87 1080,82C1220,78 1320,52 1440,35V120H0Z"
          fill={to}
        />

        {/* Soft highlight band near the seam */}
        <path
          d="M0,70C120,86 220,85 360,68C500,51 610,31 720,41C820,50 920,83 1080,78C1220,74 1320,48 1440,31"
          fill="none"
          stroke="rgba(255,255,255,0.20)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Dashed line highlight like the screenshot */}
        <path
          d="M0,70C120,86 220,85 360,68C500,51 610,31 720,41C820,50 920,83 1080,78C1220,74 1320,48 1440,31"
          fill="none"
          stroke={dash}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8 10"
        />
      </svg>
    </div>
  );
}