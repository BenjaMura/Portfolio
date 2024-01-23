"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-amber-950 dark:text-amber-200 dark:opacity-50">
      <small className="mb-2 block text-xs">&copy; 2023 Benjamín Muratore. Reservados todos los derechos.</small>
      <p className="text-xs px-20">Creado con React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, alojado en Vercel.</p>
    </footer>
  );
}
