import { Box, Grid2, Typography } from "@mui/material";
import SkillsCard, { Skill } from "./SkillsCard";
import { skillsList } from "./skillsList";
import { theme } from "../assets/theme";

const Skills = () => (
  <>
    <Box
      sx={{
        pt: 8,
        minHeight: "100vh",
        width: "100%",
        borderLeft: `3px solid ${theme.palette.secondary.main}`,
        borderBottom: `3px solid ${theme.palette.secondary.main}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant={"h3"} fontSize={50} color="text.primary">
        Skills Page
      </Typography>
      <Grid2
        container
        columns={7}
        spacing={1}
        justifyContent={"center"}
        sx={{ my: 4 }}
      >
        {skillsList.map((skill: Skill) => (
          <SkillsCard skill={skill} />
        ))}
      </Grid2>
    </Box>
  </>
);

export default Skills;
