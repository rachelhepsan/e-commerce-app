import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const usePlpStore = defineStore('plp', () => {
  const state = reactive({
    results: [],
    categories: [],
    searchKey: '',
    checkCategory: [],
    checkPriceRange: [],
  });

  return { state };
});
