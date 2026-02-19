import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,//im vite env variables are accessd using import.meta.env
});

export default api;