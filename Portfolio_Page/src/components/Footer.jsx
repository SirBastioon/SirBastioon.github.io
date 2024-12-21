import React from 'react';



function Footer() {
  return (
    <footer className="bg-gray-50 text-sm text-gray-500 text-center py-4 border-t border-gray-200">
      © {new Date().getFullYear()} Sebastian Wijnroks. All rights reserved.
    </footer>
  );
}

export default Footer;
