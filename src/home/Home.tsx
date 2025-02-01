import { Box, Typography } from "@mui/material";
import { theme } from "../assets/theme";

const Home = () => (
  <>
    <Box
      sx={{
        minHeight: "100vh",
        p: 0,
        pt: 8,
        // calc 100vh - heightAppBar
        width: "calc(100% - 3px)",
        borderRight: `3px solid ${theme.palette.secondary.main}`,
        borderBottom: `3px solid ${theme.palette.secondary.main}`,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          mx: "auto",
        }}
      >
        <Typography
          variant={"h3"}
          color="text.primary"
          sx={{ fontSize: 80, mx: "auto" }}
        >
          hello
        </Typography>
        <Typography sx={{ align: "center" }} variant="h4" color="text.primary">
          My name is Daniel and I am a Software Developer
        </Typography>
        <Typography variant="h4" color="text.primary">
          I have 3 years of experience in the field of
        </Typography>
        <Typography variant="h4" color="text.primary">
          Frontend Software development
        </Typography>
        <Typography sx={{ mx: "auto" }} variant="h4" color="text.primary">
          with React and TypeScript
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "40%" }}>
        <img
          src="IMG_5598.jpeg"
          alt="Daniel"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  </>
);

export default Home;
