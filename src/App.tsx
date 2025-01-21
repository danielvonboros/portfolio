import React, { useRef, useState } from "react";
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
  const sections = ["Home", "About", "Projects", "Skills", "Contact"];

  const [currentSection, setCurrentSection] = useState("Home");
  const sectionRefs = useRef(sections.map(() => React.createRef()));

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

  const scrollToSection = (index) => {
    sectionRefs.current[index].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Box
        sx={{
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
            {sections.map((section, index) => (
              <Button
                key={section}
                color="inherit"
                onClick={() => scrollToSection(index)}
              >
                <Typography color="text.primary">{section}</Typography>
              </Button>
            ))}
          </Toolbar>
        </AppBar>
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 1, sm: 0 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              minHeight: "100vh",
              maxWidth: { sm: 1024 },
              // maxHeight: { sm: 768 },
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {sections.map((section, index) => (
              <Box
                key={section}
                ref={sectionRefs.current[index]}
                sx={{ flexGrow: 1, p: 3 }}
              >
                {section === "Home" && <Home />}
                {section === "About" && <About />}
                {section === "Projects" && <Projects />}
                {section === "Skills" && <Skills />}
                {section === "Contact" && <Contact />}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default App;
