import axios from "axios";

const apiBaseUrl =
  typeof window === "undefined"
    ? process.env.API_BASE_URL
    : "/api";

const api = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true
})

export default api;