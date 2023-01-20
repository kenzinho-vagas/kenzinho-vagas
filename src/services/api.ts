import axios from "axios";

const api = axios.create({
  baseURL: "https://gifted-toad-veil.cyclic.app",
});

export default api;
