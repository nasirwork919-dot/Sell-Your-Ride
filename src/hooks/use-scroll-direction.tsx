import { useEffect, useRef, useState } from "react";

export function useScrollDirection(opts?: { thresholdPx?: number }) {
  const thresholdPx = opts?.thresholdPx ?? 6;
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [y, setY] = useState(0);

  const lastY = useRef<number>(0);
  const lastDir = useRef<"up" | "down">("up");

  useEffect(() => {
    lastY.current = window.scrollY || 0;
    setY(lastY.current);

    const onScroll = () => {
      const nextY = window.scrollY || 0;
      const delta = nextY - lastY.current;

      if (Math.abs(delta) >= thresholdPx) {
        const nextDir: "up" | "down" = delta > 0 ? "down" : "up";
        if (nextDir !== lastDir.current) {
          lastDir.current = nextDir;
          setDirection(nextDir);
        }
        lastY.current = nextY;
        setY(nextY);
      } else {
        lastY.current = nextY;
        setY(nextY);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [thresholdPx]);

  return { direction, y };
}