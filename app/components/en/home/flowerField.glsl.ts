// GLSL ES 1.0 (WebGL1). A single oversized triangle covers the viewport.
export const flowerVert = /* glsl */ `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

export const flowerFrag = /* glsl */ `
precision highp float;

uniform float uTime;
uniform vec2 uRes;
uniform vec2 uPointer;
uniform float uPointerStrength;
uniform float uOpacity;
uniform vec2 uCenter;
uniform float uR0;

const float PI = 3.14159265359;
const float SQRT3_2 = 0.86602540378;

mat2 rot(float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, s, -s, c);
}

float flowerDist(vec2 p, float r, float n) {
  float d = 1e9;
  for (int qi = -2; qi <= 2; qi++) {
    for (int si = -2; si <= 2; si++) {
      float q = float(qi);
      float s = float(si);
      if (max(max(abs(q), abs(s)), abs(q + s)) > n) continue;
      vec2 c = q * vec2(r, 0.0) + s * vec2(0.5 * r, SQRT3_2 * r);
      d = min(d, abs(length(p - c) - r));
    }
  }
  return d;
}

void main() {
  float minRes = min(uRes.x, uRes.y);
  vec2 p = (2.0 * gl_FragCoord.xy - uRes) / minRes;
  float px = 2.0 / minRes;

  float r = uR0 * (1.0 + 0.04 * sin(2.0 * PI * uTime / 8.0));
  float omega = 2.0 * PI / 120.0;

  vec2 q = p - uCenter;

  // Beyond the vignette (vig == 0 exactly) the pixel is plain paper: skip both lattice loops.
  if (length(q) >= 3.2 * uR0 + 0.25) {
    gl_FragColor = vec4(0.957, 0.953, 0.937, 1.0);
    return;
  }
  vec2 pA = rot(-omega * uTime) * q;
  vec2 pB = rot(2.0 * omega * uTime) * q;

  float dA = min(flowerDist(pA, r, 2.0), abs(length(q) - 3.0 * r));
  float dB = flowerDist(pB, r, 1.0);

  float w = 0.75 * px;
  float aa = 1.0 * px;
  float sA = 1.0 - smoothstep(w - aa, w + aa, dA);
  float sB = 1.0 - smoothstep(w - aa, w + aa, dB);

  vec2 dm = p - uPointer;
  float g = exp(-dot(dm, dm) / (0.35 * 0.35)) * uPointerStrength;

  float vig = 1.0 - smoothstep(3.0 * uR0, 3.2 * uR0 + 0.25, length(q));

  // Palette (sRGB, matches globals.css tokens): ink lines on paper, a gray
  // counter-rotating seed, signal red where the pointer passes. No glow.
  const vec3 PAPER = vec3(0.957, 0.953, 0.937);   // #F4F3EF
  const vec3 INK = vec3(0.090);                   // #171717
  const vec3 MUTE = vec3(0.522, 0.522, 0.502);    // #858580
  const vec3 SIGNAL = vec3(0.890, 0.259, 0.204);  // #E34234

  float k = vig * uOpacity;
  vec3 col = PAPER;
  col = mix(col, MUTE, sB * 0.85 * k);
  vec3 lineCol = mix(INK, SIGNAL, clamp(g * 1.2, 0.0, 1.0));
  col = mix(col, lineCol, sA * (0.62 + 0.30 * g) * k);

  gl_FragColor = vec4(col, 1.0);
}
`;
