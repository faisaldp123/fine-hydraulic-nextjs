import { buildOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Contact Fine Hydraulic";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return buildOgImage("CONTACT US", "Tell us what you need", "Same-day quotes on rebuilt heavy-equipment parts");
}
