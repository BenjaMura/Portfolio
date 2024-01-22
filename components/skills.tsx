"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { t } = useTranslation();
  const { ref } = useSectionInView(t("header4"));

  return (
    <section
      id={t("header4.1")}
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-10"
    >
      <SectionHeading>{t('skills1')}</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-amber-800">
        {skillsData.map((skill, index) => (
          <a
            href={skill.url}
            key={index}
            target="_blank"
            className="hover:scale-105 active:scale-90"
          >
            <motion.li
              className="bg-amber-100 hover:bg-amber-200 borderBlack rounded-xl px-4 py-3 dark:bg-zinc-400 dark:hover:bg-zinc-300"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <Image
                src={skill.image}
                alt={skill.name}
                title={skill.name}
                width={50}
                height={50}
              />
            </motion.li>
          </a>
        ))}
      </ul>
    </section>
  );
}
