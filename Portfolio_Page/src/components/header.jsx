import React, { useState } from 'react';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setOpenMenu(false);
    }
  };

  return (
    <header className="fixed w-full z-50 bg-gray-50 backdrop-blur-sm bg-opacity-90 py-4 px-6 flex items-center justify-between shadow-sm text-gray-800">
      <div className="text-xl font-bold cursor-pointer text-gray-800">Sebastian Wijnroks</div>
      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8">
        <button onClick={() => handleScroll('hero')} className="hover:underline focus:outline-none text-gray-800">Home</button>
        <button onClick={() => handleScroll('company')} className="hover:underline focus:outline-none text-gray-800">Laufbahn</button>
        <button onClick={() => handleScroll('projects')} className="hover:underline focus:outline-none text-gray-800">Projekte</button>
        <button onClick={() => handleScroll('works')} className="hover:underline focus:outline-none text-gray-800">Arbeiten</button>
        <button onClick={() => handleScroll('contact')} className="hover:underline focus:outline-none text-gray-800">Kontakt</button>
      </nav>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button 
          className="focus:outline-none text-gray-800" 
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? 'Close' : 'Menu'}
        </button>
      </div>
      {/* Mobile Menu */}
      {openMenu && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 flex flex-col items-start p-4 space-y-4 md:hidden">
          <button onClick={() => handleScroll('hero')} className="hover:underline text-left focus:outline-none text-gray-800">Home</button>
          <button onClick={() => handleScroll('company')} className="hover:underline text-left focus:outline-none text-gray-800">Laufbahn</button>
          <button onClick={() => handleScroll('projects')} className="hover:underline text-left focus:outline-none text-gray-800">Projekte</button>
          <button onClick={() => handleScroll('works')} className="hover:underline text-left focus:outline-none text-gray-800">Arbeiten</button>
          <button onClick={() => handleScroll('contact')} className="hover:underline text-left focus:outline-none text-gray-800">Kontakt</button>
        </div>
      )}
    </header>
  );
}

export default Header;
