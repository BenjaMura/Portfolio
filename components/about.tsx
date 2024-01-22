"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const { ref } = useSectionInView("Acerca");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-10 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="acerca"
    >
      <SectionHeading>{t("about1")}</SectionHeading>
      <p>👨‍💻 {t("about2")}</p>
      <p>🤝 {t("about3")}</p>
      <p>💡 {t("about4")}</p>
      <p>🚀 {t("about5")}</p>
      <p>🏃 {t("about6")}</p>
    </motion.section>
  );
}
