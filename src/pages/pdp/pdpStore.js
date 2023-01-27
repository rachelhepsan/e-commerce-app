import { ref } from "vue";
import { defineStore } from "pinia";

export const usePdpStore = defineStore("pdp", () => {
  const data = ref({});
  function setData(newData) {
    data.value = newData;
  }

  return { data, setData };
});
