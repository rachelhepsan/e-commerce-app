import * as apiEndpoints from '@/constants/api';

export const onRequest = apiConfig => {
  const { url } = apiConfig;

  /* The following logic will automatically pick the url from
     constants/api.js if the url constant is provided as URL */
  apiConfig.url = url.includes('/') ? url : apiEndpoints[url];
  if (!apiConfig.url) {
    throw `An endpoint url with name "${url}" was not defined in constants/api.js`;
  }

  // You can modify the request here before it is sent
  return apiConfig;
};

export const onRequestError = error => {
  // Do something with request error
  return Promise.reject(error);
};
