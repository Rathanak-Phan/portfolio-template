import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 py-8 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div className="footer-section">
            <h2 className="text-xl text-center md:text-left font-bold mb-4 dark:text-gray-200">
              About Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              We are a team of passionate developers building awesome web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h2 className="text-xl text-center md:text-left font-bold mb-4 dark:text-gray-200">
              Quick Links
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-section">
            <h2 className="text-xl text-center md:text-left font-bold mb-4 dark:text-gray-200">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400">Email: info@example.com</p>
            <p className="text-gray-600 dark:text-gray-400">Phone: +123 456 7890</p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-200 py-4 mt-8 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center text-gray-700 dark:text-gray-400">
          &copy; {new Date().getFullYear()} My Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
