import { Box, SimpleGrid } from "@chakra-ui/react";
import { getProjects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const projects = getProjects(); // Aseguramos que los proyectos se generen correctamente

const ProjectList = () => {
  return (
    <Box overflowX="auto" width="95vw" p={10}>
      <SimpleGrid
        minWidth="1200px"
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={6}
      >
        {projects?.length > 0 &&
          projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectList;
