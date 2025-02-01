import { Box, Link, Stack, Typography } from "@mui/material";
import { theme } from "../assets/theme";
import { contactList } from "./contactList";

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
      <Stack direction="row" spacing={2}>
        {contactList.map((item) => (
          <Box key={item.id}>
            <Link href={item.link} target="_blank" rel="noreferrer">
              <Box sx={{ height: "50px", width: "50px" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  width="100%"
                  height="100%"
                />
              </Box>
              <Typography variant="h4" color="text.primary">
                {item.title}
              </Typography>
            </Link>
          </Box>
        ))}
      </Stack>
      <Typography variant="h4" color="text.primary">
        Get in Touch
      </Typography>
    </Box>
  </>
);

export default Contact;
