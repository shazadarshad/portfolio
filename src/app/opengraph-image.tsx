import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Shazad Arshad — Software Developer in Colombo, Sri Lanka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social preview card shown when the site is shared on LinkedIn, WhatsApp, X, etc. */
export default async function Image() {
  const photo = await readFile(join(process.cwd(), "src/assets/og-photo.jpg"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 90px",
          background: "linear-gradient(135deg, #ffffff 0%, #f5f5f7 55%, #e8e6f5 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 28, color: "#6e6e73", letterSpacing: 6, textTransform: "uppercase" }}>
            Portfolio
          </div>
          <div style={{ fontSize: 88, fontWeight: 700, color: "#1d1d1f", letterSpacing: -3, marginTop: 14 }}>
            Shazad Arshad
          </div>
          <div style={{ fontSize: 44, color: "#86868b", letterSpacing: -1, marginTop: 6 }}>
            I build things for the web.
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 44 }}>
            {["Next.js", "TypeScript", "Python", "AI"].map((t) => (
              <div
                key={t}
                style={{
                  fontSize: 24,
                  color: "#1d1d1f",
                  border: "2px solid #d2d2d7",
                  borderRadius: 999,
                  padding: "8px 22px",
                  background: "rgba(255,255,255,0.7)",
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 26, color: "#0066cc", marginTop: 40 }}>shazadarshad.com · Colombo, Sri Lanka</div>
        </div>
        <img
          src={`data:image/jpeg;base64,${photo}`}
          width={340}
          height={340}
          alt=""
          style={{ borderRadius: 999, border: "10px solid #ffffff", boxShadow: "0 30px 60px rgba(0,0,0,0.18)" }}
        />
      </div>
    ),
    size,
  );
}
