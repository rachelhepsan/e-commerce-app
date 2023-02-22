<script setup>
import { ref } from 'vue';
import { usePdpStore } from '../pdpStore';

const props = defineProps({
  data: {
    type: Object,
  },
});
console.log('propsss', props);

const pdpStore = usePdpStore();

const quantity = ref(null);
const totalPrice = ref(null);
const buttonTextChange = ref('Add to cart');

//decreases the count of each product
//calcultaes the total price based on the number of quantity selected
const decreaseCount = eachItemPrice => {
  if (quantity.value.innerText > 1) {
    quantity.value.innerText--;
    totalPrice.value = eachItemPrice * quantity.value.innerText;
    pdpStore.buttonFlag = false;
  }
};
//increases the count of each product
//calcultaes the total price based on the number of quantity selected
const increaseCount = (maxQuantity, eachItemPrice) => {
  if (quantity.value.innerText < +maxQuantity) {
    quantity.value.innerText++;
    totalPrice.value = eachItemPrice * quantity.value.innerText;
    pdpStore.buttonFlag = false;
  }
};
</script>

<template>
  <div>
    <p class="quantity-word">Quantity</p>
    <div class="quantity-container">
      <i
        class="fa-solid fa-minus"
        @click="
          decreaseCount(data.price);
          $emit('decreaseBy', totalPrice);
          $emit('headerCart', quantity.innerText);
          $emit('buttonChange', buttonTextChange);
        "
      >
      </i>
      <p class="quantity" ref="quantity">1</p>
      <i
        class="fa-solid fa-plus"
        @click="
          increaseCount(data.inventory, data.price);
          $emit('increaseBy', totalPrice);
          $emit('headerCart', quantity.innerText);
          $emit('buttonChange', buttonTextChange);
        "
      ></i>
    </div>
  </div>
</template>
<style scoped>
.quantity-word {
  letter-spacing: 1.3px;
  font-size: 11px;
}
.quantity-container {
  display: flex;
  align-items: center;
}
.quantity-container p {
  margin: 0px 12px;
  font-weight: 700;
  font-size: 20px;
}
.fa-minus,
.fa-plus {
  cursor: pointer;
}
</style>
