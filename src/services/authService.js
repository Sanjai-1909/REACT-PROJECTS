import axios from 'axios';

const API_URL = 'https://your-api-url.com/api';

export const login = (credentials) => axios.post(`${API_URL}/login`, credentials);
export const register = (userData) => axios.post(`${API_URL}/register`, userData);
