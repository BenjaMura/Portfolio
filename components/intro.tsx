"use client";

import Image from "next/image";
import React from "react";
import waveImage from "@/public/Wave.gif";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Inicio", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="inicio"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/BenjaMura.jpg"
              alt="Benjamin"
              width="200"
              height="200"
              priority={true}
              className="h-30 w-30 -mt-7 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="flex items-center justify-center">
          <Image src={waveImage} alt="Wave" width={40} height={40} />
        </span>
        Hola! Mi nombre es<span className="font-bold"> Benjamín</span>.{" "}
        Soy desarrollador web fullstack.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contacto"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:bg-amber-50 hover:scale-110 active:scale-105 transition borderBlack dark:bg-zinc-600 dark:text-amber-200"
          onClick={() => {
            setActiveSection("Contacto");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contáctame aquí
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:bg-amber-50 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-zinc-600 dark:text-amber-200"
          href="/CV-Muratore-Benjamín-LAT.pdf"
          download
        >
          Descarga mi CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        {/* {t("intro4") === "Descarga mi CV" ? (
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:bg-amber-50 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-zinc-600 dark:text-amber-200"
            href="/CV-Muratore-Benjamín-LAT.pdf"
            download
          >
            {t("intro4")}{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        ) : (
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:bg-amber-50 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-zinc-600 dark:text-amber-200"
            href="/CV-Muratore-Benjamin-ENG.pdf"
            download
          >
            {t("intro4")}{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        )} */}

        <a
          className="bg-white p-4 text-zinc-700 hover:text-amber-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:bg-amber-50 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-zinc-600 dark:text-amber-200"
          href="https://www.linkedin.com/in/benjaminmuratore/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-zinc-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:bg-amber-50 hover:scale-[1.15] hover:text-amber-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-zinc-600 dark:text-amber-200"
          href="https://github.com/BenjaMura"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="bg-white p-4 text-zinc-700 hover:text-amber-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:bg-amber-50 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-zinc-600 dark:text-amber-200"
          href="https://wa.me/5493815182901"
          target="_blank"
        >
          <FaWhatsappSquare />
        </a>
      </motion.div>
    </section>
  );
}
