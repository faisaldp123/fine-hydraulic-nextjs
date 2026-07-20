import { ImageResponse } from "next/og";
import { getCategory, siteConfig } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Fine Hydraulic product category";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  const name = category ? category.name : siteConfig.name;
  const tagline = category ? category.tagline : siteConfig.shortDescription;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#12161A",
          backgroundImage:
            "linear-gradient(rgba(226,134,30,0.14) 2px, transparent 2px), linear-gradient(90deg, rgba(226,134,30,0.14) 2px, transparent 2px)",
          backgroundSize: "56px 56px",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              alignItems: "center",
              justifyContent: "center",
              background: "#E2861E",
              color: "#12161A",
              fontSize: 30,
              fontWeight: 700,
              borderRadius: 4,
            }}
          >
            F
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#F3F0E8", fontWeight: 600 }}>
            Fine<span style={{ color: "#E2861E" }}>Hydraulic</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 24, color: "#E2861E", letterSpacing: 4 }}>
            PRODUCT CATEGORY
          </div>
          <div style={{ display: "flex", marginTop: 16, fontSize: 68, color: "#F3F0E8", fontWeight: 700 }}>
            {name}
          </div>
          <div style={{ display: "flex", marginTop: 18, fontSize: 28, color: "#9AA5AF", maxWidth: 900 }}>
            {tagline}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
