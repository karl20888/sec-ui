import { now, defaults } from 'lodash';
import axios from 'axios';
import { Message } from 'element-ui';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 60000,
});

service.interceptors.request.use((config) => {
  const re = {
    ...config,
  };
  if (config.params === 'get') {
    re.params.timespan = now();
  }
  re.headers['X-Requested-With'] = 'XMLHttpRequest';
  return re;
}, (error) => Promise.reject(error));

service.interceptors.response.use(({ config, data }) => {
  let resData = {
    data: null,
    message: null,
    success: true,
  };
  if (config.responseFormat) {
    resData = defaults(config.responseFormat(data), resData);
  } else {
    resData = defaults(data, resData.data);
  }
  if (resData.success) {
    return resData.data;
  }
  const error = resData.message || '请求错误';
  Message.error(error);
  return Promise.reject(error);
}, (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      Message.error('登录超时，请重新登录');
    }
  }
  return Promise.reject(error);
});

export default service;
