import { Paper, styled } from "@mui/material";

interface ProjectCardItemProps {
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ProjectCardItem = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "isHovered",
})<ProjectCardItemProps & { isHovered: boolean }>(({ theme, isHovered }) => ({
  elevation: 0,
  minHeight: "350px",
  width: "280px",
  padding: 15,
  margin: 2,
  border: `1px solid ${theme.palette.secondary.main}`,
  backgroundColor: isHovered
    ? theme.palette.primary.main
    : theme.palette.secondary.main,
  color: isHovered ? theme.palette.secondary.main : theme.palette.primary.main,
  "&.MuiTypography-root, &.MuiButton-root, &.MuiLink-root": {
    color: "inherit",
    transition: "color 0.3s",
  },
  "&:hover": { cursor: "pointer" },
}));

export default ProjectCardItem;
