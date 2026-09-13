// Mirrored from `logo-generator/app.js` so the site and generator share the same palette set.
export const logoGradients = [
  { key: "sunset", name: "Sunset", colors: ["#ffb36b", "#ff5f6d"] },
  { key: "ocean", name: "Ocean", colors: ["#7aa2ff", "#a78bfa"] },
  { key: "fire", name: "Fire", colors: ["#ff335f", "#ff9a62"] },
  { key: "matrix", name: "Matrix", colors: ["#00ff41", "#00a82d"] },
  { key: "nebula", name: "Nebula", colors: ["#9b7bff", "#f09cc4"] },
  { key: "gold", name: "Gold", colors: ["#f7971e", "#ffd200"] },
  { key: "forest", name: "Forest", colors: ["#42b883", "#79d2a6"] },
  { key: "mint", name: "Mint", colors: ["#25d9ff", "#5b8cff"] },
  { key: "ice", name: "Ice", colors: ["#78b5ff", "#a5d8ff"] },
  { key: "coral", name: "Coral", colors: ["#ff7e8b", "#ffb3a7"] },
  { key: "aurora", name: "Aurora", colors: ["#b2ff7a", "#68e6c2"] },
  { key: "neon", name: "Neon", colors: ["#f472ff", "#60a5fa"] },
  { key: "ink", name: "Ink", colors: ["#0f172a", "#334155"] },
  { key: "cobalt", name: "Cobalt", colors: ["#1d4ed8", "#0f172a"] },
  { key: "evergreen", name: "Evergreen", colors: ["#14532d", "#0f766e"] },
  { key: "berry", name: "Berry", colors: ["#86198f", "#9f1239"] },
  { key: "ruby", name: "Ruby", colors: ["#991b1b", "#b91c1c"] }
] as const;

export type LogoGradient = (typeof logoGradients)[number];

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function hexToRgb(hex: string): [number, number, number] {
  const normalised = hex.replace("#", "");
  const value = Number.parseInt(normalised, 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

function rgbToHex([red, green, blue]: [number, number, number]): string {
  return `#${[red, green, blue]
    .map((channel) => clamp(Math.round(channel), 0, 255).toString(16).padStart(2, "0"))
    .join("")}`;
}

export function getGradientColour(
  colors: readonly [string, string] | readonly string[],
  t: number
): string {
  const [start, end] = colors;
  const [startRed, startGreen, startBlue] = hexToRgb(start);
  const [endRed, endGreen, endBlue] = hexToRgb(end);
  const mix = clamp(t, 0, 1);

  return rgbToHex([
    startRed + (endRed - startRed) * mix,
    startGreen + (endGreen - startGreen) * mix,
    startBlue + (endBlue - startBlue) * mix
  ]);
}

export function dimColour(hex: string, factor: number): string {
  const [red, green, blue] = hexToRgb(hex);
  return rgbToHex([red * factor, green * factor, blue * factor]);
}

export function getRandomLogoGradient(): LogoGradient {
  return logoGradients[Math.floor(Math.random() * logoGradients.length)];
}
