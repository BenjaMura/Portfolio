import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import rickandmortyImg from "@/public/RickandMorty.png";
import countriesImg from "@/public/Countries.png";
import blackgroupdesignImg from "@/public/BlackGroupDesign.png"
import { techsImgs } from "@/public/techs/indexTechs";

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
    url: "https://raw.githubusercontent.com/BenjaMura/Rick_and_Morty/main/Client/src/img/RickAndMortyDemo.mp4",
  },
  {
    title: "Countries",
    description:
      "Single Page Application using the technologies seen in the bootcamp, put into practice basic style and design resources, affirm and connect the concepts learned, learn best practices, learn and practice the GIT workflow, use and practice testing.",
    tags: ["Javascript", "Node.js", "HTML", "CSS", "React", "Redux", "Vite",  "Express", "PostgreSQL", "Jest"],
    imageUrl: countriesImg,
    url: "https://vimeo.com/871597606",
  },
  {
    title: "Black Group Design",
    description:
      "Single page application using technologies: Javascript, HTML, CSS, React, Redux, Vite, Node, Express and Sequelize.      Implementing styling and design resources (UX:UI), local and cloud storage, email notifications, payment gateway, password protection and recovery, third party authentication, data persistence, logical deletion, administrator panel.",
    tags: ["Javascript", "Node.js", "HTML", "CSS", "React", "Redux", "Vite",  "Express", "PostgreSQL", "JWT", "Bcrypt", "Bootstrap", "Styled-Components", "Chart.js", "Handsontable", "MercadoPago", "Multer-Storage-Cloudinary", "Nodemailer", "Passport-Google-Oauth20"],
    imageUrl: blackgroupdesignImg,
    url: "https://vimeo.com/886944581",
  }
] as const;

export const skillsData = [
  {
    name: "JavaScript",
    image: techsImgs[0],
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    image: techsImgs[1],
    url: "https://www.typescriptlang.org",
  },
  {
    name: "HTML",
    image: techsImgs[2],
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    image: techsImgs[3],
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "React",
    image: techsImgs[4],
    url: "https://react.dev",
  },
  {
    name: "Redux",
    image: techsImgs[5],
    url: "https://redux.js.org",
  },
  {
    name: "Vite",
    image: techsImgs[6],
    url: "https://vitejs.dev",
  },
  {
    name: "Nextjs",
    image: techsImgs[7],
    url: "https://nextjs.org",
  },
  {
    name: "Nodejs",
    image: techsImgs[8],
    url: "https://nodejs.org",
  },
  {
    name: "Nestjs",
    image: techsImgs[9],
    url: "https://nestjs.com",
  },
  {
    name: "Expressjs",
    image: techsImgs[10],
    url: "https://expressjs.com",
  },
  {
    name: "PostgreSQL",
    image: techsImgs[11],
    url: "https://www.postgresql.org",
  },
  {
    name: "MySQL",
    image: techsImgs[12],
    url: "https://www.mysql.com",
  },
  {
    name: "Jest",
    image: techsImgs[13],
    url: "https://jestjs.io",
  },
  {
    name: "Tailwind",
    image: techsImgs[14],
    url: "https://tailwindcss.com",
  },
  {
    name: "Postman",
    image: techsImgs[15],
    url: "https://www.postman.com",
  },
  {
    name: "Npm",
    image: techsImgs[16],
    url: "https://www.npmjs.com",
  },
  {
    name: "Git",
    image: techsImgs[17],
    url: "https://git-scm.com",
  },
  {
    name: "Vercel",
    image: techsImgs[18],
    url: "https://vercel.com",
  },
  {
    name: "Render",
    image: techsImgs[19],
    url: "https://render.com",
  },
  {
    name: "Figma",
    image: techsImgs[20],
    url: "https://www.figma.com",
  },
  {
    name: "FramerMotion",
    image: techsImgs[21],
    url: "https://www.framer.com",
  },
  {
    name: "VisualStudioCode",
    image: techsImgs[22],
    url: "https://code.visualstudio.com",
  },
] as const;
