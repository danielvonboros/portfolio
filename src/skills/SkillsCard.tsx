import { Box, Tooltip, Typography } from "@mui/material";

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
    <Tooltip title={skill.description}>
      <Box
        sx={{
          minWidth: "100px",
          maxHeight: "200px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          m: 2,
        }}
      >
        <Box sx={{ width: "50px", height: "50px" }}>
          <img src={skill.image} alt={skill.title} width="100%" height="100%" />
        </Box>
        <Typography>{skill.title}</Typography>
      </Box>
    </Tooltip>
  );
};

export default SkillsCard;
