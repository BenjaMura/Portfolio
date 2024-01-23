"use client";

// import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

type ProjectProps = (typeof projectsData)[number];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5 * index,
      duration: 3,
    },
  }),
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const { ref } = useSectionInView("Proyectos");
  // const { scrollYProgress } = useScroll({
  //   target: useRef<HTMLDivElement>(null),
  //   offset: ["0 1", "1.33 1"],
  // });
  // const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      // style={{
      //   scale: scaleProgress,
      //   opacity: opacityProgress,
      // }}
      className="group mb-3 sm:mb-8 last:mb-0"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
    >
      <section className="bg-amber-100 max-w-[60rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-amber-200 transition sm:group-even:pl-8 dark:text-amber-200 dark:bg-zinc-700 dark:hover:bg-zinc-600">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-12 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[25rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <a
            className="bg-white hover:bg-amber-500 hover:text-amber-900 mt-1 max-w-[8rem] px-5 py-2 flex text-center rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-zinc-400 dark:text-amber-900 dark:hover:text-amber-500 dark:hover:bg-zinc-700 active:scale-105"
            href={url}
            target="_blank"
          >
            {" "}
            Ver demo
          </a>
          <p className="mt-2 mb-2 leading-relaxed text-amber-700 dark:text-amber-100">
            {description.es}
          </p>
          {/* <p className="mt-2 mb-2 leading-relaxed text-amber-700 dark:text-amber-100">
          {t('project1') === "Ver demo" ? description.es : description.en}
          </p> */}
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-amber-700 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:bg-amber-950 dark:text-amber"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden translate-y-[15%] sm:block top-8 -right-40 w-[28rem] sm:w-[34rem] h-[25rem] rounded-t-lg shadow-2xl
            transition duration-300 ease-in-out
            group-hover:scale-105
            group-hover:translate-x-3
            group-hover:rotate-2

            group-even:translate-x-3
            group-even:rotate-2

            group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
