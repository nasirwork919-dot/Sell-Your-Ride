import { cn } from "@/lib/utils";

export function FaqTopWave({
  className,
  to = "#66E3B1",
  seam = "rgba(11,58,122,0.12)",
  heightClass = "h-[96px] sm:h-[116px] md:h-[132px]",
}: {
  className?: string;
  /** Color of the section below (FAQ green) */
  to?: string;
  /** Optional seam stroke to mimic a subtle edge (set to 'transparent' to hide) */
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
        {/* IMPORTANT: no background rect here (transparent), so it blends into the section above */}

        {/* Bottom fill becomes the FAQ section color */}
        <path
          d={`
            ${waveD}
            L 1440 220
            L 0 220
            Z
          `}
          fill={to}
        />

        {/* Optional subtle seam (very light). Set seam="transparent" to hide entirely. */}
        <path d={waveD} fill="none" stroke={seam} strokeWidth="6" strokeLinecap="round" />
      </svg>
    </div>
  );
}