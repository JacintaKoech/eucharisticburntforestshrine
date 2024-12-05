import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-shrine-primary">
              Eucharistic Burnt Forest Shrine
            </a>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-shrine-dark hover:text-shrine-primary">
              Home
            </a>
            <a href="/about" className="text-shrine-dark hover:text-shrine-primary">
              About
            </a>
            <a href="/messages" className="text-shrine-dark hover:text-shrine-primary">
              Messages
            </a>
            <a href="/events" className="text-shrine-dark hover:text-shrine-primary">
              Events
            </a>
            <a href="/contact" className="text-shrine-dark hover:text-shrine-primary">
              Contact
            </a>
            <a
              href="/donate"
              className="bg-shrine-secondary text-white px-4 py-2 rounded hover:bg-opacity-90"
            >
              Donate
            </a>
          </div>

          {/* Toggle button for small screens */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 bg-shrine-primary text-white rounded-full focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>

        {/* Dropdown menu for small screens */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-4 bg-gray-50 p-4 rounded shadow-lg">
            <a href="/about" className="text-shrine-dark hover:text-shrine-primary">
              About
            </a>
            <a href="/messages" className="text-shrine-dark hover:text-shrine-primary">
              Messages
            </a>
            <a href="/events" className="text-shrine-dark hover:text-shrine-primary">
              Events
            </a>
            <a href="/contact" className="text-shrine-dark hover:text-shrine-primary">
              Contact
            </a>
            <a
              href="/donate"
              className="bg-shrine-secondary text-white px-4 py-2 rounded hover:bg-opacity-90"
            >
              Donate
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
