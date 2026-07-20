import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#12161A",
          backgroundImage:
            "linear-gradient(rgba(226,134,30,0.14) 2px, transparent 2px), linear-gradient(90deg, rgba(226,134,30,0.14) 2px, transparent 2px)",
          backgroundSize: "56px 56px",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 72,
              height: 72,
              alignItems: "center",
              justifyContent: "center",
              background: "#E2861E",
              color: "#12161A",
              fontSize: 40,
              fontWeight: 700,
              borderRadius: 4,
            }}
          >
            F
          </div>
          <div style={{ display: "flex", fontSize: 44, color: "#F3F0E8", fontWeight: 600 }}>
            Fine<span style={{ color: "#E2861E" }}>Hydraulic</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 58,
            lineHeight: 1.15,
            color: "#F3F0E8",
            fontWeight: 700,
            maxWidth: 950,
          }}
        >
          Heavy Equipment Hydraulic Parts, Rebuilt & Tested
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 26, color: "#9AA5AF", maxWidth: 900 }}>
          Transmissions · Engines · Hydraulic Pumps & Motors · CAT Spares
        </div>
      </div>
    ),
    { ...size }
  );
}
