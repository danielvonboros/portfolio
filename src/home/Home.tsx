import { Box, Typography } from "@mui/material";

const Home = () => (
  <>
    <Box
      sx={{
        minHeight: "100vh",
        // calc 100vh - heightAppBar
        width: "100%",
        border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant={"h3"} color="text.primary" sx={{ fontSize: 80 }}>
        hello
      </Typography>
      <Typography variant="h4" color="text.primary">
        My name is Daniel and I am a Software Developer
      </Typography>
      <Typography variant="h4" color="text.primary">
        I have 3 years of experience in the field of Frontend Software
        development
      </Typography>
    </Box>
  </>
);

export default Home;
