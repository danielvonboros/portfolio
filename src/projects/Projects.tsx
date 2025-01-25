import { Box, Grid2, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <>
    <Box
      sx={{
        pt: 8,
        minHeight: "100vh",
        width: "100%",
        border: "1px solid green",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant={"h3"} color="text.primary">
        Projects Page
      </Typography>
      <Grid2 container columns={3} spacing={1} justifyContent={"center"}>
        <ProjectCard />
      </Grid2>
    </Box>
  </>
);

export default Projects;
