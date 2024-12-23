import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function SectionProjects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Zeit Management Tool",
      description: "Unterstützung bei der Implementierung eines Zeiterfassungstools für 250 Mitarbeiter. Übersetzung der Zeitlogik des Unternehmens ins System",
    },
    {
      title: "Server Migration zu Azure Server",
      description: "Migration der alten Server auf Azure Server, inklusive ERP-System",
    },
    {
      title: "Verbesserung der Arbeitsumgebung für Mitarbeitende",
      description: "Vom alten Remote-Desktop, basierned auf Windows 8, auf Windows 11 umgestellt, mit grosser Verbesserung der Latenzzeiten.",
    },
    {
      title: "Microsoft Teams Implementierung",
      description: "Einführung von Microsoft Teams für die interne Kommunikation und Zusammenarbeit, sowie externe Telefonie.",
    },
    {
      title: "Prozess Automationen",
      description: "Implementierung verschiedener Automationen im Kernprozess, womit die Administration 25 Minuten Zeit pro Kunde spart.",
    },
  ];

  return (
    <section 
      id="projects" 
      className="min-h-screen bg-white py-8 px-6 lg:px-16 flex flex-col justify-center"
      ref={ref}
    >
      <h2 className="text-4xl font-bold mb-8">Projekthighlights</h2>
      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            className="overflow-hidden rounded-lg shadow-lg p-4 bg-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default SectionProjects;