import axios, { AxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});

axiosInstance.interceptors.request.use(async config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${await JSON.parse(token)}`;
  }
  return config;
});

export default class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll(config?: AxiosRequestConfig) {
    const { data } = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      config
    );

    return data;
  }

  async get(id?: string) {
    const url = `${this.endpoint}/${id ? id : ''}`;
    const { data } = await axiosInstance.get<T>(url);
    return data;
  }
}

interface FetchResponse<T> {
  data: T[];
  next?: boolean;
}
