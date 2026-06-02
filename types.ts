
export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
}

export interface EducationItem {
    degree: string;
    institution: string;
    duration: string;
    grade: string;
}
