import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePdpStore = defineStore('pdp', () => {
  const data = ref({});
  console.log('hii', data.value);
  function setData(newData) {
    console.log('heyy', newData);
    data.value = newData;
  }
  const headerCart = ref(1);
  const headerCartCount = ref(0);
  const showDetails = ref(false);
  const totalOutputPrice = ref(null);
  return {
    data,
    setData,
    headerCart,
    headerCartCount,
    showDetails,
    totalOutputPrice,
  };
});
