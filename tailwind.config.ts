import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "page-bg": "url('/page-bg-1.jpg')",
      },
      // ─── V2 Color Tokens ─────────────────────────────────────────────
      colors: {
        // Home theme – primary cyan, secondary lavender
        "v2-primary": "#4cd7f6",
        "v2-secondary": "#d0bcff",
        // Resume / Work / Contact theme – primary lavender, secondary cyan
        "v2-primary-alt": "#c0c1ff",
        "v2-secondary-alt": "#4cd7f6",
        // Shared surfaces
        "v2-bg": "#0b1326",
        "v2-surface": "#0b1326",
        "v2-surface-dim": "#0b1326",
        "v2-surface-container-lowest": "#060e20",
        "v2-surface-container-low": "#131b2e",
        "v2-surface-container": "#171f33",
        "v2-surface-container-high": "#222a3d",
        "v2-surface-container-highest": "#2d3449",
        "v2-surface-bright": "#31394d",
        "v2-on-surface": "#dae2fd",
        "v2-on-surface-variant": "#bcc9cd",
        "v2-on-surface-variant-alt": "#c7c4d7",
        "v2-on-background": "#dae2fd",
        "v2-outline": "#869397",
        "v2-outline-alt": "#908fa0",
        "v2-outline-variant": "#3d494c",
        "v2-outline-variant-alt": "#464554",
        // Primary containers
        "v2-primary-container": "#06b6d4",
        "v2-primary-container-alt": "#8083ff",
        "v2-on-primary": "#003640",
        "v2-on-primary-alt": "#1000a9",
        // Secondary
        "v2-secondary-container": "#571bc1",
        "v2-secondary-container-alt": "#03b5d3",
        "v2-on-secondary-container": "#c4abff",
        // Tertiary
        "v2-tertiary": "#ffb2b7",
        "v2-tertiary-container": "#ff516a",
        "v2-on-tertiary": "#67001b",
        // Error
        "v2-error": "#ffb4ab",
        "v2-error-container": "#93000a",
        "v2-on-error": "#690005",
        // Misc
        "v2-inverse-surface": "#dae2fd",
        "v2-inverse-on-surface": "#283044",
        "v2-surface-glass": "rgba(30, 41, 59, 0.7)",
      },
      // ─── V2 Font Families ────────────────────────────────────────────
      fontFamily: {
        "v2-display": ["var(--font-sora)", "sans-serif"],
        "v2-headline": ["var(--font-sora)", "sans-serif"],
        "v2-body": ["var(--font-manrope)", "sans-serif"],
        "v2-mono": ["var(--font-jetbrains)", "monospace"],
      },
      // ─── V2 Font Sizes ───────────────────────────────────────────────
      fontSize: {
        "v2-display": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "v2-display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "v2-display-mobile": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "v2-headline-lg": ["40px", { lineHeight: "1.2", fontWeight: "600" }],
        "v2-headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "v2-body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "v2-body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "v2-mono-label": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "500" }],
        "v2-mono-code": ["13px", { lineHeight: "20px", fontWeight: "400" }],
        "v2-label-sm": ["12px", { lineHeight: "1.2", fontWeight: "600" }],
      },
      // ─── V2 Spacing ──────────────────────────────────────────────────
      spacing: {
        "v2-gutter": "24px",
        "v2-container": "1280px",
        "v2-section": "120px",
        "v2-card": "32px",
        "v2-header": "80px",
      },
      // ─── V2 Border Radius ────────────────────────────────────────────
      borderRadius: {
        "v2-sm": "0.25rem",
        "v2-md": "0.5rem",
        "v2-lg": "0.75rem",
        "v2-xl": "1rem",
        "v2-2xl": "1.5rem",
        "v2-3xl": "2rem",
        "v2-full": "9999px",
      },
      // ─── V2 Max Width ────────────────────────────────────────────────
      maxWidth: {
        "v2-container": "1280px",
      },
      // ─── V2 Animations ───────────────────────────────────────────────
      transitionTimingFunction: {
        "v2-ease": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "v2-pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "v2-pulse": "v2-pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
