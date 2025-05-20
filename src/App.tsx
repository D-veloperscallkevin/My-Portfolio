import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import "./config/i18next.config.js";
import theme from "../src/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout />
    </ChakraProvider>
  );
}

export default App;
