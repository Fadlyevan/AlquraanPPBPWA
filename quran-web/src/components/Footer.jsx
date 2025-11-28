import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-green-800 to-green-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 font-bold text-xl mb-4">
              <span className="text-accent text-3xl">📖</span>
              <span className="text-lg">QuranApp</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Aplikasi Al-Quran digital yang modern, mudah diakses, dan tersedia offline untuk semua Muslim di dunia.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all transform hover:scale-110" aria-label="Facebook">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all transform hover:scale-110" aria-label="Twitter">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all transform hover:scale-110" aria-label="Instagram">
                <span className="text-xl">📷</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-accent text-lg">Menu</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-accent hover:pl-2 transition-all inline-block">🏠 Home</Link></li>
              <li><Link to="/quran" className="text-gray-300 hover:text-accent hover:pl-2 transition-all inline-block">📖 Quran</Link></li>
              <li><Link to="/sejarah" className="text-gray-300 hover:text-accent hover:pl-2 transition-all inline-block">📚 Sejarah</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent hover:pl-2 transition-all inline-block">ℹ️ About</Link></li>
            </ul>
          </div>

          {/* Auth Links */}
          <div>
            <h3 className="font-bold mb-4 text-accent text-lg">Account</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/login" className="text-gray-300 hover:text-accent hover:pl-2 transition-all inline-block">🔐 Login</Link></li>
              <li><Link to="/register" className="text-gray-300 hover:text-accent hover:pl-2 transition-all inline-block">✨ Register</Link></li>
              <li><Link to="/profil" className="text-gray-300 hover:text-accent hover:pl-2 transition-all inline-block">👤 Profile</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-accent text-lg">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <span>📧</span>
                <span>info@quranapp.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>📱</span>
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>🌐</span>
                <span>quranapp.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
          <p className="mb-4 md:mb-0">&copy; 2025 QuranApp. All rights reserved. Made with ❤️ for Muslims worldwide.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-accent transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-all">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
