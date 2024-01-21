"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="mb-10 px-4 text-center text-amber-950 dark:text-amber-200 dark:opacity-50">
      <small className="mb-2 block text-xs">&copy; {t("footer1")}</small>
      <p className="text-xs px-20">{t("footer2")}</p>
    </footer>
  );
}
