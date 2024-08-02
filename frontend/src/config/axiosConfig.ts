// src/axiosConfig.ts
import axios from 'axios';

// Configure axios to include credentials (cookies) with requests
axios.defaults.withCredentials = true;

// Optionally, you can set the base URL if it's the same for all your requests
axios.defaults.baseURL = 'http://localhost:5500'; // Replace with your backend URL

export default axios;
