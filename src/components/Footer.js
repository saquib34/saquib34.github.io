// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Mohammad Saquib Daiyan. All rights reserved.</p>
        <div className="mt-4">
          <a href="https://www.linkedin.com/in/saquib34" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
          <a href="https://github.com/saquib34/" className="text-gray-400 hover:text-white mx-2">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;