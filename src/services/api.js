import axios from "axios";

const api = axios.create({
  baseURL: "https://anime-facts-rest-api.herokuapp.com/api"
})

export default api;