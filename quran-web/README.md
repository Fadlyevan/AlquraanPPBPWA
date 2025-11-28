# QuranApp - Aplikasi Al-Quran Digital PWA

Aplikasi web progresif (PWA) modern untuk membaca Al-Quran yang dapat diakses offline dengan teknologi terkini.

## 🎯 Fitur Utama

- 📖 **Baca Al-Quran** - Akses lengkap 114 surah dengan 6,236 ayat
- 📱 **Offline Mode** - Baca Quran tanpa koneksi internet
- 🔖 **Bookmark Ayat** - Tandai dan simpan ayat-ayat favorit
- 🔍 **Pencarian** - Cari surah dengan mudah
- 👤 **Personal Account** - Buat akun untuk sinkronisasi data
- 📚 **Sejarah Quran** - Pelajari latar belakang Al-Quran
- ⚡ **Performa Cepat** - Aplikasi ringan dan responsif
- 🎨 **Beautiful UI** - Desain modern dengan Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Backend**: Node.js + Express
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **PWA**: Service Worker + Web App Manifest
- **API Client**: Axios

## 📋 Prerequisites

- Node.js 16+ dan npm
- Git
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Quick Start

### 1. Clone Repository

```bash
cd /home/krisna/Freelance/quran-apps
```

### 2. Setup Backend API

```bash
cd quran-api
npm install
npm start
```

API akan berjalan di `http://localhost:3000`

### 3. Setup Frontend

```bash
cd ../quran-web
npm install
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

## 📁 Project Structure

```
quran-apps/
├── quran-api/              # Backend API (Express)
│   ├── index.js           # Entry point
│   └── package.json       # Dependencies
│
├── quran-import/          # Data import script
│   ├── import.js          # Import data ke Supabase
│   ├── quran.sql          # SQL data
│   └── package.json
│
└── quran-web/             # Frontend React PWA
    ├── src/
    │   ├── components/    # React components
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx
    │   │   └── ProtectedRoute.jsx
    │   ├── pages/        # Page components
    │   │   ├── HomePage.jsx
    │   │   ├── QuranPage.jsx
    │   │   ├── QuranDetailPage.jsx
    │   │   ├── SejarahPage.jsx
    │   │   ├── ProfilPage.jsx
    │   │   ├── LoginPage.jsx
    │   │   ├── RegisterPage.jsx
    │   │   └── AboutPage.jsx
    │   ├── services/     # API & Supabase services
    │   │   ├── api.js
    │   │   └── supabase.js
    │   ├── context/      # React Context
    │   │   └── AuthContext.jsx
    │   ├── App.jsx       # Main app component
    │   └── index.css     # Global styles
    ├── public/
    │   ├── manifest.json # PWA manifest
    │   └── sw.js         # Service worker
    ├── vite.config.js    # Vite config
    ├── tailwind.config.js # Tailwind config
    └── package.json
```

## 🔧 Environment Variables

Buat file `.env` di folder `quran-web`:

```env
VITE_API_URL=http://localhost:3000/api
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_key
```

## 📝 Available Scripts

### Frontend (quran-web)

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm lint
```

### Backend (quran-api)

```bash
# Start API server
npm start
```

## 🌐 Halaman-Halaman

1. **Home** (`/`) - Landing page dengan pengenalan aplikasi
2. **Quran** (`/quran`) - Daftar semua surah
3. **Quran Detail** (`/quran/:id`) - Detail surah dengan ayat-ayatnya
4. **Sejarah** (`/sejarah`) - Sejarah dan informasi Al-Quran
5. **Login** (`/login`) - Form login
6. **Register** (`/register`) - Form registrasi
7. **Profil** (`/profil`) - Profil pengguna (protected route)
8. **About** (`/about`) - Informasi tentang aplikasi

## 🔐 Authentication

- Sign up dengan email dan password
- Login dengan email dan password
- Session management menggunakan Supabase Auth
- Protected routes untuk halaman profil

## 💾 Data Storage

- **Local Storage**: Menyimpan bookmarks ayat favorit
- **Supabase Database**: Menyimpan data user dan preferences
- **Service Worker Cache**: Caching untuk offline access

## 📦 PWA Features

### Manifest
- App name: QuranApp
- Short name: QuranApp
- Icons dan splash screens
- Theme color: #2D5016
- Display mode: Standalone

### Service Worker
- Offline caching
- Network-first strategy untuk API
- Cache-first strategy untuk static assets
- Background sync support

### Installation
- Add to Home Screen (mobile)
- Install as App (desktop)
- Standalone mode

## 🚀 Deployment ke Netlify/Vercel

### Netlify

1. Push code ke GitHub
2. Connect repository di Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Set environment variables di Netlify dashboard
6. Deploy!

### Vercel

1. Push code ke GitHub
2. Import project di Vercel
3. Vercel akan auto-detect Vite setup
4. Set environment variables
5. Deploy!

### Environment Variables untuk Production

```env
VITE_API_URL=https://your-api-domain.com/api
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_KEY=your_anon_key
```

## 📱 Mobile Responsiveness

- Fully responsive design
- Mobile-first approach
- Touch-friendly UI
- PWA for mobile installation

## 🎨 Customization

### Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2D5016',    // Green
      secondary: '#6BAA3D',  // Light Green
      accent: '#D4AF37',     // Gold
    }
  }
}
```

### Fonts

Update `index.css` untuk mengubah font family

## 🐛 Troubleshooting

### API tidak terhubung
- Pastikan API server berjalan di `http://localhost:3000`
- Check VITE_API_URL di `.env`
- Check CORS setting di API

### Data Quran tidak muncul
- Pastikan data sudah diimport ke Supabase
- Check Supabase credentials
- Check network tab di browser DevTools

### Service Worker tidak register
- Check browser console untuk errors
- Clear browser cache
- Pastikan `public/sw.js` ada

### Login tidak bekerja
- Check Supabase credentials
- Pastikan email sudah diverifikasi
- Check network connectivity

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [Supabase Documentation](https://supabase.com/docs)
- [PWA Documentation](https://web.dev/progressive-web-apps/)

## 📄 License

ISC

## 👨‍💻 Author

Muhammad Krisna

## 📞 Support

- Email: info@quranapp.com
- Website: www.quranapp.com

---

**Barakallahu fiik! Semoga aplikasi ini membantu lebih mendekatkan diri dengan Al-Quran. 📖✨**
