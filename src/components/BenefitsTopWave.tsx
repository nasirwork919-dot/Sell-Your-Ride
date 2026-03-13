import { cn } from "@/lib/utils";

export function BenefitsTopWave({
  className,
  from = "#FFFFFF",
  to = "#F07A5A",
  seam = "rgba(11,58,122,0.16)",
  heightClass = "h-[96px] sm:h-[116px] md:h-[132px]",
}: {
  className?: string;
  /** Color above the wave (typically white) */
  from?: string;
  /** Color of the section below (orange benefits) */
  to?: string;
  /** Optional seam stroke to mimic the footer's subtle edge */
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
        {/* Top area matches the section above */}
        <rect x="0" y="0" width="1440" height="220" fill={from} />

        {/* Bottom fill becomes the section color */}
        <path
          d={`
            ${waveD}
            L 1440 220
            L 0 220
            Z
          `}
          fill={to}
        />

        {/* Subtle seam line */}
        <path d={waveD} fill="none" stroke={seam} strokeWidth="6" strokeLinecap="round" />
      </svg>
    </div>
  );
}