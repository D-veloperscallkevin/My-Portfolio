import {
  Avatar,
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PdfDocument } from "./ReactPdf";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const { t } = useTranslation(["welcome"]);
  const fullText = t("hero.title"); // Traducción dinámica
  const typingSpeed = 80;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <MotionBox
      as="section"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color={useColorModeValue("gray.800", "white")}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      p={10}
      pt="90px"
    >
      <Avatar size="2xl" name="Kevin" src="/images/selfiesazo.jpg" mb={4} />

      <Box mb={6} textAlign="center">
        <MotionHeading
          userSelect={"none"}
          size="2xl"
          bgGradient="linear(to-r, teal.400, blue.500)"
          bgClip="text"
          whiteSpace="nowrap"
          minHeight="60px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          textShadow={useColorModeValue(
            "2px 2px 4px rgba(0, 0, 0, 0.3)",
            "none"
          )}
        >
          {displayText}
          {displayText.length < fullText.length ? (showCursor ? "|" : "") : ""}
        </MotionHeading>
        <Divider borderColor="teal.400" mt={3} />
      </Box>

      <Text
        userSelect={"none"}
        fontSize="xl"
        textAlign="center"
        maxW="800px"
        mt={6}
        mb={5}
      >
        {t("hero.description")}
      </Text>

      <Stack direction={{ base: "column", sm: "row" }} spacing={4} pt={3}>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {t("hero.projectsButton")}
        </Button>

        <PDFDownloadLink document={<PdfDocument />} fileName="kevin_cv.pdf">
          {({ error, loading }) => (
            <Button
              colorScheme={error ? "red" : "blue"}
              size="lg"
              isLoading={loading}
              loadingText="Generando CV..."
              minW="200px" // Fija el ancho del botón para evitar cambios de tamaño
              transition="all 0.2s ease-in-out" // Suaviza cambios bruscos
            >
              {error ? t("hero.cvError") : t("hero.cvButton")}
            </Button>
          )}
        </PDFDownloadLink>
      </Stack>

      <Box w="100%" maxW="500px" mx="auto">
        <Image
          src="/images/Programming-bro.png"
          alt="Ilustración de PC"
          objectFit="contain"
          maxW={"75%"}
          m={"auto"}
        />
      </Box>
    </MotionBox>
  );
}

export default Hero;
