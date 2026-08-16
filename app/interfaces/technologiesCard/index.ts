// You can define all your reusable component interfaces here

export interface TechnologiesCardProps {
  technologies: string[];
}

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

// Example of a data type you might need later
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}