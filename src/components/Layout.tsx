import { Box, Flex, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import About from "./content-components/About";
import Hero from "./content-components/Hero";
import Navbar from "./Navbar";
import Projects from "./content-components/Projects";
import Skills from "./content-components/Skills";
import Contact from "./content-components/Contact";

const Layout = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900"); // Fondo adaptativo
  const textColor = useColorModeValue("gray.800", "white"); // Color del texto

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav" "main"`,
      }}
      gridTemplateRows={{ base: "60px 1fr", md: "60px 1fr" }}
      gridTemplateColumns={{ base: "1fr", md: "1fr" }}
      minH="100vh"
      bg={bgColor}
      color={textColor}
    >
      <GridItem
        area="nav"
        bg={useColorModeValue("teal.500", "gray.800")}
        color="white"
        zIndex="1000"
      >
        <Navbar />
      </GridItem>

      <GridItem area="main" p={4} overflowY="auto" mt={10}>
        <Flex justify="center">
          <Box w="100%" maxW="1200px">
            <Box id="hero" scrollMarginTop="150px">
              <Hero />
            </Box>
            <Box id="about" scrollMarginTop="50px">
              <About />
            </Box>
            <Box id="projects" scrollMarginTop="20px">
              <Projects />
            </Box>
            <Box id="skills" scrollMarginTop="10px">
              <Skills />
            </Box>
            <Box id="contact">
              <Contact />
            </Box>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Layout;
