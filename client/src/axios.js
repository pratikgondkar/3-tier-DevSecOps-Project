// src/axios.js
import axios from 'axios';

// Dynamically determine API base URL
const API_BASE_URL =
  process.env.REACT_APP_API ||
  (window.location.hostname === 'localhost'
    ? 'http://localhost:5000'
    : `http://${window.location.hostname}:5000`);

const instance = axios.create({
  baseURL: API_BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

export default instance;

