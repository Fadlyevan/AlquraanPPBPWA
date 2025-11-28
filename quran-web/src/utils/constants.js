/**
 * Application Constants
 */

// App Information
export const APP_NAME = 'QuranApp';
export const APP_VERSION = '1.0.0';
export const APP_DESCRIPTION = 'Aplikasi Al-Quran Digital PWA';

// API Configuration
export const API_TIMEOUT = 10000; // 10 seconds

// Quran Constants
export const TOTAL_SURAH = 114;
export const TOTAL_AYAT = 6236;

// Local Storage Keys
export const STORAGE_KEYS = {
  BOOKMARKS: 'quran_bookmarks',
  PREFERENCES: 'quran_preferences',
  LAST_VISITED: 'quran_last_visited',
  USER_SESSION: 'quran_user_session',
};

// Color Scheme
export const COLORS = {
  primary: '#2D5016',
  secondary: '#6BAA3D',
  accent: '#D4AF37',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  light: '#f3f4f6',
  dark: '#1f2937',
};

// Pagination
export const ITEMS_PER_PAGE = 10;
export const SURAH_PER_PAGE = 12;

// Message Types
export const MESSAGE_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
};

// Auth Messages
export const AUTH_MESSAGES = {
  LOGIN_SUCCESS: 'Login berhasil!',
  LOGIN_FAILED: 'Login gagal. Periksa email dan password Anda.',
  REGISTER_SUCCESS: 'Registrasi berhasil! Silakan login.',
  REGISTER_FAILED: 'Registrasi gagal. Email mungkin sudah terdaftar.',
  LOGOUT_SUCCESS: 'Logout berhasil!',
  SESSION_EXPIRED: 'Sesi Anda telah berakhir. Silakan login kembali.',
};

// Validation Messages
export const VALIDATION_MESSAGES = {
  EMAIL_REQUIRED: 'Email harus diisi',
  EMAIL_INVALID: 'Format email tidak valid',
  PASSWORD_REQUIRED: 'Password harus diisi',
  PASSWORD_SHORT: 'Password minimal 6 karakter',
  PASSWORD_MISMATCH: 'Password tidak cocok',
  NAME_REQUIRED: 'Nama harus diisi',
};

// Routes
export const ROUTES = {
  HOME: '/',
  QURAN: '/quran',
  QURAN_DETAIL: '/quran/:id',
  SEJARAH: '/sejarah',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFIL: '/profil',
  ABOUT: '/about',
};

// Navigation Items
export const NAV_ITEMS = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'Quran', path: ROUTES.QURAN },
  { label: 'Sejarah', path: ROUTES.SEJARAH },
  { label: 'About', path: ROUTES.ABOUT },
];

// Social Links
export const SOCIAL_LINKS = {
  email: 'info@quranapp.com',
  website: 'www.quranapp.com',
  whatsapp: '+62812345678',
  github: 'https://github.com/yourusername/quran-apps',
};

// Feature Flags
export const FEATURES = {
  OFFLINE_MODE: true,
  BOOKMARKS: true,
  USER_AUTH: true,
  PWA: true,
  DARK_MODE: false,
  AUDIO_RECITATION: false,
  TAFSIR: false,
  SOCIAL_SHARING: false,
};

// Regex Patterns
export const PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: /^.{6,}$/, // Min 6 characters
  ARABIC_TEXT: /[\u0600-\u06FF]/,
};

// Default Values
export const DEFAULTS = {
  LANGUAGE: 'id',
  THEME: 'light',
  FONT_SIZE: 'medium',
  LINE_HEIGHT: 'normal',
  ITEMS_PER_PAGE: 10,
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Terjadi kesalahan jaringan. Periksa koneksi Anda.',
  SERVER_ERROR: 'Terjadi kesalahan di server. Coba lagi nanti.',
  NOT_FOUND: 'Data tidak ditemukan.',
  UNAUTHORIZED: 'Anda tidak memiliki izin untuk mengakses ini.',
  VALIDATION_ERROR: 'Ada kesalahan dalam data yang Anda masukkan.',
  GENERAL_ERROR: 'Terjadi kesalahan. Coba lagi nanti.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  BOOKMARK_ADDED: 'Ayat ditambahkan ke favorit',
  BOOKMARK_REMOVED: 'Ayat dihapus dari favorit',
  DATA_SAVED: 'Data berhasil disimpan',
  PREFERENCES_UPDATED: 'Preferensi berhasil diperbarui',
};

// Loading States
export const LOADING_STATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

// Cache Duration (in milliseconds)
export const CACHE_DURATION = {
  SHORT: 5 * 60 * 1000, // 5 minutes
  MEDIUM: 30 * 60 * 1000, // 30 minutes
  LONG: 24 * 60 * 60 * 1000, // 24 hours
};

export default {
  APP_NAME,
  APP_VERSION,
  TOTAL_SURAH,
  TOTAL_AYAT,
  COLORS,
  ROUTES,
  NAV_ITEMS,
  FEATURES,
};
