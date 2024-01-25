"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  const links_es = [
    {
      name: "Inicio",
      hash: "#inicio",
    },
    {
      name: "Acerca",
      hash: "#acerca",
    },
    {
      name: "Proyectos",
      hash: "#proyectos",
    },
    {
      name: "Tecnologías",
      hash: "#tecnologías",
    },
    /* {
      name: "Experience",
      hash: "#experience",
    }, */
    {
      name: "Contacto",
      hash: "#contacto",
    },
  ];

  const links_en = [
    {
      name: "Intro",
      hash: "#intro",
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
  ];

  const flag = t("links") === "links_es" ? links_es : links_en;
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  function getKeyForLink(linkHash: string) {
    if (linkHash === "#intro" || linkHash === "#inicio") {
      return "#inicio";
    }
    if (linkHash === "#about" || linkHash === "#acerca") {
      return "#acerca";
    }
    if (linkHash === "#projects" || linkHash === "#proyectos") {
      return "#proyectos";
    }
    if (linkHash === "#skills" || linkHash === "#tecnologías") {
      return "#tecnologías";
    }
    if (linkHash === "#contact" || linkHash === "#contacto") {
      return "#contacto";
    } else {
      return "#inicio";
    }
  }

  function getNameForLink(linkName: string) {
    if (linkName === "Intro" || linkName === "Inicio") {
      return "Inicio";
    }
    if (linkName === "About" || linkName === "Acerca") {
      return "Acerca";
    }
    if (linkName === "Projects" || linkName === "Proyectos") {
      return "Proyectos";
    }
    if (linkName === "Skills" || linkName === "Tecnologías") {
      return "Tecnologías";
    }
    if (linkName === "Contact" || linkName === "Contacto") {
      return "Contacto";
    } else {
      return "Inicio";
    }
  }

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-amber-100 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-zinc-500 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-amber-700 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {flag.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={getKeyForLink(link.hash)}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-amber-950 transition dark:text-amber-50 dark:hover:text-amber-200",
                  {
                    "text-amber-950 dark:text-amber-300":
                    link.name==="Intro" || link.name==="Inicio" ? activeSection === "Inicio":
                    link.name==="About" || link.name==="Acerca" ? activeSection === "Acerca":
                    link.name==="Projects" || link.name==="Proyectos" ? activeSection === "Proyectos":
                    link.name==="Skills" || link.name==="Tecnologías" ? activeSection === "Tecnologías":
                    // link.name==="Experience" || link.name==="Experiencia" && activeSection === "Experiencia",
                    link.name==="Contact" || link.name==="Contacto" ? activeSection === "Contacto":
                    activeSection === link.name,
                  }
                )}
                href={getKeyForLink(link.hash)}
                onClick={() => {
                  link.name==="Intro" || link.name==="Inicio" ? setActiveSection("Inicio"):
                  link.name==="About" || link.name==="Acerca" ? setActiveSection("Acerca"):
                  link.name==="Projects" || link.name==="Proyectos" ? setActiveSection("Proyectos"):
                  link.name==="Skills" || link.name==="Tecnologías" ? setActiveSection("Tecnologías"):
                  // link.name==="Experience" || link.name==="Experiencia" ? setActiveSection("Experiencia"):
                  setActiveSection("Contacto");
                  // setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {getNameForLink(link.name) === activeSection && (
                  <motion.span
                    className="bg-amber-300 rounded-full absolute inset-0 -z-10 dark:bg-zinc-700"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
