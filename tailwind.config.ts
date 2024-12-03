import daisyui from "daisyui";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
// Retro Pastel Theme

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["GeistVF", "ui-sans-serif", "system-ui"],
        mono: ["GeistMonoVF", "ui-monospace", "SFMono-Regular"],
        display: ["Lobster", "ui-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [typography, daisyui],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      "light",
      "dark",
      {
        retroPastelTheme: {
          primary: "#F28C8C", // Soft Coral Pink
          secondary: "#F2C6A0", // Pastel Peach
          accent: "#AAC7C4", // Mint Green
          neutral: "#7D7C84", // Soft Gray
          "base-100": "#F7F5F2", // Off-White Background

          "--rounded-box": "1rem", // Border radius for boxes
          "--rounded-btn": "0.5rem", // Border radius for buttons
          "--rounded-badge": "1.9rem", // Border radius for badges
          "--animation-btn": "0.25s", // Button click animation duration
          "--animation-input": "0.2s", // Input focus animation duration
          "--btn-focus-scale": "0.95", // Button focus scale transform
          "--border-btn": "1px", // Button border width
          "--tab-border": "1px", // Tab border width
          "--tab-radius": "0.5rem", // Tab border radius
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
} satisfies Config;
