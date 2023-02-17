import api, { getApiResult } from '@/service/api';

export const getCategoryApi = async () =>
  getApiResult(async () => api.get('/category'));
