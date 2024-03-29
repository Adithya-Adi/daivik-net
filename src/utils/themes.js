import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark", // Set initial color mode to dark
    useSystemColorMode: false, // Disable automatic system color mode detection
  },
  colors: {
    // Define your custom colors here
    // Example:
    // primary: "#FF6D00",
    // secondary: "#2196F3",
  },
  fonts: {
    // Define your custom fonts here
    // Example:
    // body: "Roboto, sans-serif",
    // heading: "Montserrat, sans-serif",
  },
  components: {
    // Customize specific components here
    // Example:
    // Button: {
    //   // Define button styles
    // },
  },
});

export default theme;
