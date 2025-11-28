import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProfilPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [bookmarks, setBookmarks] = useState([]);
  const [surahNames, setSurahNames] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    loadBookmarks();
  }, [user, navigate]);

  const loadBookmarks = async () => {
    try {
      const saved = localStorage.getItem('bookmarks');
      const bookmarkIds = saved ? JSON.parse(saved) : [];
      setBookmarks(bookmarkIds);

      // Parse bookmark IDs to get surah names
      const surahMap = {};
      bookmarkIds.forEach(id => {
        const [surahId] = id.split('-');
        if (!surahMap[surahId]) {
          surahMap[surahId] = true;
        }
      });
      setSurahNames(surahMap);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const removeBookmark = (bookmarkId) => {
    const updated = bookmarks.filter(b => b !== bookmarkId);
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20 md:pb-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary via-green-700 to-secondary text-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-lg fade-in">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">👤 Profil Saya</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 break-all mb-4">{user.email}</p>
            <button
              onClick={handleLogout}
              className="inline-block px-6 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md text-sm"
            >
              🚪 Logout
            </button>
          </div>
        </div>

        {/* User Info */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-gray-100">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">Informasi Akun</h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-3 sm:pb-4 border-b gap-1 sm:gap-0">
              <span className="text-gray-700 font-semibold text-sm sm:text-base">Email</span>
              <span className="text-gray-600 text-sm sm:text-base break-all">{user.email}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-3 sm:pb-4 border-b gap-1 sm:gap-0">
              <span className="text-gray-700 font-semibold text-sm sm:text-base">User ID</span>
              <span className="text-gray-600 text-xs sm:text-sm break-all">{user.id}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
              <span className="text-gray-700 font-semibold text-sm sm:text-base">Bergabung Sejak</span>
              <span className="text-gray-600 text-sm sm:text-base">
                {new Date(user.created_at).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Bookmarks */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-5 sm:p-6 md:p-8 border border-gray-100">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">🔖 Ayat Favorit Saya</h2>
          
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
              <p className="text-gray-600">Loading bookmarks...</p>
            </div>
          ) : bookmarks.length > 0 ? (
            <div className="space-y-3">
              {bookmarks.map((bookmark) => {
                const [surahId, ayahNumber] = bookmark.split('-');
                return (
                  <div
                    key={bookmark}
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div>
                      <p className="font-semibold text-primary">
                        Surah {surahId} - Ayat {ayahNumber}
                      </p>
                      <p className="text-sm text-gray-600">ID Bookmark: {bookmark}</p>
                    </div>
                    <button
                      onClick={() => removeBookmark(bookmark)}
                      className="px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition text-sm"
                    >
                      Hapus
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">Anda belum memiliki ayat favorit</p>
              <p className="text-gray-600 text-sm">
                Silakan buka halaman Quran dan tandai ayat favorit Anda dengan mengklik ikon 🔖
              </p>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-gradient-to-br from-primary via-green-700 to-secondary text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-4xl sm:text-5xl font-bold mb-1 sm:mb-2">{bookmarks.length}</p>
            <p className="text-gray-100 text-base sm:text-lg">Ayat Favorit</p>
          </div>
          <div className="bg-gradient-to-br from-secondary via-green-700 to-primary text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-4xl sm:text-5xl font-bold mb-1 sm:mb-2">{Object.keys(surahNames).length}</p>
            <p className="text-gray-100 text-base sm:text-lg">Surah yang Di-bookmark</p>
          </div>
        </div>
      </div>
    </div>
  );
};
