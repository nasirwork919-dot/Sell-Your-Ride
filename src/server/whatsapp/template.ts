import type { Lead } from "@prisma/client";

export function formatLeadWhatsAppMessage({
  lead,
  now,
}: {
  lead: Pick<
    Lead,
    | "fullName"
    | "phone"
    | "carBrand"
    | "carModel"
    | "manufacturingYear"
    | "askingPrice"
    | "kilometersDriven"
    | "additionalNotes"
    | "createdAt"
  >;
  now: Date;
}): string {
  const time = now.toISOString();
  const notes = lead.additionalNotes?.trim() ? lead.additionalNotes.trim() : "—";

  return [
    "🚗 New Car Lead",
    `Name: ${lead.fullName}`,
    `Phone: ${lead.phone}`,
    `Car: ${lead.carBrand} ${lead.carModel} (${lead.manufacturingYear})`,
    `Asking Price: ${formatMoney(lead.askingPrice)}`,
    `KM: ${formatNumber(lead.kilometersDriven)}`,
    `Notes: ${notes}`,
    `Time: ${time}`,
  ].join("\n");
}

function formatMoney(value: number) {
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(value);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(value);
}
