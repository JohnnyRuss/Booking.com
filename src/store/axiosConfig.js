import axios from "axios";

const privateQuery = axios.create({
  baseURL: "",
  withCredentials: true,
});

export const axiosQuery = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  withCredentials: true,
});
