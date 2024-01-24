"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contacto");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <motion.section
      id="contacto"
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
      <SectionHeading>Contáctame</SectionHeading>

      <p className="text-amber-700 -mt-6 dark:text-amber-50">
        Contáctame directamente a{" "}
        <a className="underline" href="mailto:benjaminmuratore1@gmail.com">
          benjaminmuratore1@gmail.com
        </a>{" "}
        o a través de este formulario.
      </p>

      <form
        className="mt-3 flex flex-col dark:text-amber"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Mensaje enviado con éxito!");
          setSenderEmail("");
          setMessage("");
        }}
      >
        <input
          className="h-14 px-4 text-amber-800 rounded-lg borderBlack dark:bg-amber-50 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder:text-zinc-500"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Tu correo electrónico"
          value={senderEmail}
          onChange={(event) => setSenderEmail(event.target.value)}
        />
        <textarea
          className="h-40 my-3 text-amber-800 rounded-lg borderBlack p-4 dark:bg-amber-50 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder:text-zinc-500"
          name="message"
          placeholder="Tu mensaje"
          required
          maxLength={5000}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
