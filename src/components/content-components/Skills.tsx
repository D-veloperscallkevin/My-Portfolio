import {
  Box,
  Grid,
  Icon,
  Text,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaReact, FaNodeJs, FaDocker, FaGit, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiStripe, SiAuth0 } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact },
  { name: "NodeJS + Express", icon: FaNodeJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Microsoft SQL Server", icon: FaDatabase },
  { name: "Docker", icon: FaDocker },
  { name: "Git", icon: FaGit },
  { name: "Stripe", icon: SiStripe },
  { name: "Auth0 + JWT", icon: SiAuth0 },
];

function Skills() {
  const { t } = useTranslation(["welcome"]);

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={10}
    >
      <Box mb={8}>
        <Text
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          userSelect={"none"}
          minHeight="60px"
          bgGradient="linear(to-r, purple.400, green.500)"
          bgClip="text"
          mb={20}
          textShadow={useColorModeValue(
            "2px 2px 4px rgba(0, 0, 0, 0.3)",
            "none"
          )}
        >
          {t("skills.heading")}
          <Divider borderColor="teal.400" mt={3} />
        </Text>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={12}>
        {skills.map((skill, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              bgGradient="linear(to-r, teal.400, blue.500)"
              p={4} // Agrega padding para hacer visible el gradiente
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={skill.icon} boxSize={16} color="white" />
            </Box>
            <Text userSelect={"none"} mt={4} fontSize="2xl">
              {skill.name}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;
