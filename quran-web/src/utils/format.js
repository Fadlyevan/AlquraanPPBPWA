/**
 * Format Utilities
 * Helper functions for formatting text and data
 */

/**
 * Format date to Indonesian format
 */
export const formatDateID = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

/**
 * Truncate text
 */
export const truncateText = (text, length = 100) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

/**
 * Capitalize first letter
 */
export const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Format surah number with padding
 */
export const formatSurahNumber = (number) => {
  return String(number).padStart(3, '0');
};

/**
 * Get reading time in minutes based on ayat count
 */
export const getReadingTime = (ayatCount) => {
  // Assume average reading speed of 1 ayat per minute
  const minutes = Math.ceil(ayatCount / 1);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (hours > 0) {
    return `${hours}h ${remainingMinutes}m`;
  }
  return `${minutes}m`;
};

/**
 * Convert Arabic numerals to English
 */
export const arabicToEnglish = (text) => {
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  let result = text;
  for (let i = 0; i < arabicNumbers.length; i++) {
    result = result.replace(new RegExp(arabicNumbers[i], 'g'), englishNumbers[i]);
  }
  return result;
};

/**
 * Validate email
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 */
export const validatePassword = (password) => {
  return {
    isValid: password.length >= 6,
    length: password.length >= 6,
    hasNumber: /\d/.test(password),
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasSpecial: /[!@#$%^&*]/.test(password),
  };
};

/**
 * Get password strength message
 */
export const getPasswordStrength = (password) => {
  const validation = validatePassword(password);
  
  if (!validation.isValid) return 'Password terlalu pendek';
  if (!validation.hasNumber) return 'Tambahkan angka';
  if (!validation.hasUpperCase) return 'Tambahkan huruf besar';
  if (!validation.hasSpecial) return 'Tambahkan karakter spesial';
  
  return 'Password kuat';
};

/**
 * Remove diacritics from Arabic text
 */
export const removeDiacritics = (text) => {
  // Remove common Arabic diacritics
  return text
    .replace(/[\u064B-\u065F]/g, '') // Remove all Arabic diacritics
    .replace(/\u0640/g, ''); // Remove Arabic tatweel
};
