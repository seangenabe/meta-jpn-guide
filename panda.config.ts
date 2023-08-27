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
        fgLink: {
          value: { base: "{colors.blue.700}", _dark: "{colors.blue.500}" },
        },
        fgLinkExternal: {
          value: { base: "{colors.cyan.700}", _dark: "{colors.cyan.500}" },
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
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "fg",
        marginTop: "8",
      },
      h3: {
        fontSize: "4",
        marginTop: "8",
        fontWeight: "bold",
      },
      h4: {
        fontSize: "4",
        marginTop: "8",
        paddingStart: "4",
        fontWeight: "bold",
      },
      h5: {
        fontSize: "4",
        marginTop: "8",
        paddingStart: "8",
        fontWeight: "bold",
      },
      "a, :link": {
        color: "fgLink",
      },
      'a[href*="://"]': {
        color: "fgLinkExternal",
      },
      'a[href*="://"]:after': {
        content: '" ⮵"',
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
      details: {
        border: "1px solid gray",
        padding: "2",
        mt: "4",
      },
      td: {
        px: "4",
      },
    },
  },
})
