"use client";

import React from "react";
import Link from "next/link";
import { FaArrowUpLong } from "react-icons/fa6";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function UpToHome() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <Link
      href="#home"
      className="fixed bottom-5 left-5 bg-amber-200 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-white dark:bg-opacity-50"
      onClick={() => {
        setActiveSection("Home");
        setTimeOfLastClick(Date.now());
      }}
    >
      <button>
        <FaArrowUpLong />
      </button>
    </Link>
  );
}
