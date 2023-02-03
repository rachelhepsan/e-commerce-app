import axios from 'axios';
import { onRequest, onRequestError } from './requestInterceptor';
import { onResponse, onResponseError } from './responseInterceptor';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'access-control-allow-origin': '*',
  },
});

api.interceptors.request.use(onRequest, onRequestError);

api.interceptors.response.use(onResponse, onResponseError);

export const getApiResult = async apiCall => {
  {
    try {
      const response = await apiCall();
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error,
        ...error.response,
      };
    }
  }
};

export default api;
