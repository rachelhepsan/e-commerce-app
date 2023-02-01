import api, { getApiResult } from '@/service/api';
import { getItem, removeItem } from '@/service/local-storage';
import { LOGGED_IN } from '@/constants/localStorageKeys';
import { LOGIN_ROUTE } from '@/constants/routes';
import { useAuthStore } from '@/stores/auth';
import router from '@/router';

export const login = async credentials =>
  getApiResult(async () => api.post('auth/login', credentials));

export const logout = () => {
  // Keep your logout logic here
  // Clearing the localstorage value as a dummy demo
  removeItem(LOGGED_IN);
  const auth = useAuthStore();
  auth.setLoggedIn(false);
  router.push(LOGIN_ROUTE);
};

export const checkForLogin = () => {
  if (getItem(LOGGED_IN)) {
    const auth = useAuthStore();
    auth.setLoggedIn();
  }
};
