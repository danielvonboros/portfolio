import { Box, Typography } from "@mui/material";

export interface Skill {
  id: number;
  title: string;
  image: string;
  description: string;
}

const SkillsCard = ({ skill }: Skill) => {
  return (
    <Box>
      <Box sx={{ width: "50px", height: "50px" }}>
        <img src={skill.image} alt={skill.title} width="100%" height="100%" />
      </Box>
      <Typography>{skill.title}</Typography>
      <Typography>{skill.description}</Typography>
    </Box>
  );
};

export default SkillsCard;
