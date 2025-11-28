import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { quranAPI } from '../services/api';

export const QuranDetailPage = () => {
  const { id } = useParams();
  const [surah, setSurah] = useState(null);
  const [ayat, setAyat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [bookmarks, setBookmarks] = useState([]);

  const fetchSurahDetail = useCallback(async () => {
    try {
      setLoading(true);
      const data = await quranAPI.getSurahById(id);
      setSurah(data.surah);
      setAyat(data.ayah);
    } catch (error) {
      setError('Gagal memuat detail surah');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchSurahDetail();
    loadBookmarks();
  }, [fetchSurahDetail]);

  const loadBookmarks = () => {
    const saved = localStorage.getItem('bookmarks');
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  };

  const toggleBookmark = (ayahId) => {
    let updated = [...bookmarks];
    if (updated.includes(ayahId)) {
      updated = updated.filter(a => a !== ayahId);
    } else {
      updated.push(ayahId);
    }
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  const isBookmarked = (ayahId) => bookmarks.includes(ayahId);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading surah...</p>
        </div>
      </div>
    );
  }

  if (error || !surah) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error || 'Surah tidak ditemukan'}
        </div>
        <Link to="/quran" className="text-primary hover:underline">
          ← Kembali ke daftar surah
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20 md:pb-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Header */}
        <Link to="/quran" className="inline-flex items-center text-primary hover:text-secondary font-medium mb-4 sm:mb-6 transition-colors duration-200 text-sm sm:text-base">
          <span className="mr-2">←</span>
          <span>Kembali ke daftar surah</span>
        </Link>

        <div className="bg-gradient-to-r from-primary via-green-700 to-secondary text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 mb-6 sm:mb-8 shadow-lg fade-in">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">{surah.name}</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-2 sm:mb-3">{surah.name_no_diacratic}</p>
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 text-xs sm:text-sm md:text-base text-gray-200">
              <span>Surah ke-{surah.id}</span>
              <span>•</span>
              <span>{surah.ayah_count} Ayat</span>
            </div>
          </div>
        </div>

        {/* Ayat List */}
        <div className="space-y-4 sm:space-y-6">
          {ayat.map((ayahItem, index) => {
            const isBasmallah = ayahItem.ayah_number === 0;
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 md:p-8 border border-gray-100"
              >
                {!isBasmallah && (
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-xs sm:text-sm shadow-md">
                        {ayahItem.ayah_number}
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-medium text-gray-600">Ayat {ayahItem.ayah_number}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleBookmark(`${id}-${ayahItem.ayah_number}`)}
                      className={`text-2xl sm:text-3xl transition-all duration-200 transform hover:scale-110 ${
                        isBookmarked(`${id}-${ayahItem.ayah_number}`)
                          ? 'text-yellow-500'
                          : 'text-gray-300 hover:text-yellow-400'
                      }`}
                      aria-label="Bookmark ayat"
                    >
                      🔖
                    </button>
                  </div>
                )}

                {/* Arabic Text */}
                <div className={`bg-gradient-to-r from-primary/5 via-green-50 to-secondary/5 p-4 sm:p-5 md:p-6 rounded-xl mb-4 sm:mb-6 ${isBasmallah ? 'border-0' : 'border-r-4 border-primary'}`}>
                  <p className={`text-xl sm:text-2xl md:text-3xl ${isBasmallah ? 'text-center' : 'text-right'} leading-loose font-serif text-gray-800`}>
                    {ayahItem.text_arabic}
                  </p>
                </div>

                {/* Latin Text */}
                {!isBasmallah && (
                  <p className="text-gray-700 italic text-xs sm:text-sm md:text-base leading-relaxed">
                    {ayahItem.text_no_diacratic}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Link
            to="/quran"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium text-sm sm:text-base"
          >
            Kembali ke Daftar Surah
          </Link>
        </div>
      </div>
    </div>
  );
};
