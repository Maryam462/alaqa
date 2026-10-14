import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Alaka monochrome brand palette */
                brand: {
          50: "#f5f5f5",
          100: "#ededed",
          200: "#d1d1d1",
          300: "#c7c7c7",
          400: "#a1a1a1",
          500: "#6e6e6e",
          600: "#424242",
          700: "#3a3a3a",
          800: "#2c2c2c",
          900: "#1c1c1c",
          950: "#0d0d0d",
        },
        link: "#616161",
        /* Neutral greys from the palette (light + dark text/borders) */
        slate: {
          50: "#f8f8f8",
          100: "#f2f2f2",
          200: "#d1d1d1",
          300: "#c7c7c7",
          400: "#a1a1a1",
          500: "#6e6e6e",
          600: "#424242",
          700: "#3a3a3a",
          800: "#2c2c2c",
          900: "#1d1d1d",
          950: "#0d0d0d",
        },
        surface: {
          light: "#ffffff",
          muted: "#f5f5f5",
          dark: "#000000",
          card: "#1c1c1c",
          elevated: "#3a3a3a",
        },
        success: { DEFAULT: "#a0a0a0", light: "#f4f4f4" },
        warning: { DEFAULT: "#a1a1a1", light: "#f5f5f5" },
        error: { DEFAULT: "#646464", light: "#eeeeee" },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      boxShadow: {
                glow: "0 0 20px rgba(142, 142, 142, 0.30)",
        "glow-lg": "0 0 40px rgba(142, 142, 142, 0.40)",
        soft: "0 4px 24px rgba(0, 0, 0, 0.08)",
        "soft-lg": "0 12px 40px rgba(0, 0, 0, 0.12)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "brand-gradient":
          "linear-gradient(135deg, #616161 0%, #4c4c4c 50%, #0d0d0d 100%)",
        "hero-overlay":
          "linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.55) 45%, rgba(0, 0, 0, 0.25) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 45s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        orbit: "orbit 22s linear infinite",
        "orbit-reverse": "orbitReverse 22s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "scroll-bounce": "scrollBounce 2s ease-in-out infinite",
        "border-spin": "borderSpin 4s linear infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        orbitReverse: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.08)" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        borderSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      borderRadius: { "4xl": "2rem" },
    },
  },
  plugins: [],
};

export default config;