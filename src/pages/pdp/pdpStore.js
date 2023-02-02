import { ref } from "vue";
import { defineStore } from "pinia";

export const usePdpStore = defineStore("pdp", () => {
  const data = ref({});
  function setData(newData) {
    data.value = newData;
  }
  const headerCart = ref(1);
  const headerCartCount = ref(0);
  return { data, setData, headerCart,headerCartCount };
});
