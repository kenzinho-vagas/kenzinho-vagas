import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenzinho-vagas.herokuapp.com/",
  timeout: 5000,
});
