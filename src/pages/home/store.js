import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', () => {
  const users = ref([]);
  const loading = ref(false);
  return { users, loading };
});
