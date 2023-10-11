"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <a href='#about'>
    <div className='my-10 h-20 w-7 p-1 rounded-3xl border-4 flex justify-center border-amber-200 dark:border-amber-500 dark:border-opacity-20 hidden sm:block'>
    <motion.div
      className="bg-amber-400 h-3 w-3 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: [0, 50, 0] }}
      transition={{
        delay: 0.125,
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
      }}
    ></motion.div>
    </div>
    </a>
  );
}
