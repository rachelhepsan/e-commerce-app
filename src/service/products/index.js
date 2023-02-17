import api, { getApiResult } from '@/service/api';

export const getProduct = async () =>
  getApiResult(async () => api.get('PRODUCTS'));
