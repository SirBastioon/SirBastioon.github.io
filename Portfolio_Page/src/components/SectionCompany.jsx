import React from 'react';



function SectionCompany() {
  return (
    <section 
      id="company" 
      className="min-h-screen bg-gray-100 py-20 px-6 lg:px-16 flex flex-col justify-center"
    >
      <h2 className="text-4xl font-bold mb-8">Company</h2>
      <div className="max-w-2xl text-gray-700 space-y-4 leading-relaxed">
        <p>
          Our studio is a place where ideas flourish and visions come to life. By merging art, design, and technology, we craft unique experiences that shape the future of digital landscapes.
        </p>
        <p>
          We believe in continuous evolution. Just as the shapes on our homepage shift and combine, we adapt to new technologies and trends. Our team of creators, developers, and thinkers collaborate to deliver exceptional work for our clients worldwide.
        </p>
      </div>
      <div className="text-red-500">If this is red, Tailwind works!</div>

    </section>
  );
}

export default SectionCompany;
