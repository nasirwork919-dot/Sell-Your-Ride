import { cn } from "@/lib/utils";

export function FaqBottomWave({
  className,
  from = "#66E3B1",
  to = "#FFFFFF",
  seam = "rgba(11,58,122,0.14)",
  heightClass = "h-[92px] sm:h-[112px] md:h-[128px]",
}: {
  className?: string;
  /** Color above the wave (FAQ green) */
  from?: string;
  /** Color of the section below (typically white) */
  to?: string;
  /** Subtle seam stroke */
  seam?: string;
  /** Tailwind height classes for responsive control */
  heightClass?: string;
}) {
  const waveD = `
    M 0 130
    C 140 72, 260 72, 360 130
    C 460 188, 620 188, 720 130
    C 820 72, 980 72, 1080 130
    C 1180 188, 1340 188, 1440 130
  `.trim();

  return (
    <div className={cn("relative w-full", className)} aria-hidden="true">
      <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className={cn("block w-full", heightClass)}>
        {/* Top area = FAQ green */}
        <rect x="0" y="0" width="1440" height="220" fill={from} />

        {/* Bottom fill = next section color */}
        <path
          d={`
            ${waveD}
            L 1440 220
            L 0 220
            Z
          `}
          fill={to}
        />

        {/* seam */}
        <path d={waveD} fill="none" stroke={seam} strokeWidth="6" strokeLinecap="round" />
      </svg>
    </div>
  );
}