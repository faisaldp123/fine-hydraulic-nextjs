import { buildOgImage, ogSize, ogContentType } from "@/lib/og";

export const alt = "Fine Hydraulic Gallery";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return buildOgImage("GALLERY", "Our work, section by section", "Every component category we rebuild and supply");
}
