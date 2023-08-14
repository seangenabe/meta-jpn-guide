import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  jsxFramework: "qwik",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "src/styled-system",

  globalCss: {
    "a,:link": {
      color: "blue.700",
    },
    p: {
      lineHeight: "1.5",
    },
    ul: {
      listStyle: "outside disc",
    },
    "ul,ol": {
      margin: "0 0 1.5em 1.5em",
    },
    "li ul,li ol": {
      margin: "0 0 1.5em 1.5em",
    },
  },
})
