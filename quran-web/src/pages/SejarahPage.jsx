export const SejarahPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary via-green-700 to-secondary text-white rounded-2xl p-8 md:p-10 mb-8 shadow-lg fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">📚 Sejarah Al-Quran</h1>
          <p className="text-lg md:text-xl text-gray-100">Mengenal lebih dalam tentang kitab suci umat Islam</p>
        </div>

        {/* Content */}
        <div className="space-y-8 bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Definisi Al-Quran</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Al-Quran adalah kitab suci umat Islam yang merupakan kalam Allah SWT yang diwahyukan kepada Nabi Muhammad SAW melalui Malaikat Jibril. Al-Quran terdiri dari 114 surah dengan total 6.236 ayat. Setiap ayat dalam Al-Quran dipercaya oleh umat Islam sebagai firman Allah yang sempurna dan abadi hingga akhir zaman.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Sejarah Pewahyuan Al-Quran</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Nabi Muhammad SAW menerima wahyu untuk pertama kalinya pada bulan Ramadhan, saat beliau berusia 40 tahun. Peristiwa ini terjadi di Gua Hira, di mana Malaikat Jibril datang membawa ayat pertama: "Iqra" (bacalah) dari Surah Al-Alaq (96:1-5).
              </p>
              <p className="leading-relaxed">
                Proses pewahyuan Al-Quran berlangsung selama 23 tahun, terbagi menjadi dua periode:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Periode Mekkah:</strong> 13 tahun, di mana mayoritas surah yang turun berbicara tentang tauhid, akidah, dan nasihat moral</li>
                <li><strong>Periode Madinah:</strong> 10 tahun, di mana surah-surah yang turun lebih banyak membahas hukum-hukum syariat dan tata cara hidup masyarakat</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Struktur dan Pembagian Al-Quran</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Al-Quran memiliki struktur yang sangat terorganisir dengan beberapa sistem pembagian:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/10 p-4 rounded">
                  <h3 className="font-bold text-primary mb-2">Surah dan Ayat</h3>
                  <p className="text-sm">Al-Quran terbagi menjadi 114 surah dengan total 6.236 ayat yang berbeda panjangnya</p>
                </div>
                <div className="bg-secondary/10 p-4 rounded">
                  <h3 className="font-bold text-primary mb-2">Juz dan Hizb</h3>
                  <p className="text-sm">Al-Quran dibagi menjadi 30 juz untuk memudahkan bacaan dalam 30 hari (selama Ramadhan)</p>
                </div>
                <div className="bg-primary/10 p-4 rounded">
                  <h3 className="font-bold text-primary mb-2">Ruku dan Ayat</h3>
                  <p className="text-sm">Setiap surah terbagi menjadi ruku (pembagian untuk keperluan shalat)</p>
                </div>
                <div className="bg-secondary/10 p-4 rounded">
                  <h3 className="font-bold text-primary mb-2">Tahsin dan Tajweed</h3>
                  <p className="text-sm">Aturan khusus dalam melafalkan Al-Quran dengan benar dan indah</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Karakteristik Al-Quran</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-bold text-primary">Kemukjizatan</h3>
                  <p className="text-sm">Al-Quran adalah mukjizat yang diberikan Allah kepada Nabi Muhammad SAW yang tidak akan pernah ditandingi manusia</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-bold text-primary">Keaslian dan Keutuhan</h3>
                  <p className="text-sm">Al-Quran terjaga dengan sempurna sejak masa Nabi Muhammad hingga kini, baik melalui hafalan maupun tulisan</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-bold text-primary">Universalitas</h3>
                  <p className="text-sm">Al-Quran diturunkan untuk seluruh umat manusia di semua waktu dan tempat hingga akhir zaman</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-bold text-primary">Komprehensif</h3>
                  <p className="text-sm">Al-Quran membahas berbagai aspek kehidupan mulai dari aqidah, ibadah, akhlak, muamalat, hingga hukum-hukum syariat</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Manfaat Membaca Al-Quran</h2>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded space-y-3 text-gray-700">
              <p>✨ Meningkatkan keimanan dan ketakwaan kepada Allah SWT</p>
              <p>✨ Menjadi petunjuk dalam kehidupan sehari-hari</p>
              <p>✨ Membersihkan dan menenangkan jiwa</p>
              <p>✨ Meningkatkan pemahaman agama Islam</p>
              <p>✨ Mendapatkan pahala dan berkah dari Allah SWT</p>
              <p>✨ Melindungi dari godaan setan dan penyimpangan</p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Cara Menjaga Al-Quran</h2>
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">
                Sebagai umat Islam, kita diperintahkan untuk menjaga Al-Quran dengan cara:
              </p>
              <ul className="list-decimal pl-6 space-y-2">
                <li>Membacanya dengan khusyu' dan penuh konsentrasi</li>
                <li>Memahami makna dan pesan-pesannya</li>
                <li>Mengamalkan apa yang diperintahkan dalam Al-Quran</li>
                <li>Menghormati dan merawat mushaf (kitab) Al-Quran</li>
                <li>Mengajarkan Al-Quran kepada orang lain khususnya generasi muda</li>
                <li>Menghafal dan mempelajari Al-Quran dengan sungguh-sungguh</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Footer Quote */}
        <div className="mt-12 bg-gradient-to-r from-primary via-green-700 to-secondary text-white rounded-2xl p-8 md:p-10 text-center shadow-lg">
          <p className="text-lg md:text-xl italic font-semibold mb-3 leading-relaxed">
            "Sesungguhnya Al-Quran adalah kalamulloh yang mulia dan padanya terdapat kesempurnaan-kesempurnaan yang menakjubkan"
          </p>
          <p className="text-gray-100 text-sm md:text-base">- Syaikh Muhammad Abduh</p>
        </div>
      </div>
    </div>
  );
};
