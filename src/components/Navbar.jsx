import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-medium sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110 transform duration-300">
              <Zap className="text-white font-bold" size={20} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:block group-hover:scale-105 transition transform duration-300">
              FINMENT
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/privacy-policy"
              className="text-gray-700 hover:text-primary transition relative group"
            >
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a 
              href="tel:+264812095555" 
              className="flex items-center space-x-1 px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
            >
              <span>📞 +264 812 0955</span>
            </a>
          </div>

          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-gradient-to-b from-gray-50 to-white rounded-2xl mt-2">
            <Link
              to="/"
              className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white rounded-lg transition font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white rounded-lg transition font-medium"
            >
              About
            </Link>
            <Link
              to="/privacy-policy"
              className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white rounded-lg transition font-medium"
            >
              Privacy Policy
            </Link>
            <a
              href="tel:+264812095555"
              className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white rounded-lg transition font-medium"
            >
              📞 +264 812 0955
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
