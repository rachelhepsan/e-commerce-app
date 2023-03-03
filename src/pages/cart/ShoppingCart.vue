<script setup>
import { ref } from 'vue';
import { usePdpStore } from '@/pages/pdp/pdpStore';
// import QuantityChange from '@/pages/pdp/components/QuantityChange.vue';

const pdpStore = usePdpStore();
const deleteItem = ref(null);

function removeItemFromCart(id) {
  pdpStore.productsInCart.forEach(element => {
    const index = pdpStore.productsInCart.indexOf(element);
    if (element.id === id) {
      pdpStore.productsInCart.splice(index, 1);
      pdpStore.headerCartCount--;
      pdpStore.totalPriceInCart = pdpStore.totalPriceInCart - element.price;
    }
  });
}
</script>

<template>
  <main v-if="pdpStore.productsInCart.length">
    <h1>My Cart</h1>
    <div
      v-for="(data, index) in pdpStore.productsInCart"
      :key="index"
      class="products-in-cart"
    >
      <img
        :src="data.productImages[0].imageURL"
        alt="product image"
        class="product-image"
      />
      <div class="products-in-cart-details">
        <h2>{{ data.name }}</h2>
        <h3 class="price-of-products">
          <i class="fa-solid fa-indian-rupee-sign"></i>
          {{ data.price }}
        </h3>
        <!-- <QuantityChange
          :data="data"
          @header-cart="param => (pdpStore.headerCart = param)"
          @increase-by="param => (pdpStore.totalOutputPrice = param)"
          @decrease-by="param => (pdpStore.totalOutputPrice = param)"
        /> -->
      </div>
      <div>
        <i
          class="fa-solid fa-trash-can"
          @click="removeItemFromCart(data.id)"
          ref="deleteItem"
        ></i>
      </div>
    </div>
    <hr />
    <div class="total-price-checkout">
      <h3>
        Total Price : <i class="fa-solid fa-indian-rupee-sign"></i>
        {{ pdpStore.totalPriceInCart }}
      </h3>
      <button class="checkout-button">Checkout</button>
    </div>
  </main>
  <main v-else>
    <div class="empty-cart-container">
      <div class="empty-cart-text-box">
        <h2>Your cart is empty!</h2>
        <p class="empty-cart-info">
          Looks like you haven't added anything to your cart yet.
        </p>
        <a href="http://localhost:3000/">Shop Now</a>
      </div>
      <img
        src="@/assets/images/empty-cart.jpg"
        alt="empty-cart"
        class="empty-cart-image"
      />
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 0 auto;
  width: 65%;
  margin-bottom: 40px;
}
h1 {
  background-color: gray;
  color: #fff;
  padding: 10px;
  text-align: center;
}
.products-in-cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  margin-bottom: 20px;
}
.products-in-cart:hover {
  box-shadow: 1px 1px 5px 3px #888888;
  border-radius: 10px;
}
.product-image {
  width: 20%;
  padding: 8px;
  border-radius: 25px;
  /* border: 0.5px solid #000; */
  box-shadow: 1px 1px 3px 1px #888888;
}
.fa-trash-can {
  font-size: 20px;
  cursor: pointer;
}
.total-price-checkout {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.checkout-button {
  padding: 8px 23px;
  border-radius: 20px;
  background: #000;
  color: #fff;
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
.empty-cart-text-box {
  text-align: center;
  display: block;
  justify-content: center;
  margin-top: 100px;
}
a {
  text-decoration: none;
  color: #fff;
  font-size: 15px;
  background-color: #000;
  padding: 10px 30px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 40px;
}
.empty-cart-info {
  margin-bottom: 35px;
}
.empty-cart-container {
  display: flex;
  justify-content: space-evenly;
}
.empty-cart-image {
  width: 25%;
}
</style>
