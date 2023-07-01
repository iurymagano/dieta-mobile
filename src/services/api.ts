import axios from "axios";

const api = axios.create({
  baseURL: "https://dieta-backend-git-main-iurymagano.vercel.app",
  // baseURL: "192.168.0.5:3333",
});

export default api;
