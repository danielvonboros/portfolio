import { useState } from "react";
import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";

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
      <AppBar position="static">
        <Toolbar>
          {["Home", "About", "Projects", "Skills", "Contact"].map((section) => (
            <Button
              key={section}
              color="inherit"
              onClick={() => setCurrentSection(section)}
            >
              {section}
            </Button>
          ))}
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
    </>
  );
};

export default App;
