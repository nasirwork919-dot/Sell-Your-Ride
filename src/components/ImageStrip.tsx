import { Card } from "@/components/ui/card";

const IMAGES = [
  { src: "/placeholder.svg", alt: "Car exterior detail" },
  { src: "/placeholder.svg", alt: "Car interior and steering wheel" },
  { src: "/placeholder.svg", alt: "Handshake after car deal" },
];

export function ImageStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {IMAGES.map((img, idx) => (
        <Card key={idx} className="rounded-xl border-slate-200 bg-white p-3 shadow-sm">
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <img src={img.src} alt={img.alt} className="h-44 w-full object-cover" loading="lazy" />
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-900">{img.alt}</p>
          <p className="mt-1 text-sm text-slate-700">A clean process that respects your time.</p>
        </Card>
      ))}
    </div>
  );
}
