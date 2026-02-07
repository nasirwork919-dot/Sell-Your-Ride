import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsAppButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 left-4 z-50 md:bottom-6 md:left-6"
      aria-label="Chat on WhatsApp"
      title="WhatsApp"
    >
      <Button
        size="icon"
        className="h-12 w-12 rounded-full bg-emerald-600/90 text-white shadow-lg shadow-emerald-600/20 backdrop-blur hover:bg-emerald-700/90"
      >
        <MessageCircle className="h-5 w-5" />
      </Button>
    </a>
  );
}