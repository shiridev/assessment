import axios from "axios";
import { baseUrl } from "./APIUrls";

export const http = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
