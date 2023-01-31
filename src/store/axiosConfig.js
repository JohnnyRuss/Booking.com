import axios from "axios";
import { getAPI_Endpoint } from "../lib";

export const axiosQuery = axios.create({
  baseURL: getAPI_Endpoint(),
  withCredentials: true,
});
