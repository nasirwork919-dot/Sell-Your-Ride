import { cn } from "@/lib/utils";

export function FullBleedSection({
  className,
  innerClassName,
  children,
}: {
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("w-full", className)}>
      <div className={cn("w-full px-4 md:mx-auto md:max-w-6xl md:px-6", innerClassName)}>{children}</div>
    </section>
  );
}