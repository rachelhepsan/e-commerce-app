import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePdpStore = defineStore('pdp', () => {
  const data = ref({});
  function setData(newData) {
    data.value = newData;
  }
  const headerCart = ref(1);
  const headerCartCount = ref(0);
  const showDetails = ref(false);
  const addToCartText = ref('Add to cart');
  const totalOutputPrice = ref(null);
  return { data, setData, headerCart, headerCartCount,showDetails,addToCartText,totalOutputPrice };
});
