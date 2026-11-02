import { ImageResponse } from "next/og";

const SQRT3_2 = Math.sqrt(3) / 2;

// Flower of Life circle centres (unit radius): hex-lattice points within `rings` steps of the origin,
// matching flowerDist() in components/en/home/flowerField.glsl.ts.
const flowerCentres = (rings: number) => {
  const centres: [number, number][] = [];
  for (let q = -rings; q <= rings; q++) {
    for (let s = -rings; s <= rings; s++) {
      if (Math.max(Math.abs(q), Math.abs(s), Math.abs(q + s)) > rings) continue;
      centres.push([q + s / 2, s * SQRT3_2]);
    }
  }
  return centres;
};

type OgCardProps = {
  eyebrow: string;
  before: string;
  accent: string;
  after: string;
};

// Social card for the home pages: headline on the left, Flower of Life on the right.
// Text must stay Latin: the bundled og font has no Japanese glyphs.
export function renderOgCard({ eyebrow, before, accent, after }: OgCardProps) {
  const words = (text: string) =>
    text.split(" ").filter(Boolean).map((word, i) => (
      <span key={`${text}-${i}`} style={{ marginRight: 16 }}>
        {word}
      </span>
    ));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          backgroundColor: "#030014",
          backgroundImage: "radial-gradient(circle at 75% 50%, rgba(108, 76, 255, 0.22), rgba(3, 0, 20, 0) 55%)",
        }}
      >
        <svg
          width="600"
          height="600"
          viewBox="-3.3 -3.3 6.6 6.6"
          style={{ position: "absolute", right: 0, top: 15 }}
        >
          {flowerCentres(2).map(([x, y]) => (
            <circle key={`a${x},${y}`} cx={x} cy={y} r="1" fill="none" stroke="rgba(237, 235, 255, 0.35)" strokeWidth="0.014" />
          ))}
          <circle cx="0" cy="0" r="3" fill="none" stroke="rgba(237, 235, 255, 0.35)" strokeWidth="0.014" />
          {flowerCentres(1).map(([x, y]) => (
            <circle key={`b${x},${y}`} cx={x} cy={y} r="1" fill="none" stroke="rgba(108, 76, 255, 0.85)" strokeWidth="0.02" />
          ))}
        </svg>

        <div style={{ display: "flex", flexDirection: "column", width: 680, marginLeft: 72 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 14px",
              border: "1px solid rgba(108, 76, 255, 0.6)",
              borderRadius: 999,
              color: "#edebff",
              fontSize: 22,
            }}
          >
            {eyebrow}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: 28, color: "#ffffff", fontSize: 60, lineHeight: 1.15 }}>
            {words(before)}
            <span
              style={{
                marginRight: 16,
                backgroundImage: "linear-gradient(90deg, #6c4cff, #ff7a45)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {accent}
            </span>
            {words(after)}
          </div>
          <div style={{ display: "flex", marginTop: 36, color: "#9c99b4", fontSize: 28 }}>Rikiya Okawa</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
