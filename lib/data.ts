import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import rickandmortyImg from "@/public/RickandMorty.png";
import countriesImg from "@/public/Countries.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  /* {
    name: "Experience",
    hash: "#experience",
  }, */
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated",
    location: "Tucuman, Argentina",
    description:
      "I graduated after 6 months of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full Stack Web Developer",
    location: "Tucuman, Argentina",
    description:
      "I worked as a full stack web developer for ...I worked as a full stack web developer for ...I worked as a full stack web developer for ...",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Web Developer",
    location: "Buenos Aires, Argentina",
    description:
      "I worked as a full stack web developer for ...",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Rick and Morty",
    description:
      "This project consisted of building a web application from the API (https://rickandmortyapi.com/) in which you can search for characters, view character information, add them to favorites, filter and sort them.",
    tags: ["Javascript", "Node.js", "HTML", "CSS", "React", "Redux", "Express", "PostgreSQL"],
    imageUrl: rickandmortyImg,
  },
  {
    title: "Countries",
    description:
      "Single Page Application using the technologies seen in the bootcamp, put into practice basic style and design resources, affirm and connect the concepts learned, learn best practices, learn and practice the GIT workflow, use and practice testing.",
    tags: ["Javascript", "Node.js", "HTML", "CSS", "React", "Redux", "Vite",  "Express", "PostgreSQL", "Jest"],
    imageUrl: countriesImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Redux",
  "Next.js",
  "Vite",
  "Node.js",
  "Nest.js",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Jest",
  "Tailwind",
  "Framer Motion",
  "Git",
  "Postman",
  "Render",
  "Vercel",
] as const;
