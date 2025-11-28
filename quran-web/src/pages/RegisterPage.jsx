import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate
    if (formData.password !== formData.confirmPassword) {
      setError('Password tidak cocok');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password harus minimal 6 karakter');
      return;
    }

    setLoading(true);

    try {
      await register(formData.email, formData.password, {
        name: formData.name,
      });
      setSuccess('Registrasi berhasil! Anda akan diarahkan ke halaman login.');
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (error) {
      setError(error.message || 'Registrasi gagal. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-green-700 to-secondary flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-md w-full bg-white rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 fade-in">
        <div className="text-center mb-6 sm:mb-8">
          <div className="text-5xl sm:text-6xl mb-3 sm:mb-4 animate-pulse">📖</div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">QuranApp</h1>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">Buat akun baru</p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Nama Anda"
              required
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="email@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Konfirmasi Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none text-sm sm:text-base"
          >
            {loading ? 'Creating account...' : 'Daftar'}
          </button>
        </form>

        <div className="mt-5 sm:mt-6 text-center">
          <p className="text-gray-600 text-xs sm:text-sm">
            Sudah punya akun?{' '}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Login di sini
            </Link>
          </p>
        </div>

        <div className="mt-3 sm:mt-4 text-center">
          <Link to="/" className="text-primary text-xs sm:text-sm hover:underline">
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </div>
  );
};
