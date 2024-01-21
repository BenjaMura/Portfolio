"use client";

import i18n from "@/i18n/i18n";
import React from "react";
import { BsTranslate } from "react-icons/bs";

export default function LanguageSwitch() {
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage).then();
  };

  return (
    <button
      className="fixed bottom-5 right-5 bg-amber-200 w-[3rem] h-[3rem]  backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-white dark:bg-opacity-50"
      onClick={toggleLanguage}
    >
      <BsTranslate />
    </button>
  );
}
