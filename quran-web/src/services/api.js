import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const quranAPI = {
  // Get all surah
  getAllSurah: async () => {
    try {
      const response = await apiClient.get('/surah');
      return response.data;
    } catch (error) {
      console.error('Error fetching surah:', error);
      throw error;
    }
  },

  // Get surah by id with ayat
  getSurahById: async (id) => {
    try {
      const response = await apiClient.get(`/surah/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching surah by id:', error);
      throw error;
    }
  },
};

export default apiClient;
