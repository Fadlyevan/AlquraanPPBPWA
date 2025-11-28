import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-green-700 to-secondary py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <div className="text-6xl md:text-7xl mb-6">📖</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Baca Al-Quran
          </h1>
          <p className="text-xl md:text-2xl text-accent font-semibold mb-4">
            Kapan Saja, Dimana Saja
          </p>
          <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Aplikasi Al-Quran digital yang modern, mudah diakses, dan tersedia offline.
          </p>
          <Link
            to="/quran"
            className="inline-block px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Mulai Membaca
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">114</p>
              <p className="text-sm text-gray-600">Surah</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">6236</p>
              <p className="text-sm text-gray-600">Ayat</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">⚡</p>
              <p className="text-sm text-gray-600">Offline</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16 md:py-20 px-4 pb-24 md:pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Fitur Unggulan
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Nikmati berbagai fitur yang memudahkan Anda dalam membaca dan mempelajari Al-Quran
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-bold text-primary mb-2">Responsive</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Akses dari smartphone, tablet, atau desktop dengan tampilan sempurna.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🔖</div>
              <h3 className="text-lg font-bold text-primary mb-2">Bookmark</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tandai ayat favorit dan akses dengan mudah kapan saja.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-primary mb-2">Offline Mode</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Baca Quran tanpa internet dengan data lokal yang cepat.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-bold text-primary mb-2">Pencarian</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cari ayat dengan mudah menggunakan fitur pencarian cepat.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-bold text-primary mb-2">Sejarah</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pelajari sejarah turunnya Al-Quran dan maknanya.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-lg font-bold text-primary mb-2">Akun Personal</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Simpan bookmark dan preferensi di semua perangkat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary via-green-700 to-secondary py-16 md:py-20 px-4 pb-24 md:pb-20">
        <div className="container mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Memulai?
          </h2>
          <p className="text-base md:text-lg mb-8 text-white/90">
            Bergabunglah dengan ribuan Muslim yang membaca Al-Quran dengan QuranApp.
          </p>
          <Link
            to="/quran"
            className="inline-block px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Mulai Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
};
