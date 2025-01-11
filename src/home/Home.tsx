import { Box, Typography } from "@mui/material";

const Home = () => (
  <>
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        border: "1px solid red",
      }}
    >
      <Typography variant={"h3"} color="text.primary">
        Home Page
      </Typography>
    </Box>
  </>
);

export default Home;
