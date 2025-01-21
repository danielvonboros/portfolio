import { Box, Typography } from "@mui/material";

const Contact = () => (
  <>
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        border: "1px solid purple",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant={"h3"} color="text.primary">
        Contact Me{" "}
      </Typography>
      <Typography variant="h4" color="text.primary">
        Get in Touch
      </Typography>
      <Typography variant="h4" color="text.primary">
        LinkedIN Xing Twitter Email
      </Typography>
    </Box>
  </>
);

export default Contact;
