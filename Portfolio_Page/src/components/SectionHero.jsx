import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function SectionHero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white"
      ref={ref}
    >
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-3/4 h-3/4 bg-gradient-to-tr from-purple-400 via-pink-500 to-yellow-300 opacity-75 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-3xl px-4 text-center">
        <motion.h1 
          className="text-6xl font-semibold mb-4 tracking-wide" 
          style={{fontFamily: 'serif'}}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          Willkommen bei meinem Portfolio
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Ich bin ein junger, motivierter Wirtschaftsinformatiker, welcher sich auf Digitalisierungsaufgaben fokussiert. 
          Mir gefällt die Arbeit im Team und ich liebe Herausforderungen.
        </motion.p>
      </div>
      <motion.div 
        className="absolute bottom-10 z-10"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <a 
          href="#company"
          className="border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition"
        >
          Finden Sie mehr über mich heraus.
        </a>
      </motion.div>
    </section>
  );
}

export default SectionHero;
