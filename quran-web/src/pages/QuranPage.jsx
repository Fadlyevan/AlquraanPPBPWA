import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { quranAPI } from '../services/api';

export const QuranPage = () => {
  const [surahList, setSurahList] = useState([]);
  const [filteredSurah, setFilteredSurah] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSurah();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredSurah(surahList);
    } else {
      const filtered = surahList.filter(surah =>
        surah.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        surah.name_no_diacratic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        surah.id.toString().includes(searchTerm)
      );
      setFilteredSurah(filtered);
    }
  }, [searchTerm, surahList]);

  const fetchSurah = async () => {
    try {
      setLoading(true);
      const data = await quranAPI.getAllSurah();
      // Sort by id ascending
      const sortedData = data.sort((a, b) => a.id - b.id);
      setSurahList(sortedData);
      setFilteredSurah(sortedData);
    } catch (error) {
      setError('Gagal memuat data Quran. Pastikan API backend berjalan.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Quran...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20 md:pb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Header */}
        <div className="mb-6 sm:mb-8 md:mb-10 text-center md:text-left fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-3">📖 Al-Quran</h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">Pilih surah untuk membaca Al-Quran</p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
            <button
              onClick={fetchSurah}
              className="ml-4 underline font-semibold hover:no-underline"
            >
              Coba Lagi
            </button>
          </div>
        )}

        {/* Search */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Cari surah (nama atau nomor)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Surah List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {filteredSurah.length > 0 ? (
            filteredSurah.map((surah) => (
              <Link
                key={surah.id}
                to={`/quran/${surah.id}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-4 sm:p-5 md:p-6 cursor-pointer border-l-4 border-primary hover:border-secondary transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex-1 pr-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-1 leading-tight">{surah.name}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{surah.name_no_diacratic}</p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white rounded-lg font-bold text-xs sm:text-sm">
                    {surah.id}
                  </div>
                </div>
                <div className="flex items-center text-gray-600 text-xs sm:text-sm">
                  <span className="mr-1">📄</span>
                  <span>{surah.ayah_count} Ayat</span>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12 sm:py-16">
              <div className="text-5xl sm:text-6xl mb-4">🔍</div>
              <p className="text-gray-500 text-base sm:text-lg">Tidak ada surah yang ditemukan</p>
            </div>
          )}
        </div>

        {filteredSurah.length > 0 && (
          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-block bg-white rounded-lg shadow-sm px-4 sm:px-6 py-2 sm:py-3">
              <p className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">
                Menampilkan <span className="text-primary font-bold">{filteredSurah.length}</span> dari <span className="text-primary font-bold">114</span> Surah
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
