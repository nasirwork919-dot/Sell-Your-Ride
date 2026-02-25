import hero from "@/assets/hero.webp";
import sellerKeys from "@/assets/seller-keys.webp";
import heroMain1 from "@/assets/Hero-Main-1.webp";

// Royalty-free images from Pexels (hotlink).
// You can replace these with your own hosted assets anytime.

export const images = {
  // Local hero image (uploaded)
  hero,

  // Local: seller holding keys (uploaded)
  sellerKeys,

  // Local: composite hero image (uploaded)
  heroMain1,

  exterior:
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600",

  // More aligned with "clarity in one minute": quick mobile form entry / writing details
  interior:
    "https://images.pexels.com/photos/4386324/pexels-photo-4386324.jpeg?auto=compress&cs=tinysrgb&w=1600",

  handshake:
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600",

  security:
    "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1600",
} as const;