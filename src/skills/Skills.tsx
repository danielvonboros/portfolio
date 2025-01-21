import { Box, Typography } from "@mui/material";

const Skills = () => (
  <>
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        border: "1px solid yellow",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant={"h4"} color="text.primary">
        Skills Page
      </Typography>
    </Box>
  </>
);

export default Skills;
