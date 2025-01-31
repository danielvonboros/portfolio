import { Box, Typography } from "@mui/material";
import { theme } from "../assets/theme";

const Contact = () => (
  <>
    <Box
      sx={{
        pt: 8,
        minHeight: "100vh",
        width: "calc(100% - 3px)",
        borderRight: `3px solid ${theme.palette.secondary.main}`,
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
