import React, { useEffect, useRef, useState } from "react";
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
  Stack,
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const activeSection = sectionRefs.current.findIndex(
        (ref) => ref.current.offsetTop <= scrollPosition + windowHeight / 2
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          p: 0,
          backgroundColor: "primary.main",
        }}
      >
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            borderBottom: "solid 1px #AFE7E9",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h3" sx={{ my: "auto", mx: 4 }}>
            daniel von boros
          </Typography>
          <Stack direction="row">
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
          </Stack>
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
              minHeight: "768px",
              maxWidth: { sm: 1100 },
              p: 0,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {sections.map((section, index) => (
              <Box
                key={section}
                ref={sectionRefs.current[index]}
                sx={{ flexGrow: 1, p: 0 }}
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
