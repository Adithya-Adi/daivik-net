import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({

  colors: {

  },
  fonts: {
    body: "Poppins, sans-serif", 
    heading: "Bungee, sans-serif",
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "bold",
        color: "#fd7736"
      },
    },
  },
});

export default theme;
