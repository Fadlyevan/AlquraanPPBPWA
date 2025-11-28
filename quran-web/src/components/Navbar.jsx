import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      setMobileMenuOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-primary to-green-800 text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl hover:opacity-80 transition-all transform hover:scale-105">
            <span className="text-accent text-3xl">📖</span>
            <span className="text-lg sm:text-xl">QuranApp</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-white hover:bg-opacity-10 hover:text-accent transition-all">
              🏠 Home
            </Link>
            <Link to="/quran" className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-white hover:bg-opacity-10 hover:text-accent transition-all">
              📖 Quran
            </Link>
            <Link to="/sejarah" className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-white hover:bg-opacity-10 hover:text-accent transition-all">
              📚 Sejarah
            </Link>
            <Link to="/about" className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-white hover:bg-opacity-10 hover:text-accent transition-all">
              ℹ️ About
            </Link>
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <>
                <Link to="/profil" className="px-5 py-2 rounded-lg text-sm font-medium hover:bg-white hover:bg-opacity-10 transition-all">
                  👤 Profil
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-bold hover:shadow-lg transition-all transform hover:scale-105"
                >
                  🚪 Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="px-5 py-2 rounded-lg text-sm font-medium hover:bg-white hover:bg-opacity-10 transition-all">
                  🔐 Login
                </Link>
                <Link to="/register" className="px-5 py-2 bg-accent text-primary rounded-lg text-sm font-bold hover:bg-yellow-500 hover:shadow-lg transition-all transform hover:scale-105">
                  ✨ Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 slide-in">
            <Link 
              to="/" 
              className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-white hover:bg-opacity-10 hover:text-accent transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              🏠 Home
            </Link>
            <Link 
              to="/quran" 
              className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-white hover:bg-opacity-10 hover:text-accent transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              📖 Quran
            </Link>
            <Link 
              to="/sejarah" 
              className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-white hover:bg-opacity-10 hover:text-accent transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              📚 Sejarah
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-white hover:bg-opacity-10 hover:text-accent transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              ℹ️ About
            </Link>
            <div className="border-t border-white border-opacity-20 pt-3 mt-3 space-y-2">
              {user ? (
                <>
                  <Link 
                    to="/profil" 
                    className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-white hover:bg-opacity-10 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    👤 Profil
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-bold transition-all text-center"
                  >
                    🚪 Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-white hover:bg-opacity-10 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🔐 Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="block px-4 py-3 bg-accent text-primary rounded-lg text-sm font-bold hover:bg-yellow-500 transition-all text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ✨ Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
