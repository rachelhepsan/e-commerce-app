import { login } from '@/service/auth';
import { useAuthStore } from '@/stores/auth';
import { useLoginStore } from './store';
import { setItem } from '@/service/local-storage';
import { LOGGED_IN } from '@/constants/localStorageKeys';
import { INVALID_CREDENTIALS } from '@/constants/message';
import router from '@/router';
import dataEncrypt from '@/service/auth/dataEncrypt';

const store = useLoginStore();
const { formData, errors } = store;
const auth = useAuthStore();
let encryptedData = { username: '', password: '' };

const validate = () => {
  errors.username = errors.password = false;
  let valid = true;
  if (formData.username.trim() === '') {
    errors.username = true;
    valid = false;
  }
  if (formData.password.trim() === '') {
    errors.password = true;
    valid = false;
  }
  return valid;
};

export const watchFormData = () => {
  store.loginError = '';
  if (errors.password || errors.username) {
    validate();
  }
};

export const clearForm = () => {
  formData.username = formData.password = '';
};

export const attemptLogin = async () => {
  if (!validate()) {
    return;
  }
  store.loading = true;
  encryptedData.password = await dataEncrypt(formData.password);
  encryptedData.username = formData.username;
  const response = await login(encryptedData);
  store.loading = false;
  if (response.success) {
    auth.setLoggedIn();
    setItem(LOGGED_IN, true);
    router.push(auth.returnUrl);
  } else {
    store.loginError = INVALID_CREDENTIALS;
  }
};
