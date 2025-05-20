import {
  Box,
  Image,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import type { Project } from "../../data/projects";
import { useTranslation } from "react-i18next";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const { t } = useTranslation();

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      boxShadow="lg"
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.800", "white")}
      transition="all 0.3s"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "xl",
      }}
      cursor="pointer"
    >
      <Image
        src={`images/${project.image}`}
        alt={project.title}
        borderRadius="lg"
        objectFit="cover"
        w="100%"
        h="250px"
      />
      <VStack align="start" spacing={3} mt={4}>
        <Text fontSize="2xl" fontWeight="bold">
          {project.title}
        </Text>
        <Text fontSize="md" color={useColorModeValue("gray.600", "gray.300")}>
          {t(`projects.${project.key}`)}
        </Text>
        <Link
          href={project.url}
          color="teal.400"
          fontWeight="bold"
          fontSize="lg"
          isExternal
          _hover={{ textDecoration: "underline", color: "teal.500" }}
        >
          {t(`projects.projectsButton`)} →
        </Link>
      </VStack>
    </Box>
  );
};

export default ProjectCard;
