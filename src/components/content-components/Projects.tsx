import { Box, Heading, Divider, useColorModeValue } from "@chakra-ui/react";
import ProjectList from "./ProjectList";
import { useTranslation } from "react-i18next";

function Projects() {
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
          minHeight="60px"
          userSelect={"none"}
          textShadow={useColorModeValue(
            "2px 2px 4px rgba(0, 0, 0, 0.3)",
            "none"
          )}
        >
          {t("projects.heading")}
        </Heading>
        <Divider borderColor="teal.400" mt={4} />
      </Box>

      <ProjectList />
    </Box>
  );
}

export default Projects;
