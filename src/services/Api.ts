import axios from "axios";

const Api = axios.create({
  // http://localhost:8000/
  // baseURL: "http://localhost:8000/api/v1/",
  baseURL: "http://allied-danita-itskysolutions-b39591d7.koyeb.app/api/v1/",
  // baseURL: "https://koyeb-db-preview-app-aoomle.koyeb.app/api/v1/",
});

Api.interceptors.request.use(
  async (config) => {
    const token = JSON.parse(localStorage.getItem("token") as never);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    throw err;
  }
);

export default Api;
