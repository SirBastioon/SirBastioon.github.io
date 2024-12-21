import React, { useEffect, useState } from 'react';
import { fetchRepositories } from '../fetchRepositories';

function SectionWorks() {
  const [projects, setProjects] = useState([]);

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
      className="min-h-screen bg-gray-50 py-20 px-6 lg:px-16" // Hintergrundfarbe sehr helles Grau
    >
      <h2 className="text-4xl font-bold mb-8">GitHub Contributions und ein Extra</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg group">
            <img src={project.owner.avatar_url} alt={project.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Repository</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionWorks;
