import api, { getApiResult } from '@/service/api';

export const getUsers = async () =>
  getApiResult(async () => api.get('PRODUCTS'));
