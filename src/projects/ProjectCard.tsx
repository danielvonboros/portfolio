import { Box, Button, Link, Paper, Typography } from "@mui/material";
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
