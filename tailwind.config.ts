import type { Config } from "tailwindcss";

/**
 * Design tokens below are lifted 1:1 from the source Figma export (Home.svg)
 * so the built page matches the reference pixel-for-pixel in colour and type.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#003BE2", // primary blue — hero, footer band, CTAs
          dark: "#040819",
        },
        lime: {
          DEFAULT: "#D4FB20", // primary accent
          bright: "#CBFC01", // rating stars / small accents
        },
        ink: {
          DEFAULT: "#242528", // headings / body copy
          soft: "#4F4F4F", // secondary text
          muted: "#82868E", // tertiary text / placeholders
          faint: "#4B4C53", // meta text (durations, counts)
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F5F5F6", // section backgrounds, pills
          alt: "#F6F6F6", // progress-bar tracks
          tint: "#FAFAFA", // light gradient-backed sections
        },
        border: {
          DEFAULT: "#CED0D3",
        },
        line: {
          DEFAULT: "#E5E6E8",
          social: "#D1D1D1",
        },
        card: {
          dark: "#443131", // dark placeholder thumbnail background
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        heading: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(4, 8, 25, 0.04), 0 8px 24px rgba(4, 8, 25, 0.06)",
        floating:
          "0 4px 8px rgba(4, 8, 25, 0.04), 0 16px 40px rgba(4, 8, 25, 0.10)",
      },
      borderRadius: {
        xl2: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
