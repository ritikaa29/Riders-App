/** @type {import('tailwindcss').Config} */
export default {
  content: ["./client/src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0804",
        bg2: "#130f08",
        bg3: "#1d160c",
        card: "#181209",
        border: "#291b0f",
        border2: "#3d2510",
        accent: "#FF6B00",
        "accent-light": "#FF8C00",
        "accent-dim": "rgba(255,107,0,0.10)",
        "accent-glow": "rgba(255,107,0,0.30)",
        warn: "#FFB340",
        err: "#FF5C5C",
        "text-1": "#FFFFFF",
        "text-2": "#A89080",
        "text-3": "#6B5040",
        navy: "#0A1128",
        "navy-dark": "#060B18",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        display: ["'Exo 2'", "sans-serif"],
      },
      borderRadius: {
        xl2: "20px",
        xl3: "24px",
      },
      keyframes: {
        radar: {
          "0%": { transform: "rotate(0deg)", opacity: "1" },
          "100%": { transform: "rotate(360deg)", opacity: "1" },
        },
        ping2: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(2)", opacity: "0" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulse2: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,107,0,0.4)" },
          "50%": { boxShadow: "0 0 0 20px rgba(255,107,0,0)" },
        },
      },
      animation: {
        radar: "radar 2s linear infinite",
        ping2: "ping2 2s ease-in-out infinite",
        slideUp: "slideUp 0.4s ease-out forwards",
        fadeIn: "fadeIn 0.3s ease-out forwards",
        pulse2: "pulse2 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
