import { cn } from "@/lib/utils";

export function CurvedLineSeparator({
  className,
  color = "rgba(11,58,122,0.22)",
  dash = "rgba(255,255,255,0.9)",
  height = 56,
}: {
  className?: string;
  /** Main curve stroke color */
  color?: string;
  /** Optional dashed highlight stroke color (set to 'transparent' to hide) */
  dash?: string;
  /** Visual height in px */
  height?: number;
}) {
  return (
    <div className={cn("w-full", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full"
        style={{ height }}
      >
        {/* soft curve */}
        <path
          d="M0,70 C180,35 360,90 540,70 C720,50 900,90 1080,70 C1260,50 1350,65 1440,58"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* dashed highlight */}
        <path
          d="M0,70 C180,35 360,90 540,70 C720,50 900,90 1080,70 C1260,50 1350,65 1440,58"
          fill="none"
          stroke={dash}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="10 10"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}