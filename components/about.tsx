"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
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
      <SectionHeading>Acerca de mí</SectionHeading>
      <p>👨‍💻 Me impulsa la idea de utilizar mis habilidades de programación para crear soluciones significativas e impactantes. Ya sea desarrollando software que mejore la eficiencia, resolviendo problemas del mundo real o contribuyendo a proyectos que marcan la diferencia.</p>
      <p>🤝 Ser parte de una gran comunidad donde podemos aprender de los demás y tener un impacto positivo es algo que valoro y disfruto sin medida. Creo en el importante poder de la colaboración y el intercambio mutuo de conocimientos.</p>
      <p>💡 Resolver problemas y acertijos complejos me produce una gran satisfacción. Mi pensamiento lógico y analítico me permite enfrentar los desafíos de una manera más estructurada para encontrar soluciones creativas. Al mismo tiempo, considero muy importante pensar fuera de lo común para encontrar soluciones únicas y eficientes a los problemas.</p>
      <p>🚀 La naturaleza en constante evolución de la tecnología alimenta mi motivación para aprender constantemente y estar al tanto de las últimas tendencias y avances. Apoyo incondicionalmente el concepto de aprendizaje permanente y acepto con entusiasmo las nuevas tecnologías y marcos.</p>
      <p>🏃 En mi tiempo libre hago ejercicio regularmente. No sólo lo encuentro entretenido sino también como una excelente manera de relajarme después de un largo día de programación.</p>
    </motion.section>
  );
}
