import React from 'react';
import Resume from '../Document/SRMISTRMP_Mohammad_Saquib_Daiyan.pdf';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saquib34',
      ariaLabel: 'Visit LinkedIn profile'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/saquib34',
      ariaLabel: 'Visit GitHub profile'
    },
    {
      name: 'Resume',
      url: Resume,  // Using the imported Resume file
      ariaLabel: 'View Resume'
    }
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Mohammad Saquib Daiyan. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label={link.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;