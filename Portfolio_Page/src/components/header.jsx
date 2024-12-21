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
    <header className="fixed w-full z-50 bg-gray-50 backdrop-blur-sm bg-opacity-90 py-4 px-6 flex items-center justify-between shadow-sm">
      <div className="text-xl font-bold cursor-pointer">Sebastian Wijnroks</div>
      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8">
        <button onClick={() => handleScroll('works')} className="hover:underline">Arbeiten</button>
        <button onClick={() => handleScroll('company')} className="hover:underline">Laufbahn</button>
        <button onClick={() => handleScroll('contact')} className="hover:underline">Kontakt</button>
      </nav>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button 
          className="focus:outline-none" 
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? 'Close' : 'Menu'}
        </button>
      </div>
      {/* Mobile Menu */}
      {openMenu && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 flex flex-col items-start p-4 space-y-4 md:hidden">
          <button onClick={() => handleScroll('works')} className="hover:underline text-left">Arbeiten</button>
          <button onClick={() => handleScroll('company')} className="hover:underline text-left">Laufbahn</button>
          <button onClick={() => handleScroll('contact')} className="hover:underline text-left">Kontakt</button>
        </div>
      )}
    </header>
  );
}

export default Header;
