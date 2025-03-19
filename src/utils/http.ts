import axios from "axios";
import { getTokenLS } from "./authLS";

const BASE_URL = "http://222.255.117.238:8082/v1";

const http = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

http.interceptors.request.use((request) => {
  const accessToken = getTokenLS();

  if (!request.headers["Content-Type"]) {
    request.headers["Content-Type"] = "application/json";
  }

  request.headers.Authorization = "Bearer " + accessToken;
  return request;
});

export default http;
