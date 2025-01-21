import { Box, Typography } from "@mui/material";

const About = () => (
  <>
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        border: "1px solid blue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant={"h3"} color="text.primary" sx={{ fontSize: 80 }}>
        about{" "}
      </Typography>
      <Typography variant="h4" color="text.primary">
        I am a software engineer and I bring 3 years of experience in the field
        of Frontend development with React and TypeScript. In my work I follow a
        creative and structured approach. I am a team player and like to
        contribute my work to a team of enthusiastic and driven colleagues, just
        as myself.
      </Typography>
      <Typography variant="h4" color="text.primary">
        I can work self-sufficiently and in a remote setting, I am highly
        skilled in organizing my work and contribute to team efforts. In the
        past I overtook responsibilities for junior colleagues and releases.
      </Typography>
    </Box>
  </>
);

export default About;
