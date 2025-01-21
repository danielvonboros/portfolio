import { Box, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { projectData } from "./projectData";
import { theme } from "../assets/theme";

const ProjectCardItem = styled(Box)(({ theme }) => ({
  minHeight: "350px",
  width: "280px",
  backgroundColor: theme.palette.primary.main,
  padding: 15,
  margin: 2,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: "15px",
}));

const ProjectCard = () => {
  if (projectData) {
    return projectData.map((project) => (
      <ProjectCardItem key={project.id}>
        <Typography variant="h5" fontWeight={600} color="secondary.main">
          {project.title}
        </Typography>
        <img src={project.image} alt={project.title} />
        <Typography color="secondary.main">{project.description}</Typography>
        <Typography color="secondary.main">{project.techStack}</Typography>
        <Link href={project.link}>Link</Link>
      </ProjectCardItem>
    ));
  } else {
    return <Box>Project Example</Box>;
  }
};

export default ProjectCard;
