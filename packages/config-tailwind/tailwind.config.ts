import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        "primary": colors.emerald,
        "secondary": colors.indigo,
        "text-primary": colors.gray[900],
        "text-secondary": colors.gray[500]
      },
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
    },
  },
  plugins: [],
};
export default config;
