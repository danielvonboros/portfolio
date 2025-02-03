import { Box, Link, Stack, Typography } from "@mui/material";
import { theme } from "../assets/theme";
import { contactList } from "./contactList";

const Contact = () => (
  <>
    <Box
      sx={{
        pt: 8,
        minHeight: "768px",
        width: "calc(100% - 3px)",
        borderRight: `3px solid ${theme.palette.secondary.main}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant={"h3"} color="text.primary" fontSize={50}>
        contact me{" "}
      </Typography>
      <Stack direction="row" spacing={2} sx={{ m: 4 }}>
        {contactList.map((item) => (
          <Box key={item.id}>
            <Link href={item.link} target="_blank" rel="noreferrer">
              <Box
                sx={{
                  height: "50px",
                  width: "50px",
                  mx: "auto",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width="100%"
                  height="100%"
                />
              </Box>
              <Typography variant="h4" color="text.primary" sx={{ mt: 1 }}>
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
