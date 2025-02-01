import { Box, Grid2, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { theme } from "../assets/theme";

const Projects = () => (
  <>
    <Box
      sx={{
        pt: 8,
        minHeight: "100vh",
        width: "calc(100% - 3px)",
        borderRight: `3px solid ${theme.palette.secondary.main}`,
        borderBottom: `3px solid ${theme.palette.secondary.main}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant={"h3"} color="text.primary">
        Projects Page
      </Typography>
      <Grid2
        container
        columns={3}
        spacing={1}
        justifyContent={"center"}
        sx={{ my: 4 }}
      >
        <ProjectCard />
      </Grid2>
    </Box>
  </>
);

export default Projects;
