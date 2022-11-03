import axios from "axios";

const api = axios.create({
  baseURL: "https://kenzinho-vagas.herokuapp.com/",
  timeout: 5000,
});

export default api;