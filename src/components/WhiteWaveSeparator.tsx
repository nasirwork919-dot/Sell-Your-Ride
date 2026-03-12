import { cn } from "@/lib/utils";

export function WhiteWaveSeparator({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full bg-white", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="block h-[88px] w-full sm:h-[104px] md:h-[120px]"
      >
        {/* White curved band. Place this directly under a dark section. */}
        <path
          d="M0,36 C220,82 480,108 720,92 C980,74 1210,22 1440,38 L1440,160 L0,160 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
}