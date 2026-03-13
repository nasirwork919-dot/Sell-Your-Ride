import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type Faq = {
  q: string;
  a: string;
};

const FAQS: Faq[] = [
  {
    q: "Can I still drive my car once it's been valued?",
    a: "Yes. Your agreed price remains valid for one week, provided the vehicle’s condition doesn’t change. You can keep driving your car until you’ve been paid. We’ll arrange a time and location for pickup that suits you.",
  },
  {
    q: "What if I am still financing my car?",
    a: "That’s common. Tell us your current payout figure and lender details, and we’ll guide you through the simple steps to finalise the payout as part of the sale.",
  },
  {
    q: "Do I have to accept the valuation given by Sell Your Ride?",
    a: "No. Our valuation is an offer — you’re free to accept, negotiate, or decline. There’s no pressure and no obligation.",
  },
  {
    q: "Are there any cars you won’t buy?",
    a: "We consider most vehicles, including older cars and higher-kilometre vehicles. If your car has major damage or is not drivable, we’ll still advise what’s possible.",
  },
  {
    q: "Can you sell a car without a roadworthy?",
    a: "In many cases, yes. Requirements vary by state. Share your location and vehicle details and we’ll tell you the simplest path forward.",
  },
  {
    q: "What if I need a valuation for a company car or fleet?",
    a: "No problem. We can help with business vehicles and small fleets — just include the quantity and key details and we’ll follow up with next steps.",
  },
  {
    q: "How long until I receive payment for my car?",
    a: "Typically the same day once everything is confirmed. We’ll explain the payment timing clearly during your inspection and confirmation call.",
  },
  {
    q: "Do you purchase cars from everywhere in Australia?",
    a: "Yes — we operate Australia wide, including metro and many regional areas. If you’re remote, we’ll confirm coverage and timing after you submit.",
  },
];

export function FaqSection({ className, defaultOpen = "item-0" }: { className?: string; defaultOpen?: string }) {
  return (
    <section className={cn("w-full bg-[#66E3B1]", className)} aria-label="Frequently asked questions">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:px-6">
        <h2 className="text-center text-[34px] font-extrabold tracking-tight text-[#0B3A7A] sm:text-[44px]">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible defaultValue={defaultOpen} className="rounded-2xl">
            {FAQS.map((f, idx) => (
              <AccordionItem
                key={f.q}
                value={`item-${idx}`}
                className={cn("border-[#0B3A7A]/25", idx === 0 ? "border-t border-b" : "border-b")}
              >
                <AccordionTrigger
                  className={cn(
                    "flex w-full items-center justify-between gap-4 py-5 text-left hover:no-underline",
                    "text-[13px] font-extrabold tracking-tight text-[#0B3A7A] sm:text-sm",
                    // Style the default chevron icon so it matches the clean single-icon look
                    "[&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-[#0B3A7A] [&>svg]:opacity-90",
                  )}
                >
                  <span className="min-w-0">{f.q}</span>
                </AccordionTrigger>

                <AccordionContent className="pb-6 pr-10 text-[12px] font-medium leading-relaxed text-[#08304B] sm:text-[13px]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}