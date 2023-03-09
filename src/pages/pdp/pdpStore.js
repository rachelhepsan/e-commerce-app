import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePdpStore = defineStore('pdp', () => {
  const data = ref({});
  function setData(newData) {
    data.value = newData;
  }
  const headerCart = ref(1);
  const headerCartCount = ref(0);
  const buttonFlag = ref(false);
  const showDetails = ref(false);
  const totalOutputPrice = ref(null);
  const productsInCart = ref([]);
  const totalPriceInCart = ref(0);
  const priceInCart = ref(0);
  return {
    data,
    setData,
    headerCart,
    headerCartCount,
    showDetails,
    buttonFlag,
    totalOutputPrice,
    productsInCart,
    totalPriceInCart,
    priceInCart,
  };
});
