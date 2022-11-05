import axios from "axios";

const api = axios.create({
  baseURL: "https://kenzinho-vagas.herokuapp.com/",
});

export default api;