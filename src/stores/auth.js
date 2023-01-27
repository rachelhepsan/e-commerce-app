import { ref } from 'vue';
import { defineStore } from 'pinia';
import { HOME_ROUTE } from '@/constants/routes';

export const useAuthStore = defineStore('auth', () => {
  const loggedIn = ref(false);
  const returnUrl = ref(HOME_ROUTE);

  const setLoggedIn = (newValue = true) => (loggedIn.value = newValue);

  return { loggedIn, returnUrl, setLoggedIn };
});
