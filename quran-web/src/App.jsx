import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { BottomNavbar } from './components/BottomNavbar';
import { ProtectedRoute } from './components/ProtectedRoute';

import { HomePage } from './pages/HomePage';
import { QuranPage } from './pages/QuranPage';
import { QuranDetailPage } from './pages/QuranDetailPage';
import { SejarahPage } from './pages/SejarahPage';
import { ProfilPage } from './pages/ProfilPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { AboutPage } from './pages/AboutPage';
import './App.css';

// Helper untuk sembunyikan BottomNavbar di halaman tertentu
function Layout({ children }) {
  const location = useLocation();
  const hideNavbar = ['/login', '/register'].includes(location.pathname);

  return (
      <div className="flex flex-col min-h-screen pb-20">
        <main className="flex-grow">{children}</main>
        {!hideNavbar && <BottomNavbar />}
      </div>
  );
}

function App() {
  return (
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>

              {/* HALAMAN PUBLIK */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* HALAMAN TERKUNCI */}
              <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <HomePage />
                    </ProtectedRoute>
                  }
              />

              <Route
                  path="/quran"
                  element={
                    <ProtectedRoute>
                      <QuranPage />
                    </ProtectedRoute>
                  }
              />

              <Route
                  path="/quran/:id"
                  element={
                    <ProtectedRoute>
                      <QuranDetailPage />
                    </ProtectedRoute>
                  }
              />

              <Route
                  path="/sejarah"
                  element={
                    <ProtectedRoute>
                      <SejarahPage />
                    </ProtectedRoute>
                  }
              />

              <Route
                  path="/profil"
                  element={
                    <ProtectedRoute>
                      <ProfilPage />
                    </ProtectedRoute>
                  }
              />

              <Route
                  path="/about"
                  element={
                    <ProtectedRoute>
                      <AboutPage />
                    </ProtectedRoute>
                  }
              />

              {/* SEMUA URL LAIN → LOGIN */}
              <Route path="*" element={<Navigate to="/login" replace />} />

            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
  );
}

export default App;
