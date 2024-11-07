import { useState } from "react";
import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import { AppBar, Box, Button, Toolbar } from "@mui/material";

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
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 3 }}>{renderSection()}</Box>
    </>
  );
};

export default App;
