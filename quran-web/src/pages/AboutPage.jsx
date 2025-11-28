export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary via-green-700 to-secondary text-white rounded-2xl p-8 md:p-10 mb-8 shadow-lg fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">ℹ️ Tentang QuranApp</h1>
          <p className="text-lg md:text-xl text-gray-100">Aplikasi Quran Digital Modern untuk Umat Islam</p>
        </div>

        {/* Content */}
        <div className="space-y-8 bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Visi & Misi</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Visi</h3>
                <p className="leading-relaxed">
                  Menjadi aplikasi Quran digital terdepan yang membawa umat Islam lebih dekat dengan Kalam Allah SWT, dengan teknologi modern yang mudah diakses oleh semua kalangan.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Misi</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Menyediakan platform membaca Al-Quran yang gratis dan mudah diakses</li>
                  <li>Memudahkan umat Islam untuk mendekatkan diri dengan Al-Quran</li>
                  <li>Menyediakan fitur-fitur yang membantu dalam pembelajaran dan pemahaman Al-Quran</li>
                  <li>Menjaga keaslian dan kesempurnaan teks Al-Quran</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Tentang Aplikasi</h2>
            <p className="text-gray-700 leading-relaxed">
              QuranApp adalah aplikasi web progresif (PWA) yang dirancang khusus untuk memudahkan umat Islam membaca dan mempelajari Al-Quran kapan saja dan di mana saja. Aplikasi ini dapat diakses melalui browser web dan dapat diunduh sebagai aplikasi di smartphone Anda.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Dengan antarmuka yang intuitif dan fitur-fitur yang lengkap, QuranApp memberikan pengalaman membaca Al-Quran yang modern namun tetap menjaga kesucian dan kemuliaan kitab suci ini.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Fitur Utama</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-primary mb-2">📖 Baca Al-Quran</h3>
                <p className="text-gray-700 text-sm">Akses lengkap 114 surah dengan 6236 ayat dalam satu platform</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-primary mb-2">🔖 Bookmark Ayat</h3>
                <p className="text-gray-700 text-sm">Tandai dan simpan ayat-ayat favorit untuk dibaca kembali</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-primary mb-2">🔍 Pencarian</h3>
                <p className="text-gray-700 text-sm">Cari surah dengan mudah berdasarkan nama atau nomor</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-primary mb-2">📚 Sejarah Quran</h3>
                <p className="text-gray-700 text-sm">Pelajari latar belakang dan sejarah Al-Quran</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-primary mb-2">👤 Personal Account</h3>
                <p className="text-gray-700 text-sm">Buat akun untuk menyinkronkan data di berbagai perangkat</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-primary mb-2">⚡ Offline Mode</h3>
                <p className="text-gray-700 text-sm">Baca Quran tanpa koneksi internet</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Tim Pengembang</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              QuranApp dikembangkan oleh tim yang berdedikasi untuk memberikan solusi teknologi terbaik bagi umat Islam. Tim kami terdiri dari developer berpengalaman yang memiliki passion dalam mengembangkan aplikasi Islami.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary to-secondary text-white p-6 rounded-lg text-center">
                <p className="text-4xl mb-2">👨‍💻</p>
                <p className="font-bold">Muhammad Fadly Evanto Prabowo</p>
                <p className="text-sm text-gray-200">Lead Developer</p>
              </div>
              <div className="bg-gradient-to-br from-secondary to-primary text-white p-6 rounded-lg text-center">
                <p className="text-4xl mb-2">👨‍💼</p>
                <p className="font-bold">Tim Support</p>
                <p className="text-sm text-gray-200">Customer Success</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Teknologi</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              QuranApp dibangun menggunakan teknologi terkini untuk memberikan performa terbaik:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 p-4 rounded text-center">
                <p className="font-semibold text-primary">React</p>
                <p className="text-xs text-gray-600">Frontend Framework</p>
              </div>
              <div className="bg-gray-100 p-4 rounded text-center">
                <p className="font-semibold text-primary">Tailwind CSS</p>
                <p className="text-xs text-gray-600">UI Styling</p>
              </div>
              <div className="bg-gray-100 p-4 rounded text-center">
                <p className="font-semibold text-primary">Supabase</p>
                <p className="text-xs text-gray-600">Backend & Auth</p>
              </div>
              <div className="bg-gray-100 p-4 rounded text-center">
                <p className="font-semibold text-primary">Vite</p>
                <p className="text-xs text-gray-600">Build Tool</p>
              </div>
              <div className="bg-gray-100 p-4 rounded text-center">
                <p className="font-semibold text-primary">PWA</p>
                <p className="text-xs text-gray-600">Progressive Web App</p>
              </div>
              <div className="bg-gray-100 p-4 rounded text-center">
                <p className="font-semibold text-primary">Node.js</p>
                <p className="text-xs text-gray-600">Backend Server</p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Hubungi Kami</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm">info@quranapp.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm">+62 812 3456 7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">🌐</span>
                <div>
                  <p className="font-semibold">Website</p>
                  <p className="text-sm">www.quranapp.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold">Lokasi</p>
                  <p className="text-sm">Indonesia</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Kebijakan & Syarat</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h3 className="font-bold text-blue-900 mb-2">Privacy Policy</h3>
                <p className="text-blue-800 text-sm">Kami menghormati privasi Anda dan tidak akan membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="font-bold text-green-900 mb-2">Terms of Service</h3>
                <p className="text-green-800 text-sm">Dengan menggunakan aplikasi ini, Anda menyetujui semua syarat dan ketentuan yang berlaku.</p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary via-green-700 to-secondary text-white rounded-2xl p-8 md:p-10 text-center shadow-lg">
          <p className="text-2xl md:text-3xl font-bold mb-4">Berkat Quran, Berkah Hidup</p>
          <p className="text-base md:text-lg text-gray-100">
            Mulai perjalanan spiritual Anda bersama QuranApp hari ini
          </p>
        </div>
      </div>
    </div>
  );
};
