import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-jakarta)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        forest: {
          950: "#08241B",
          900: "#0F3D2E",
          800: "#164E3B",
          700: "#1E634B",
          600: "#287D5F",
          100: "#E3EFEA",
          50: "#F1F7F4",
        },
        solar: {
          500: "#F5B700",
          400: "#FACC15",
          300: "#FDE047",
          100: "#FEF9C3",
          50: "#FEFCE8",
        },
        terracotta: {
          600: "#DC4A17",
          500: "#EA580C",
          400: "#F97316",
          100: "#FFEDD5",
          50: "#FFF7ED",
        },
        canvas: {
          DEFAULT: "#F7F6F1",
          subtle: "#EFECE4",
          border: "#DEDAD0",
        },
      },
      boxShadow: {
        card: "0 2px 8px -2px rgba(15, 61, 46, 0.06), 0 6px 20px -4px rgba(15, 61, 46, 0.05)",
        "card-hover":
          "0 8px 24px -4px rgba(15, 61, 46, 0.10), 0 4px 12px -2px rgba(15, 61, 46, 0.06)",
        "emergency-glow":
          "0 0 0 3px rgba(22, 163, 74, 0.28), 0 0 28px rgba(22, 163, 74, 0.32), 0 8px 24px -4px rgba(15, 61, 46, 0.14)",
      },
      keyframes: {
        "pulse-ring": {
          "0%, 100%": {
            boxShadow:
              "0 0 0 2px rgba(22, 163, 74, 0.45), 0 0 20px rgba(22, 163, 74, 0.25)",
          },
          "50%": {
            boxShadow:
              "0 0 0 5px rgba(22, 163, 74, 0.75), 0 0 34px rgba(22, 163, 74, 0.48)",
          },
        },
        "flow-dash": {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
        "banner-in": {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "flow-fast": "flow-dash 0.85s linear infinite",
        "flow-normal": "flow-dash 1.4s linear infinite",
        "flow-slow": "flow-dash 2.8s linear infinite",
        "banner-in": "banner-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
