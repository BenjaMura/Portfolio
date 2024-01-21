"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const { ref } = useSectionInView(t("header3"), 0.5);

  return (
    <section id={t("header3.1")} ref={ref} className="scroll-mt-28 mb-10">
      <SectionHeading>{t("projects1")}</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
