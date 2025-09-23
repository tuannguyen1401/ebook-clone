import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="font-semibold text-lg">MyApp</span> &copy; {new Date().getFullYear()}
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
