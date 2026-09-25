import {
  BookOpen, BriefcaseBusiness, Compass, FolderKanban, GraduationCap,
  Languages, Layers3, Lightbulb, type LucideIcon,
} from "lucide-react";

export type Section = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const sections: Section[] = [
  { slug: "experiences", title: "Experiences", description: "The roles and responsibilities that shaped your career.", icon: BriefcaseBusiness },
  { slug: "projects", title: "Projects", description: "A home for the work you are proud to show.", icon: FolderKanban },
  { slug: "skills", title: "Skills & Knowledge", description: "The strengths and capabilities behind your work.", icon: Lightbulb },
  { slug: "tools", title: "Tools", description: "The software, platforms, and methods in your toolkit.", icon: Layers3 },
  { slug: "education", title: "Education", description: "Your formal learning and continuing education.", icon: GraduationCap },
  { slug: "languages", title: "Languages", description: "The languages you use to connect and collaborate.", icon: Languages },
  { slug: "professional-directions", title: "Professional Directions", description: "Where you want to grow and what you want to pursue next.", icon: Compass },
];

export const overview = { slug: "", title: "Overview", icon: BookOpen };
