<script setup>
import { onMounted } from 'vue';
import { usePdpStore } from './pdpStore';
import { getProducts } from './pdpServices';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import DressSize from './components/DressSize.vue';
import QuantityChange from './components/QuantityChange.vue';
import { defineComponent } from 'vue';
import StarRating from 'vue-star-rating';

defineComponent({
  components: {
    StarRating,
  },
});

const pdpStore = usePdpStore();
const { data } = storeToRefs(pdpStore);
const addToCartText = ref('Add to cart');
const route = useRoute();
console.log(route);

onMounted(() => {
  getProducts(route.params.productId);
  pdpStore.buttonFlag = false;
  pdpStore.headerCart = 1;
});

//Toggle the product detail section of each product
function toggleshowDetails() {
  pdpStore.showDetails = !pdpStore.showDetails;
}

//changes the text of add to cart when clicked
//Also updates the total cart count number in the header.
const updateCart = () => {
  let flag = true;
  addToCartText.value = 'Added to cart';
  console.log('arrayyyyyy', pdpStore.productsInCart);
  pdpStore.productsInCart.length == 0 &&
    pdpStore.productsInCart.push(data.value);
  pdpStore.productsInCart.map(product => {
    if (product?.id == data.value.id) {
      flag = false;
    }
  });
  flag && pdpStore.productsInCart.push(data.value);
  pdpStore.totalPriceInCart = +pdpStore.totalPriceInCart + +data.value.price;
  pdpStore.headerCartCount = pdpStore.productsInCart.length;
  pdpStore.buttonFlag = true;
};
</script>

<template>
  <main>
    <div class="product-image">
      <img :src="data.thumbnail" />
    </div>
    <div class="product-description">
      <h1>{{ data.name }}</h1>
      <p class="product-detail">{{ data.description }}</p>
      <div class="discount">
        <s class="cut-dollar"><i class="fa-solid fa-indian-rupee-sign"></i></s>
        <s>101</s>
        <h3>(20% OFF)</h3>
      </div>

      <div class="price-quantity">
        <div>
          <p class="price-word">Price</p>
          <p class="price" ref="a">
            <span class="dollar"
              ><i class="fa-solid fa-indian-rupee-sign"></i
            ></span>
            {{ data.price }}
          </p>
        </div>

        <QuantityChange
          :data="data"
          @header-cart="param => (pdpStore.headerCart = param)"
          @increase-by="param => (pdpStore.totalOutputPrice = param)"
          @decrease-by="param => (pdpStore.totalOutputPrice = param)"
          @button-change="param => (addToCartText = param)"
        />
      </div>
      <div v-if="data.category === 'Fashion'">
        <DressSize />
      </div>

      <div class="what-we-offer">
        <p>&#10003;Free standard delivery on all orders</p>
        <p>&#10003;Free 30 day delivery Return</p>
        <p>
          &#10003;For any queries,plese contact customer service at
          <span class="customer-care-number">0804335245</span>
        </p>
      </div>
      <hr />
      <div @click="toggleshowDetails">
        <div class="product-details-container">
          <h4 class="star-rating">Customer Reviews</h4>
          <star-rating
            v-bind:increment="0.1"
            v-bind:star-size="20"
            v-bind:read-only="true"
            v-bind:rating="data.rating"
          ></star-rating>
        </div>
        <p class="text-align-right" v-if="!pdpStore.showDetails">
          tap to read more reviews
        </p>
      </div>

      <ul v-if="pdpStore.showDetails">
        <template v-for="(item, index) in data.review" :key="index">
          <div class="customer-review">
            <p
              v-if="item.description && item.description !== ' '"
              class="product-review"
            >
              {{ item.description }}
            </p>
            <star-rating
              v-if="item.description && item.description !== ' '"
              v-bind:increment="0.1"
              v-bind:star-size="20"
              v-bind:read-only="true"
              v-bind:rating="item.rating"
            ></star-rating>
          </div>
        </template>
      </ul>

      <hr />
      <div class="total-price-container">
        <div>
          <p class="total-price-word">Total Price</p>
          <span class="dollar"
            ><i class="fa-solid fa-indian-rupee-sign"></i
          ></span>
          <p class="total-price" ref="totalPrice">
            {{ pdpStore.totalOutputPrice }}
          </p>
        </div>
        <button @click="updateCart" :disabled="pdpStore.buttonFlag">
          {{ addToCartText }}
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import './pdp.css';
</style>
