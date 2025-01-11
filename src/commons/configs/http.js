import axios from 'axios';

export const httpApi = axios.create({ baseURL: import.meta.env.VITE_API_URL });

const config = {
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
};

const setupInterceptors = (instance) => {
  instance.interceptors.request.use(async (request) => {
    if (import.meta.env.DEV) {
      console.debug('headers: ', request.headers);
      console.debug('method: ', request.method);
      console.debug(`url: ${request.baseURL}${request.url}`);
      console.debug('params: ', request.params);
      console.debug('body: ', request.data);
    }
    return request;
  });

  instance.interceptors.request.use(
    (config) => {
      // 로컬 스토리지에서 token 값을 가져옵니다
      const token = localStorage.getItem('token');

      if (token) {
        // 토큰이 있을 경우, Authorization 헤더에 추가
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      if (import.meta.env.DEV) {
        console.debug(response.status);
        console.debug(response.data);
      }
      return response;
    },
    async (error) => {
      if (import.meta.env.DEV) {
        console.debug(error.response?.status);
        console.debug(error.response?.data);
      }

      return Promise.reject(error);
    },
  );
};

setupInterceptors(httpApi);

const handleError = (error) => {
  if (axios.isAxiosError(error)) {
    console.error('API Error:', {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });
  }
};

const createApiMethods = (instance) => ({
  Get: async (url, params = {}) => {
    try {
      const response = await instance.get(url, {
        ...config,
        ...params,
      });
      return response.data;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    }
  },

  Post: async (url, data) => {
    try {
      const response = await instance.post(url, data, config);
      return response.data;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    }
  },

  Put: async (url, data) => {
    try {
      const response = await instance.put(url, data, config);
      return response.data;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    }
  },

  Delete: async (url) => {
    try {
      const response = await instance.delete(url, config);
      return response.data;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    }
  },

  Patch: async (url, data) => {
    try {
      const response = await instance.patch(url, data, config);
      return response.data;
    } catch (error) {
      handleError(error);
      return Promise.reject(error);
    }
  },
});

export const { Get, Post, Put, Delete, Patch } = createApiMethods(httpApi);
