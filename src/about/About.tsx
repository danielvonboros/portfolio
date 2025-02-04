import {
  Accordion,
  AccordionDetails,
  Box,
  Typography,
  AccordionSummary,
  Link,
  Button,
  SxProps,
  Theme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { theme } from "../assets/theme";

const About = () => {
  const [expanded, setExpanded] = useState<string | false>("experience");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      console.log(event);
    };

  const sharedAccordionStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "primary.main",
    borderTop: `2px solid ${theme.palette.secondary.main}`,
    borderLeft: `2px solid ${theme.palette.secondary.main}`,
  };

  const getAccordionStyle = (
    panel: string,
    initialWidth: string,
    initialMarginLeft: string
  ): SxProps<Theme> => ({
    ...sharedAccordionStyle,
    width: expanded === panel ? "100%" : initialWidth,
    marginLeft: expanded === panel ? 0 : initialMarginLeft,
  });

  return (
    <>
      <Box
        sx={{
          pt: 8,
          minHeight: "768px",
          width: "calc(100% - 3px)",
          borderLeft: `3px solid ${theme.palette.secondary.main}`,
          borderBottom: `3px solid ${theme.palette.secondary.main}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant={"h3"}
          color="text.primary"
          fontSize={50}
          sx={{ mb: 4 }}
        >
          about
        </Typography>
        <Accordion
          elevation={0}
          sx={getAccordionStyle("experience", "100%", "0")}
          expanded={expanded === "experience"}
          onChange={handleChange("experience")}
        >
          <AccordionSummary
            expandIcon={<AddIcon sx={{ color: "secondary.main" }} />}
          >
            <Typography variant={"h3"} color="text.primary" fontWeight={300}>
              experience
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h4" color="text.primary">
              2021/11 - 2024/12
            </Typography>
            <Typography variant="h4" color="text.primary">
              Frontend Developer at Maltego
            </Typography>
            <Typography variant="h4" color="text.primary">
              2020/05 - 2021/02
            </Typography>
            <Typography variant="h4" color="text.primary">
              Project Manager at Bauart Architekten und Ingenieure
            </Typography>
            <Typography variant="h4" color="text.primary">
              2018/02 - 2019/12
            </Typography>
            <Typography variant="h4" color="text.primary">
              Team Lead Construction at Von Rüden Immobilien
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          sx={getAccordionStyle("story", "90%", "10%")}
          expanded={expanded === "story"}
          onChange={handleChange("story")}
        >
          <AccordionSummary
            expandIcon={<AddIcon sx={{ color: "secondary.main" }} />}
          >
            <Typography variant={"h3"} color="text.primary" fontWeight={300}>
              my story
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h4" color="text.primary">
              I am a software engineer with a passion for building digital
              experiences that make a real impact. With 3 years of experience in
              frontend development using React and TypeScript, I specialize in
              crafting intuitive user interfaces and seamless web applications.
            </Typography>
            <Typography variant="h4" color="text.primary">
              Creating has always been a driving force in my life. From
              constructing with LEGO as a child to designing furniture as a
              teenager and ultimately earning a master’s degree in architecture,
              I’ve always been drawn to problem-solving through design. My
              journey into coding began when I sought to improve communication
              and processes on construction sites—what started as a side
              interest quickly evolved into my true career path.
            </Typography>
            <Typography variant="h4" color="text.primary">
              My background in architecture equips me with a strong foundation
              in design thinking, creative problem-solving, and a user-centric
              approach—skills that translate seamlessly into software
              development. I thrive on collaborating with cross-functional
              teams, aligning technical solutions with user needs, and
              delivering products that enhance everyday life.
            </Typography>
            <Typography variant="h4" color="text.primary">
              I am looking for an opportunity in a forward-thinking company with
              an open-minded and supportive team. I bring experience in
              mentoring junior colleagues, managing releases, and working
              efficiently in remote and self-sufficient settings. If you're
              looking for a developer who combines technical expertise with a
              keen eye for design and usability, let’s connect—I’d love to chat!
            </Typography>
            <Link href="/contact">
              <Button>Contact Me!</Button>
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          sx={getAccordionStyle("education", "80%", "20%")}
          expanded={expanded === "education"}
          onChange={handleChange("education")}
        >
          <AccordionSummary
            expandIcon={<AddIcon sx={{ color: "secondary.main" }} />}
          >
            <Typography variant={"h3"} color="text.primary" fontWeight={300}>
              education
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h4" color="text.primary">
              2021/04 - 2021/10
            </Typography>
            <Typography variant="h4" color="text.primary">
              Fullstack Web Development at careerfoundry
            </Typography>
            <Typography variant="h4" color="text.primary">
              2014/10 - 2017/04
            </Typography>
            <Typography variant="h4" color="text.primary">
              Masters degree in Architecture at BHT Berlin
            </Typography>
            <Typography variant="h4" color="text.primary">
              2011/10 - 2014/07
            </Typography>
            <Typography variant="h4" color="text.primary">
              Bachelors degree in Architecture at HS Karlsruhe
            </Typography>
            <Typography variant="h4" color="text.primary">
              2001/09 - 2010/07
            </Typography>
            <Typography variant="h4" color="text.primary">
              High School Diploma at Elisabeth-von-Thadden-Schule Heidelberg
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};
export default About;
