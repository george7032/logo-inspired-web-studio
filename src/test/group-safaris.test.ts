import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { packages } from "@/lib/packages";

const newSlugs = [
  "7-day-group-safari-mara-nakuru-naivasha-amboseli",
  "6-day-budget-group-safari-mara-nakuru-amboseli",
  "5-day-group-safari-mara-nakuru-naivasha",
  "4-day-group-safari-mara-nakuru",
  "3-day-budget-group-safari-maasai-mara",
  "private-day-tour-amboseli-national-park",
  "overnight-safari-tsavo-east-from-malindi",
  "private-overnight-safari-amboseli",
  "7-day-luxury-lodge-safari-land-cruiser",
  "overnight-safari-tsavo-east-from-mombasa-diani-nairobi",
  "3-day-private-masai-mara-migration-safari-land-cruiser",
  "overnight-tour-hells-gate-lake-nakuru",
  "5-day-safari-tsavo-west-amboseli-tsavo-east-from-mombasa",
];

const expectedPrices: Record<string, number> = {
  "7-day-group-safari-mara-nakuru-naivasha-amboseli": 700,
  "6-day-budget-group-safari-mara-nakuru-amboseli": 560,
  "5-day-group-safari-mara-nakuru-naivasha": 370,
  "4-day-group-safari-mara-nakuru": 280,
  "3-day-budget-group-safari-maasai-mara": 190,
  "private-day-tour-amboseli-national-park": 500,
  "overnight-safari-tsavo-east-from-malindi": 465,
  "private-overnight-safari-amboseli": 340,
  "7-day-luxury-lodge-safari-land-cruiser": 2480,
  "overnight-safari-tsavo-east-from-mombasa-diani-nairobi": 385,
  "3-day-private-masai-mara-migration-safari-land-cruiser": 405,
  "overnight-tour-hells-gate-lake-nakuru": 287,
  "5-day-safari-tsavo-west-amboseli-tsavo-east-from-mombasa": 875,
};

describe("group safaris from the client itinerary file", () => {
  it("lists all five new group safaris on the site", () => {
    for (const slug of newSlugs) {
      expect(packages.find((p) => p.slug === slug), slug).toBeDefined();
    }
  });

  it("prices them exactly as provided (USD per person sharing)", () => {
    for (const [slug, price] of Object.entries(expectedPrices)) {
      expect(packages.find((p) => p.slug === slug)?.priceFrom, slug).toBe(price);
    }
  });

  it("exports every new tour page for static cPanel hosting", () => {
    const config = readFileSync(join(__dirname, "../../vite.config.ts"), "utf8");
    for (const slug of newSlugs) {
      expect(config).toContain(`path: "/tours/${slug}"`);
    }
  });
});
