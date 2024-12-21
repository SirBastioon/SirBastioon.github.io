import React from 'react';
import Job from './Job';
import Education from './Education';

function SectionCompany() {
  return (
    <section 
      id="company" 
      className="min-h-screen bg-gray-100 py-20 px-6 lg:px-16 flex flex-col justify-center"
    >
      <h2 className="text-4xl font-bold mb-8">Meine Laufbahn</h2>
      <div className="max-w-2xl text-gray-700 space-y-4 leading-relaxed">
        <p>
          Our studio is a place where ideas flourish and visions come to life. By merging art, design, and technology, we craft unique experiences that shape the future of digital landscapes.
        </p>
        <p>
          We believe in continuous evolution. Just as the shapes on our homepage shift and combine, we adapt to new technologies and trends. Our team of creators, developers, and thinkers collaborate to deliver exceptional work for our clients worldwide.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-3xl font-bold mb-4">Jobs</h3>
        <Job title="Aushilfe Controlling Securiton AG" period="08.2020-06.2021" description="" />
        <Job title="IT-Verantwortlicher Entlastungsdienst Schweiz - Kanton Bern" period="10.2022-07.2024" description="" />
        <Job title="Fachbereich Digitalisierung" period="10.2024-heute" description="" />
      </div>
      <div className="mt-8">
        <h3 className="text-3xl font-bold mb-4">Education</h3>
        <Education title="Ausbildung Kaufmann EFZ" period="08.2017-07.2020" description="" />
        <Education title="Berufsmatura Wirtschaft" period="08.2020-07.2021" description="" />
        <Education title="Bachelor of Science Digital Business & AI" period="09.2022-heute" description="" />
      </div>
    </section>
  );
}

export default SectionCompany;
