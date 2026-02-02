// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
// });

// export const fetchCampersApi = async (params = {}) => {
//   const { data } = await api.get('/campers', { params });
//   return data;
// };

// export const fetchCamperByIdApi = async id => {
//   const { data } = await api.get(`/campers/${id}`);
//   return data;
// };

import axios from "axios";

const BASE_URL = "https://66b1f8e….mockapi.io";

export const fetchCampersApi = async () => {
  const { data } = await axios.get(`${BASE_URL}/campers`);
  return data;
};

export const fetchCamperByIdApi = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/campers/${id}`);
  return data;
};