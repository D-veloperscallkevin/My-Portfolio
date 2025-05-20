import {
  Box,
  Heading,
  Text,
  Link,
  Icon,
  VStack,
  Divider,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  const { t } = useTranslation(["welcome"]);

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color={useColorModeValue("gray.800", "white")}
      p={10}
    >
      <Box mb={8}>
        <Heading
          size="2xl"
          textAlign="center"
          bgGradient="linear(to-r, purple.400, green.500)"
          bgClip="text"
          userSelect={"none"}
          textShadow={useColorModeValue(
            "2px 2px 4px rgba(0, 0, 0, 0.3)",
            "none"
          )}
        >
          {t("contact.heading")}
        </Heading>
        <Divider borderColor="teal.400" mt={4} />
      </Box>

      <Text
        userSelect={"none"}
        textAlign="center"
        fontSize="xl"
        mb={8}
        maxW="800px"
      >
        {t("contact.description")}
      </Text>

      <HStack spacing={8} align="start">
        {/* Columna de iconos */}
        <VStack spacing={6}>
          <Icon as={FaLinkedin} boxSize={10} color="teal.300" />
          <Icon as={FaGithub} boxSize={10} color="teal.300" />
          <Icon as={FaEnvelope} boxSize={10} color="teal.300" />
        </VStack>

        {/* Columna de enlaces */}
        <VStack spacing={6} align="start">
          <Link
            href="https://www.linkedin.com/in/kevin-josu%C3%A9-aguilar-ure%C3%B1a-b47601179/"
            isExternal
            fontSize="2xl"
            _hover={{ textDecoration: "underline" }}
          >
            LinkedIn
          </Link>

          <Link
            href="https://github.com/D-veloperscallkevin"
            isExternal
            fontSize="2xl"
            _hover={{ textDecoration: "underline" }}
          >
            GitHub
          </Link>

          <Link
            href="mailto:kevin.aguilaru@gmail.com"
            fontSize="2xl"
            _hover={{ textDecoration: "underline" }}
          >
            {t("contact.emailButton")}
          </Link>
        </VStack>
      </HStack>
    </Box>
  );
}

export default Contact;
