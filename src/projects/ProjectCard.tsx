import { Box, Link, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { projectData } from "./projectData";

const ProjectCardItem = styled(Paper, {
  shouldForwardProp: (prop) =>
    prop !== "hoverBackgroundColor" && prop !== "hoverColor",
})(({ theme, hoverBackgroundColor, hoverColor }) => ({
  elevation: 0,
  minHeight: "350px",
  width: "280px",
  backgroundColor: theme.palette.primary.main,
  padding: 15,
  margin: 2,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: "15px",
  "&:hover": {
    backgroundColor: hoverBackgroundColor || theme.palette.secondary.main,
    color: hoverColor || theme.palette.primary.main,
  },
}));

const ProjectCard = ({ props }) => {
  if (projectData) {
    return projectData.map((project) => (
      <ProjectCardItem
        {...props}
        key={project.id}
        sx={{
          "&:hover": {
            boxShadow: 20,
            cursor: "pointer",
          },
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          {project.title}
        </Typography>
        <img src={project.image} alt={project.title} />
        <Typography>{project.description}</Typography>
        <Typography>{project.techStack}</Typography>
        <Link sx={{ color: "secondary.main" }} href={project.link}>
          Link
        </Link>
      </ProjectCardItem>
    ));
  } else {
    return <Box>Project Example</Box>;
  }
};

export default ProjectCard;
