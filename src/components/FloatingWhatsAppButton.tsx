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
    >
      <Button
        className="h-12 rounded-lg bg-emerald-600 px-4 text-white shadow-lg shadow-emerald-600/15 hover:bg-emerald-700"
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        WhatsApp
      </Button>
    </a>
  );
}