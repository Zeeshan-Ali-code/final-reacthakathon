import axios from 'axios';

const API_URL = 'https://hackathon-backend-smoky-delta.vercel.app/';

export const signup = async (userData) => {
  return await axios.post(`${API_URL}/signup`, userData);
};

export const login = async (credentials) => {
  return await axios.post(`${API_URL}/login`, credentials);
};

export const logout = async () => {
  return await axios.post(`${API_URL}/logout`);
};
