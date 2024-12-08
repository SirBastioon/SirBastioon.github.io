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
          CREATE WITH CONNECT
        </h1>
        <p className="text-lg text-gray-700">
          Just like this algorithm, where infinite points create new surfaces and continuously evolve, a single encounter or idea can spark new value.
          Together with our clients, we will keep creating new possibilities.
        </p>
      </div>
      <div className="absolute bottom-10 z-10">
        <a 
          href="#works"
          className="border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition"
        >
          SCROLL DOWN
        </a>
      </div>
    </section>
  );
}

export default SectionHero;
