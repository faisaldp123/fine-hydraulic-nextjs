import { buildOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "About Fine Hydraulic";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return buildOgImage("ABOUT US", "Component specialists since 2005", "Rebuilt, tested and warrantied heavy-equipment parts");
}
