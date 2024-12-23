import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function SectionContact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="contact" 
      className="min-h-screen bg-white py-20 px-6 lg:px-16 flex flex-col justify-center"
      ref={ref}
    >
      <h2 className="text-4xl font-bold mb-8">Kontakt</h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white p-4 rounded shadow">
          <p className="text-xl font-semibold">E-Mail</p>
          <a 
            href="mailto:sebastian.wij@bluewin.ch" 
            className="text-blue-500 hover:underline"
          >
            sebastian.wij@bluewin.ch
          </a>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-xl font-semibold">LinkedIn</p>
          <a 
            href="https://www.linkedin.com/in/sebastian-wijnroks" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            LinkedIn Profil
          </a>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-xl font-semibold">WhatsApp</p>
          <a 
            href="https://wa.me/DEINE_TELEFONNUMMER" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            Nachricht senden
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default SectionContact;
