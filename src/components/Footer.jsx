import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-gray-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="animate-fadeInUp">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <h3 className="text-white text-lg font-bold">FINMENT</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional plumbing and appliance repair solutions for Namibia. Your trusted repair partner for all your home appliance needs.
            </p>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
              <span>Quick Links</span>
              <ArrowRight size={16} />
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition relative group">
                  <span className="flex items-center space-x-2">
                    <span>Home</span>
                    <span className="inline-block w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:w-4 transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition relative group">
                  <span className="flex items-center space-x-2">
                    <span>About</span>
                    <span className="inline-block w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:w-4 transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-white transition relative group"
                >
                  <span className="flex items-center space-x-2">
                    <span>Privacy Policy</span>
                    <span className="inline-block w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:w-4 transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition group">
                <div className="p-2 bg-red-500 bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition">
                  <Phone size={16} />
                </div>
                <a href="tel:+264812095555" className="hover:text-red-400">+264 812 0955</a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition group">
                <div className="p-2 bg-emerald-500 bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition">
                  <Mail size={16} />
                </div>
                <span>info@finment.com.na</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition group">
                <div className="p-2 bg-purple-500 bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition">
                  <MapPin size={16} />
                </div>
                <span>Windhoek, Namibia</span>
              </li>
            </ul>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-3 bg-blue-500 bg-opacity-20 rounded-full text-blue-300 hover:text-white hover:bg-opacity-30 transition transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-blue-400 bg-opacity-20 rounded-full text-blue-300 hover:text-white hover:bg-opacity-30 transition transform hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-pink-500 bg-opacity-20 rounded-full text-pink-300 hover:text-white hover:bg-opacity-30 transition transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 border-opacity-50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
            <p className="flex items-center space-x-2">
              <span>&copy; {currentYear} FINMENT Namibia. All rights reserved.</span>
            </p>
            <p>
              <span>Made by Martin Kondjila</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
