const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "3xl": "4rem",
        "4xl": "6rem",
        "5xl": "8rem",
      },
    },

    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FBFBFA", // or DEFAULT
            foreground: {
              100: "#F3F3F3",
              200: "#E7E7E7",
              300: "#B9B9B9",
              400: "#737373",
              500: "#171717",
              600: "#131011",
              700: "#100B0C",
              800: "#0D0708",
              900: "#0B0406",
            },
            primary: {
              100: "#EFFEFE",
              200: "#DFFBFE",
              300: "#CFF6FC",
              400: "#C2EEFA",
              500: "#AEE3F8",
              600: "#7FB6D5",
              700: "#578CB2",
              800: "#37648F",
              900: "#214777",
              DEFAULT: "#AEE3F8",
              foreground: "#171717",
            },

            secondary: {
              100: "#FEFEFE",
              200: "#FEFEFE",
              300: "#FDFDFD",
              400: "#FCFCFB",
              500: "#FBFBFA",
              600: "#D7D7B6",
              700: "#B4B47D",
              800: "#91914F",
              900: "#787830",
              DEFAULT: "#40A2D8",
              foreground: "#171717",
            },
          },
        },
      },
    }),
  ],
};
