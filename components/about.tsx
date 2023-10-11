"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-10 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        👨‍💻 I'm driven by the idea of using my coding skills to create meaningful
        and impactful solutions. Whether it's developing software that improves
        efficiency, solving real-world problems, or contributing to projects
        that make a difference.
      </p>
      <p>
        🤝 Being part of a big community where we can learn from others and have
        a positive impact is something I value and enjoy beyond measure. I
        believe in the important power of collaboration and the mutual exchange
        of knowledge.
      </p>
      <p>
        💡 Solving complex problems and puzzles gives me a great satisfaction.
        My logical and analytical thinking allows me to face challenges in a
        more structured way to find creative solutions. At the same time, I
        consider it very important to think outside the box to find unique and
        efficient solutions to problems.
      </p>
      <p>
        🚀 The ever-evolving nature of technology fuels my motivation to
        constantly learn and stay on top of the latest trends and advancements.
        I wholeheartedly support the concept of lifelong learning and
        enthusiastically embrace new technologies and frameworks.
      </p>
      <p>
        🏃 In my free time I exercise regularly. I find it not only entertaining
        but also a great way to relax after a long day of programming.
      </p>
    </motion.section>
  );
}
