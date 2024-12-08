import React from 'react';


function SectionContact() {
  return (
    <section 
      id="contact" 
      className="min-h-screen bg-white py-20 px-6 lg:px-16 flex flex-col justify-center"
    >
      <h2 className="text-4xl font-bold mb-8">Contact</h2>
      <div className="max-w-xl space-y-4 text-gray-700">
        <p>Ready to create something new together?</p>
        <p>Reach out to us at:</p>
        <a 
          href="mailto:hello@example.com" 
          className="text-blue-500 hover:underline"
        >
          hello@example.com
        </a>
      </div>
    </section>
  );
}

export default SectionContact;
