import axios from 'axios';

const API_KEY = '294638af52bc48c8bec10f3933f07746';

const baseUrl = 'https://newsapi.org/v2';

const axiosClient = () => {
  axios.defaults.baseURL = baseUrl;
  axios.interceptors.request.use(
    async (config) => {
      config.headers['X-API-KEY'] = API_KEY;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  return axios;
};

export { axiosClient, API_KEY };
