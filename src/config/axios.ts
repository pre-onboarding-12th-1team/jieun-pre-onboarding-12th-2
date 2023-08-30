import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com'
});

axiosInstance.interceptors.request.use(
  (config) => {
    //config.headers.Authorization = `Bearer ${process.env.ACCESS_TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;