"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const { ref } = useSectionInView(t("header5"));

  return (
    <motion.section
      id={t("header5.1")}
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{t('contact1')}</SectionHeading>

      <p className="text-amber-700 -mt-6 dark:text-amber-50">
      {t('contact2')}{" "}
        <a className="underline" href="mailto:benjaminmuratore1@gmail.com">
          benjaminmuratore1@gmail.com
        </a>{" "}
        {t('contact3')}
      </p>

      <form
        className="mt-3 flex flex-col dark:text-amber"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 text-amber-800 rounded-lg borderBlack dark:bg-amber-50 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder:text-zinc-500"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={t('contact4')}
        />
        <textarea
          className="h-40 my-3 text-amber-800 rounded-lg borderBlack p-4 dark:bg-amber-50 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder:text-zinc-500"
          name="message"
          placeholder={t('contact5')}
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
