import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeMode from '../context/ThemeMode';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prevState => !prevState);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="fixed w-full z-50 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300">
          My React App
        </Link>

        <div className="flex items-center gap-6">
          <button
            className="md:hidden text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
            aria-label="Toggle mobile menu"
            onClick={toggleMobileMenu}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300">Home</Link>
            <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)}>
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300"
              >
                <p>Explore</p>
                <i className={`fa-solid ${isDropdownOpen ? 'fa-angle-right' : 'fa-angle-down'}`}></i>
              </button>
              <div
                className={`absolute left-0 mt-2 w-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-lg rounded-md overflow-hidden ${isDropdownOpen ? 'block' : 'hidden'}`}
                onMouseLeave={() => setTimeout(() => setIsDropdownOpen(false), 200)}
              >
                <ul>
                  <li className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                    <Link to="/skill" className="block px-4 py-2">Skills & Expertise</Link>
                  </li>
                  <li className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                    <Link to="/project" className="block px-4 py-2">Feature Project</Link>
                  </li>
                  <li className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                    <Link to="#" className="block px-4 py-2">Option 3</Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link to="/about" className="hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300">About</Link>
            <Link to="/contact" className="hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300">Contact</Link>
          </nav>

          <ThemeMode />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300 shadow-lg">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link to="/" className="flex gap-3 items-center py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300" onClick={closeMobileMenu}>
                <i className="fa-solid fa-house"></i>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <button onClick={toggleDropdown} className="justify-start items-center gap-3 w-full text-left py-2 px-4 flex hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                <div>
                  <i className="fa-solid fa-compass"></i>
                </div>
                <div className="flex items-center justify-between w-full">
                  <p>Explore</p>
                  <i className={`fa-solid ${isDropdownOpen ? 'fa-angles-right' : 'fa-angles-down'}`}></i>
                </div>
              </button>
              <div className={`bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden ${isDropdownOpen ? 'block' : 'hidden'}`}>
                <ul>
                  <li>
                    <Link onClick={closeMobileMenu} to="/skill" className="block py-2 px-6 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
                      Skill & Expertise
                    </Link>
                    <Link onClick={closeMobileMenu} to="/project" className="block py-2 px-6 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
                      Feature Project
                    </Link>
                    <Link onClick={closeMobileMenu} to="#" className="block py-2 px-6 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
                      Option 3
                    </Link>
                    
                  </li>
                  {/* ... other mobile dropdown items */}
                </ul>
              </div>
            </li>
            <li>
              <Link to="/about" className="flex gap-3 items-center py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300" onClick={closeMobileMenu}>
                <i className="fa-regular fa-address-card"></i>
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex gap-3 items-center py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300" onClick={closeMobileMenu}>
                <i className="fa-solid fa-envelope-open-text"></i>
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;