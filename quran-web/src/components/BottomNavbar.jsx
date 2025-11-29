import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const BottomNavbar = () => {
  const location = useLocation();
  const { user } = useAuth();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', icon: '🏠', label: 'Home' },
    { path: '/quran', icon: '📖', label: 'Quran' },
    { path: '/juz', icon: '📚', label: 'Juz' },   // ✅ TAMBAH JUZ
    { path: '/sejarah', icon: '🕋', label: 'Sejarah' },
    { path: '/about', icon: 'ℹ️', label: 'About' },
    user
        ? { path: '/profil', icon: '👤', label: 'Profil' }
        : { path: '/login', icon: '👤', label: 'Login' },
  ];

  return (
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-40 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-around items-center h-16">
            {navItems.map((item) => (
                <Link
                    key={item.path}
                    to={item.path}
                    className={`flex flex-col items-center justify-center w-full h-full transition-all duration-200 ${
                        isActive(item.path)
                            ? 'text-primary border-t-4 border-primary bg-primary bg-opacity-5'
                            : 'text-gray-500 hover:text-primary hover:bg-gray-50'
                    }`}
                >
                  <span className="text-xl mb-0.5">{item.icon}</span>
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
            ))}
          </div>
        </div>
      </nav>
  );
};
