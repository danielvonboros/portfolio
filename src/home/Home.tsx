import { Box, Typography } from "@mui/material";
import { theme } from "../assets/theme";

const Home = () => (
  <>
    <Box
      sx={{
        p: 0,
        pt: 8,
        // calc 100vh - heightAppBar
        minHeight: "768px",
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
          sx={{ fontSize: 80, mx: "auto", fontWeight: 500 }}
        >
          Frontend Developer.
        </Typography>

        <Typography sx={{ align: "center" }} variant="h4" color="text.primary">
          I like to craft solid, scalable, and maintainable web applications.
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "40%" }}>
        {" "}
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
