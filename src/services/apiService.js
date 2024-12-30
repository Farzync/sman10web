import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;

const apiService = {
  getStatus: async () => {
    try {
      console.log(API_BASE_URL);
      const response = await axios.get(`${API_BASE_URL}/status`);
      return response.data;
    } catch (error) {
      console.error('Error fetching status:', error);
      throw error;
    }
  },
  
  getVideoData: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/video`);
      return response.data;
    } catch (error) {
      console.error('Error fetching video data:', error);
      throw error; // Melempar error agar bisa ditangani di tempat lain
    }
  },

  getKepalaSekolah: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/kepala-sekolah`);
      return response.data; // Mengembalikan data kepala sekolah
    } catch (error) {
      console.error('Error fetching kepala sekolah data:', error);
      throw error; // Melempar error agar bisa ditangani di tempat lain
    }
  },

  getVisiMisi: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/visi-misi`);
      return response.data; // Mengembalikan data visi dan misi
    } catch (error) {
      console.error('Error fetching visi dan misi data:', error);
      throw error; // Melempar error agar bisa ditangani di tempat lain
    }
  },

  getEkstrakurikuler: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/ekstrakurikuler`);
      return response.data; // Mengembalikan data ekstrakurikuler
    } catch (error) {
      console.error('Error fetching ekstrakurikuler data:', error);
      throw error; // Melempar error agar bisa ditangani di tempat lain
    }
  },

  getCounts: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/counts`);
      return response.data; // Mengembalikan data jumlah pelajar, guru, dan staff
    } catch (error) {
      console.error('Error fetching counts data:', error);
      throw error; // Melempar error agar bisa ditangani di tempat lain
    }
  },
};

export default apiService;
