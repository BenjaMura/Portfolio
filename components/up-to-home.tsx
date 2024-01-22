"use client";

import React from "react";
import Link from "next/link";
import { FaArrowUpLong } from "react-icons/fa6";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTranslation } from "react-i18next";
import { SectionName } from "@/lib/types";

export default function UpToHome() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { t } = useTranslation();

  return (
    <Link
      href={t('header1.2')}
      className="fixed bottom-5 left-5 bg-amber-200 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-white dark:bg-opacity-50"
      onClick={() => {
        const sectionName = t("header5") as SectionName;
        setActiveSection(sectionName);
        setTimeOfLastClick(Date.now());
      }}
    >
      <button>
        <FaArrowUpLong />
      </button>
    </Link>
  );
}
