export interface ProjectProps {
    id: number;
    title: string;
    image: string;
    description: string;
    techStack: string;
    link?:string;
    github?:string;
}

export interface ProjectCardItemProps {
    isHovered: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export interface ProjectCardProps {
    projectData: ProjectProps[];
}