import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Job from './Job';
import Education from './Education';

function SectionCompany() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="company" 
      className="min-h-screen bg-gray-50 py-10 px-6 lg:px-16 flex flex-col justify-center"
      ref={ref}
    >
      <h2 className="text-4xl font-bold mb-8">Meine Laufbahn</h2>
      <motion.div 
        className="max-w-2xl text-gray-700 space-y-4 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <p>
          Nach meiner Berufsausbildung und darauffolgender Berufsmatur, studiere ich nun Digital Business & AI an der Berner Fachhochschule.
        </p>
        <p>
          Beruflich konnte ich Erfahrungen im Requirements Engineering, Business Analyse sowie Projektmanagement sammeln. Zuerst als Digitalisierungsverantwortlicher beim Entlastungsdienst und nun auch als selbständiger mit apexAI.
        </p>
      </motion.div>
      <motion.div 
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3 className="text-3xl font-bold mb-4">Jobs</h3>
        <Job title="Aushilfe Controlling Securiton AG" period="08.2020-06.2021" description="" />
        <Job title="IT-Verantwortlicher Entlastungsdienst Schweiz - Kanton Bern" period="10.2022-07.2024" description="" />
        <Job title="Fachbereich Digitalisierung" period="10.2024-heute" description="" />
        <Job title="Co-Founder apexAI" period="02.2024-heute" description="" />
      </motion.div>
      <motion.div 
        className="mt-8 mb-4"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h3 className="text-3xl font-bold mb-4">Education</h3>
        <Education title="Ausbildung Kaufmann EFZ" period="08.2017-07.2020" description="" />
        <Education title="Berufsmatura Wirtschaft" period="08.2020-07.2021" description="" />
        <Education title="Bachelor of Science Digital Business & AI" period="09.2022-heute" description="" />
      </motion.div>
    </section>
  );
}

export default SectionCompany;