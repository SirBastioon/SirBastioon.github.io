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
      <div className="text-xl font-bold cursor-pointer">Sebastian</div>
      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8">
        <button onClick={() => handleScroll('works')} className="hover:underline">Works</button>
        <button onClick={() => handleScroll('company')} className="hover:underline">Company</button>
        <button onClick={() => handleScroll('contact')} className="hover:underline">Contact</button>
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
          <button onClick={() => handleScroll('works')} className="hover:underline text-left">Works</button>
          <button onClick={() => handleScroll('company')} className="hover:underline text-left">Company</button>
          <button onClick={() => handleScroll('contact')} className="hover:underline text-left">Contact</button>
        </div>
      )}
    </header>
  );
}

export default Header;
