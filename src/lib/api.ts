import axios from 'axios';

const API_URL = process.env.API_URL || 'https://acreanofit.com/zerograu-backend/';

const api = axios.create({
  baseURL: API_URL
});

export default api;