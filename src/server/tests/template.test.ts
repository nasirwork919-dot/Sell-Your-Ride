import { describe, expect, it } from "vitest";
import { formatLeadWhatsAppMessage } from "../whatsapp/template";

describe("WhatsApp template", () => {
  it("formats a structured message", () => {
    const msg = formatLeadWhatsAppMessage({
      now: new Date("2025-01-01T00:00:00.000Z"),
      lead: {
        fullName: "Jane Doe",
        phone: "+15551234567",
        carBrand: "Toyota",
        carModel: "Corolla",
        manufacturingYear: 2018,
        askingPrice: 9500,
        kilometersDriven: 120000,
        additionalNotes: "",
        createdAt: new Date("2025-01-01T00:00:00.000Z"),
      } as any,
    });

    expect(msg).toContain("🚗 New Car Lead");
    expect(msg).toContain("Name: Jane Doe");
    expect(msg).toContain("Car: Toyota Corolla (2018)");
    expect(msg).toContain("Time: 2025-01-01T00:00:00.000Z");
  });
});
