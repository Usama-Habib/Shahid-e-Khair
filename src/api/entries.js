import axios from './axiosInstance';

export const getAllEntries = async () => {
  const response = await axios.get('/entries');
  return response.data.data;
};

export const getLatestEntries = async () => {
  const response = await axios.get('/entries/latest');
  return response.data.data;
};

export const getEntryById = async (id) => {
  const response = await axios.get(`/entries/${id}`);
  return response.data.data;
};

export const searchEntries = async (query) => {
  const response = await axios.get(`/entries/search?q=${encodeURIComponent(query)}`);
  return response.data.data;
};

export const getEntriesByType = async (type) => {
  const response = await axios.get(`/entries/type/${type}`);
  return response.data.data;
};

export const getEntriesByTag = async (tag) => {
  const response = await axios.get(`/entries/tag/${tag}`);
  return response.data.data;
};
