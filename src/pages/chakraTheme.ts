import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: "#FFBA08",
    dark: {
      black: "#000000",
      headingAndText: "#47585B",
      info: "#999999",
    },
    light: {
      white: "#FFFFFF",
      headingAndText: "#F5F8FA",
      info: "#DADADA",
    },
  },
  fonts: {
    heading: `'Poppins', 'sans-serif'`,
    body: `'Poppins', 'sans-serif'`,
  },
  styles: {
    global: {
      body: {
        bg: "#1D1D1D",
      },
    },
  },
});
