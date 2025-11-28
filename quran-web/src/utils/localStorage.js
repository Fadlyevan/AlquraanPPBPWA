/**
 * Local Storage Utilities
 * Handle bookmark and preference storage
 */

const STORAGE_KEYS = {
  BOOKMARKS: 'quran_bookmarks',
  PREFERENCES: 'quran_preferences',
  LAST_VISITED: 'quran_last_visited',
};

/**
 * Get all bookmarks
 */
export const getBookmarks = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error loading bookmarks:', error);
    return [];
  }
};

/**
 * Add bookmark
 */
export const addBookmark = (surahId, ayahNumber) => {
  try {
    const bookmarks = getBookmarks();
    const bookmarkId = `${surahId}-${ayahNumber}`;
    
    if (!bookmarks.includes(bookmarkId)) {
      bookmarks.push(bookmarkId);
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error adding bookmark:', error);
    return false;
  }
};

/**
 * Remove bookmark
 */
export const removeBookmark = (surahId, ayahNumber) => {
  try {
    const bookmarks = getBookmarks();
    const bookmarkId = `${surahId}-${ayahNumber}`;
    
    const updated = bookmarks.filter(id => id !== bookmarkId);
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
    return true;
  } catch (error) {
    console.error('Error removing bookmark:', error);
    return false;
  }
};

/**
 * Check if bookmark exists
 */
export const isBookmarked = (surahId, ayahNumber) => {
  const bookmarks = getBookmarks();
  return bookmarks.includes(`${surahId}-${ayahNumber}`);
};

/**
 * Clear all bookmarks
 */
export const clearAllBookmarks = () => {
  try {
    localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
    return true;
  } catch (error) {
    console.error('Error clearing bookmarks:', error);
    return false;
  }
};

/**
 * Get user preferences
 */
export const getPreferences = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
    return saved ? JSON.parse(saved) : {
      theme: 'light',
      fontSize: 'medium',
      lineHeight: 'normal',
    };
  } catch (error) {
    console.error('Error loading preferences:', error);
    return {};
  }
};

/**
 * Save user preferences
 */
export const savePreferences = (preferences) => {
  try {
    localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(preferences));
    return true;
  } catch (error) {
    console.error('Error saving preferences:', error);
    return false;
  }
};

/**
 * Get last visited surah
 */
export const getLastVisited = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.LAST_VISITED);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('Error loading last visited:', error);
    return null;
  }
};

/**
 * Save last visited surah
 */
export const saveLastVisited = (surahId, surahName) => {
  try {
    const data = {
      surahId,
      surahName,
      visitedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEYS.LAST_VISITED, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Error saving last visited:', error);
    return false;
  }
};

/**
 * Export bookmarks as JSON
 */
export const exportBookmarks = () => {
  try {
    const bookmarks = getBookmarks();
    const dataStr = JSON.stringify(bookmarks, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `quran-bookmarks-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    return true;
  } catch (error) {
    console.error('Error exporting bookmarks:', error);
    return false;
  }
};

/**
 * Import bookmarks from JSON file
 */
export const importBookmarks = (file) => {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const bookmarks = JSON.parse(event.target.result);
          if (Array.isArray(bookmarks)) {
            localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
            resolve(true);
          } else {
            reject(new Error('Invalid bookmark format'));
          }
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => {
        reject(new Error('Error reading file'));
      };
      reader.readAsText(file);
    } catch (error) {
      reject(error);
    }
  });
};
