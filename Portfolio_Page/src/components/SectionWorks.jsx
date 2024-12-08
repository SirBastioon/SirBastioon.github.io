import React from 'react';



function SectionWorks() {
  const projects = [
    {
      title: "Project One",
      description: "A unique exploration of color and form.",
      image: "/src/assets/images/work1.jpg"
    },
    {
      title: "Project Two",
      description: "Merging geometry and interaction.",
      image: "/src/assets/images/work2.jpg"
    },
    {
      title: "Project Three",
      description: "A visual narrative evolving over time.",
      image: "/src/assets/images/work3.jpg"
    },
  ];

  return (
    <section 
      id="works" 
      className="min-h-screen py-20 bg-white px-6 lg:px-16"
    >
      <h2 className="text-4xl font-bold mb-8">Works</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg group">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionWorks;
