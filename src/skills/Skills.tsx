import { Box, Grid2, Typography } from "@mui/material";
import SkillsCard from "./SkillsCard";
import { skillsList } from "./skillsList";

const Skills = () => (
  <>
    <Box
      sx={{
        pt: 8,
        minHeight: "100vh",
        width: "100%",
        border: "1px solid yellow",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant={"h3"} fontSize={50} color="text.primary">
        Skills Page
      </Typography>
      <Grid2 container columns={7} spacing={1} justifyContent={"center"}>
        {skillsList.map((skill) => (
          <SkillsCard skill={skill} />
        ))}
      </Grid2>
    </Box>
  </>
);

export default Skills;
