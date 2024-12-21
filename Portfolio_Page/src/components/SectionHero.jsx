import React from 'react';



function SectionHero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gray-100"
    >
      {/* Background layers (example shapes, gradients) */}
      <div className="absolute inset-0 flex justify-center items-center">
        {/* Add abstract shapes using gradient backgrounds or imported images */}
        <div className="w-3/4 h-3/4 bg-gradient-to-tr from-purple-400 via-pink-500 to-yellow-300 opacity-75 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-3xl px-4 text-center">
        <h1 className="text-6xl font-semibold mb-4 tracking-wide" style={{fontFamily: 'serif'}}>
          Willkommen bei meinem Portfolio
        </h1>
        <p className="text-lg text-gray-700">
          Ich bin ein junger, motivierter Wirtschaftsinformatiker, welcher sich auf Digitalisierungsaufgaben fokussiert. 
          Mir gefällt die Arbeit im Team und ich liebe Herausforderungen.
        </p>
      </div>
      <div className="absolute bottom-10 z-10">
        <a 
          href="#works"
          className="border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition"
        >
          Finden Sie mehr über mich heraus.
        </a>
      </div>
    </section>
  );
}

export default SectionHero;
