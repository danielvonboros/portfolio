import { Box, Button, Link, Typography } from "@mui/material";
import ProjectCardItem from "./ProjectCardItem";
import { projectData } from "./projectData";
import { ProjectProps } from "./projects.types";
import { useState } from "react";

const ProjectCard = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  if (projectData && projectData.length > 0) {
    return projectData.map((project: ProjectProps) => (
      <ProjectCardItem
        key={project.id}
        isHovered={hoveredId === project.id}
        onMouseEnter={() => setHoveredId(project.id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        <Typography variant="h5" fontWeight={300}>
          {project.title}
        </Typography>
        <Box sx={{ height: "190px", width: "280px" }}>
          <img
            src={project.image}
            alt={project.title}
            height={"100%"}
            width={"100%"}
          />
        </Box>
        <Typography>{project.description}</Typography>
        <Typography>{project.techStack}</Typography>
        {project.link ? (
          <Link href={project.link}>
            <Button>
              <Typography variant="h6">Link</Typography>
            </Button>
          </Link>
        ) : null}
        {project.github ? (
          <Link href={project.github}>
            <Button>
              <Typography variant="h6">Github</Typography>
            </Button>
          </Link>
        ) : null}
      </ProjectCardItem>
    ));
  } else {
    return <Box>Project Example</Box>;
  }
};

export default ProjectCard;
