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

    semanticTokens: {
      colors: {
        bg: {
          value: { base: "{colors.white}", _dark: "{colors.black}" },
        },
        bgShade: {
          value: { base: "{colors.blue.400}", _dark: "{colors.blue.900}" },
        },
        bgActive: {
          value: { base: "{colors.yellow.500}", _dark: "{colors.yellow.800}" },
        },
        fg: {
          value: { base: "{colors.black}", _dark: "{colors.white}" },
        },
        bgSecondary: {
          value: { base: "{colors.gray.100}", _dark: "{colors.gray.800}" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "src/styled-system",

  globalCss: {
    body: {
      bg: "bg",
      color: "fg",
    },
    button: {
      color: "fg",
    },
    ".prose": {
      h1: { fontSize: "3xl", fontWeight: "bold", marginTop: "8" },
      h2: {
        fontSize: "2xl",
        borderBottom: "1px solid black",
        marginTop: "6",
      },
      h3: {
        fontSize: "4",
        marginTop: "4",
        fontWeight: "bold",
      },
      h4: { fontSize: "lg", marginTop: "xl" },
      h5: { fontSize: "md", marginTop: "xl" },
      "a, :link": {
        color: "blue.700",
      },
      p: {
        lineHeight: "1.5",
        marginTop: "4",
      },
      ul: {
        listStyle: "outside disc",
      },
      "ul,ol": {
        marginTop: "4",
        marginX: "6",
      },
      "li ul,li ol": {
        marginTop: "0",
        marginX: "6",
      },
    },
  },
})
