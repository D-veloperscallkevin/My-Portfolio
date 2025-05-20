import {
  Box,
  Heading,
  Text,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function About() {
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
          userSelect={"none"}
          minHeight="60px"
          bgGradient="linear(to-r, purple.400, green.500)"
          bgClip="text"
          textShadow={useColorModeValue(
            "2px 2px 4px rgba(0, 0, 0, 0.3)",
            "none"
          )}
        >
          {t("about.heading")}
        </Heading>
        <Divider borderColor="teal.400" mt={4} />
      </Box>

      <Text
        mt={10}
        fontSize={{ base: "lg", md: "xl" }}
        lineHeight="tall"
        userSelect={"none"}
        color={useColorModeValue("gray.600", "gray.300")}
        textAlign="justify"
        maxW="800px"
      >
        {t("about.description")}
        <br />
        <br />
        {t("about.backend")}
        <br />
        <br />
        {t("about.focus")}
      </Text>
    </Box>
  );
}

export default About;
