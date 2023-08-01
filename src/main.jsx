import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bg: "brand.100",
      },
    },
  },
  colors: {
    brand: {
      100: "#477FEB",
      200: "#dde9ff",
    },
  },
  fonts: {
    heading: `'Manrope Variable', sans-serif`,
    body: `'Manrope Variable', sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
