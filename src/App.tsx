import { useState } from "react";
import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import "./App.css";

const App = () => {
  const [currentSection, setCurrentSection] = useState("Home");

  const renderSection = () => {
    switch (currentSection) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Skills":
        return <Skills />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "primary.main",
        }}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{ borderBottom: "solid 1px #AFE7E9" }}
        >
          <Toolbar>
            {["Home", "About", "Projects", "Skills", "Contact"].map(
              (section) => (
                <Button
                  key={section}
                  color="inherit"
                  onClick={() => setCurrentSection(section)}
                >
                  <Typography>{section}</Typography>
                </Button>
              )
            )}
          </Toolbar>
        </AppBar>
        <Container
          maxWidth={false}
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 0, sm: 3 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              maxWidth: { sm: 1024 },
              maxHeight: { sm: 768 },
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ flexGrow: 1, overflow: "auto", p: 3 }}>
              {renderSection()}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default App;
