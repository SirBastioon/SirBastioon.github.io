import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fetchRepositories } from '../fetchRepositories';

function SectionWorks() {
  const [projects, setProjects] = useState([]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    async function getRepositories() {
      try {
        const repos = await fetchRepositories('SirBastioon');
        setProjects(repos);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    }

    getRepositories();
  }, []);

  return (
    <section 
      id="works" 
      className="min-h-screen bg-gray-50 py-20 px-6 lg:px-16"
      ref={ref}
    >
      <h2 className="text-4xl font-bold mb-8">GitHub Contributions</h2>
      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            className="overflow-hidden rounded-lg shadow-lg group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.owner.avatar_url} alt={project.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Repository</a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default SectionWorks;
