import { Box, Typography } from "@mui/material";

export interface SkillsList {
  skill: Skill;
}
export interface Skill {
  id: number;
  title: string;
  image: string;
  description: string;
}

const SkillsCard = ({ skill }: SkillsList) => {
  return (
    <Box sx={{ maxWidth: "100px", maxHeight: "200px", overflow: "hidden" }}>
      <Box sx={{ width: "50px", height: "50px" }}>
        <img src={skill.image} alt={skill.title} width="100%" height="100%" />
      </Box>
      <Typography>{skill.title}</Typography>
      <Typography>{skill.description}</Typography>
    </Box>
  );
};

export default SkillsCard;
