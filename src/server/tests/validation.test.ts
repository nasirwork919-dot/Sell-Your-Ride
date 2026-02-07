import { describe, expect, it } from "vitest";
import { validateAndNormalizeLead } from "../validation/lead";

describe("lead validation", () => {
  it("accepts a valid payload", () => {
    const res = validateAndNormalizeLead({
      fullName: "  Jane Doe ",
      phone: "+15551234567",
      carBrand: "Toyota",
      carModel: "Corolla",
      manufacturingYear: 2018,
      askingPrice: 9500,
      kilometersDriven: 120000,
      additionalNotes: " clean ",
    });

    expect(res.ok).toBe(true);
    if (res.ok) {
      expect(res.data.fullName).toBe("Jane Doe");
      expect(res.data.additionalNotes).toBe("clean");
    }
  });

  it("rejects invalid year", () => {
    const res = validateAndNormalizeLead({
      fullName: "Jane Doe",
      phone: "+15551234567",
      carBrand: "Toyota",
      carModel: "Corolla",
      manufacturingYear: 1970,
      askingPrice: 9500,
      kilometersDriven: 120000,
    });

    expect(res.ok).toBe(false);
  });
});
