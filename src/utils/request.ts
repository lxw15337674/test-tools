import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// https://www.dazhuanlan.com/2020/04/03/5e8632ab86219/
declare module 'axios' {
  export interface AxiosInstance {
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig,
    ): Promise<T>;
  }
}

const service = axios.create({});

export interface ResponseData {
  data?: any;
}

service.interceptors.response.use(
  <T = any>(res: AxiosResponse<any>): Promise<T> => {
    if (res?.status === 200) {
      return Promise.resolve(res.data);
    }
    return Promise.reject(new Error(res.data || '请求失败，请重试'));
  },
  (err) => {
    if (err.response.status === 401) {
      const { origin, href } = window.location;
      const encodeHref = encodeURIComponent(href);
      window.location.href = `https://kuauth.kujiale.com/loginpage?backurl=${encodeURIComponent(
        origin,
      )}/login.html&nexturlv2=${encodeHref}`;
    }
    Promise.reject(
      new Error(
        (err && err.response && err.response.statusText) ||
          '服务器错误，请重试',
      ),
    );
  },
);

interface BaseResponse<T> {
  c:string;
  d:T;
  f:string;
  m:string
}

const request = {
  get: <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    return new Promise((resolve, reject) => {
      service
        .get<BaseResponse<T>>(url, config)
        .then((res) => {
          resolve(res.d);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  post: <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    return new Promise((resolve, reject) => {
      service
        .post<BaseResponse<T>>(url, config)
        .then((res) => {
          resolve(res.d);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
export default request;
