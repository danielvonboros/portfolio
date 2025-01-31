import {
  Accordion,
  AccordionDetails,
  Box,
  Typography,
  AccordionSummary,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import { theme } from "../assets/theme";

const About = () => {
  const [expanded, setExpanded] = useState<string | false>("experience");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Box
        sx={{
          pt: 8,
          minHeight: "100vh",
          width: "calc(100% - 3px)",
          borderLeft: `3px solid ${theme.palette.secondary.main}`,
          borderBottom: `3px solid ${theme.palette.secondary.main}`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h3"} color="text.primary" sx={{ fontSize: 50 }}>
          about
        </Typography>

        <Accordion
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "primary.main",
            width: "100%",
            marginLeft: 0,
          }}
          expanded={expanded === "story"}
          onChange={handleChange("story")}
        >
          <AccordionSummary
            expandIcon={<AddIcon sx={{ color: "secondary.main" }} />}
          >
            <Typography
              variant={"h3"}
              color="text.primary"
              // sx={{ fontSize: 50 }}
            >
              my story
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h4" color="text.primary">
              I am a software engineer and I bring 3 years of experience in the
              field of Frontend development with React and TypeScript. Creating
              things always played a big role in my life. As a child I used to
              play with LEGO bricks, then started crafting furniture as a
              teenager and learned to design buildings in university, where I
              attained my masters-degree in architecture. Coding started as a
              hobby when I began to think about improving communication and
              processes on construction sites and it soon became a serious
              career path. Driven by the idea to make a bigger impact on society
              and the planet, I want to create applications and user interfaces,
              that help people make everyday life easier. I am currently looking
              for a job in a progressive and forward-thinking company in an
              open-minded and supportive team. I am a team player and like to
              contribute my work to a team of enthusiastic and driven
              colleagues, just as myself. I'm sure I can draw your interest in
              my work below, check it out and don't hesitate to get in touch. I
              am thrilled to hearing from you.
            </Typography>
            <Typography variant="h4" color="text.primary">
              I can work self-sufficiently and in a remote setting, I am highly
              skilled in organizing my work and contribute to team efforts. In
              the past I overtook responsibilities for junior colleagues and
              releases.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "primary.main",
            minWidth: "90%",
            marginLeft: "10%",
            borderTop: `2px solid ${theme.palette.secondary.main}`,
            borderLeft: `2px solid ${theme.palette.secondary.main}`,
            borderBottom: 0,
          }}
          expanded={expanded === "education"}
          onChange={handleChange("education")}
        >
          <AccordionSummary
            expandIcon={<AddIcon sx={{ color: "secondary.main" }} />}
          >
            <Typography
              variant={"h3"}
              color="text.primary"
              // sx={{ fontSize: 50 }}
            >
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
              2014/10-2017/04
            </Typography>
            <Typography variant="h4" color="text.primary">
              Masters degree in Architecture at BHT Berlin
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "primary.main",
            minWidth: "80%",
            marginLeft: "20%",
            borderTop: `2px solid ${theme.palette.secondary.main}`,
            borderLeft: `2px solid ${theme.palette.secondary.main}`,
            borderBottom: 0,
          }}
          expanded={expanded === "experience"}
          onChange={handleChange("experience")}
        >
          <AccordionSummary
            expandIcon={<AddIcon sx={{ color: "secondary.main" }} />}
          >
            <Typography
              variant={"h3"}
              color="text.primary"
              // sx={{ fontSize: 50 }}
            >
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
      </Box>
    </>
  );
};
export default About;
