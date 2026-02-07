import { Card } from "@/components/ui/card";
import { images } from "@/lib/images";

const IMAGES = [
  { src: images.exterior, alt: "Car exterior — clear condition" },
  { src: images.interior, alt: "Interior — details that matter" },
  { src: images.handshake, alt: "Real follow-up — a human call" },
];

export function ImageStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {IMAGES.map((img, idx) => (
        <Card key={idx} className="rounded-xl border-slate-200 bg-white p-3 shadow-sm">
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <img
              src={img.src}
              alt={img.alt}
              className="h-44 w-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-900">{img.alt}</p>
          <p className="mt-1 text-sm text-slate-700">Simple steps that respect your time.</p>
        </Card>
      ))}
    </div>
  );
}
