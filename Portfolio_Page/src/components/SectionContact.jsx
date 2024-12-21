import React from 'react';

function SectionContact() {
  return (
    <section 
      id="contact" 
      className="min-h-screen bg-white py-20 px-6 lg:px-16 flex flex-col justify-center" // Hintergrundfarbe weiß
    >
      <h2 className="text-4xl font-bold mb-8">Kontakt</h2>
      <div className="max-w-xl space-y-4 text-gray-700">
        <p>Bereit zusammen neue Horizonte zu erreichen?</p>
        <p>Kontakt unter:</p>
        <a 
          href="mailto:sebastian.wij@bluewin.ch" 
          className="text-blue-500 hover:underline"
        >
          sebastian.wij@bluewin.ch
        </a>
      </div>
    </section>
  );
}

export default SectionContact;
