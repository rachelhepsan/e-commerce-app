import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useLoginStore = defineStore('login', () => {
  const loading = ref(false);
  const loginError = ref('');
  const formData = reactive({
    username: '',
    password: '',
  });
  const errors = reactive({
    username: false,
    password: false,
  });
  return { loading, formData, errors, loginError };
});
