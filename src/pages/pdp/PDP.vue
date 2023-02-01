<script setup>
import { onMounted } from 'vue';
import { usePdpStore } from './pdpStore';
import { getProducts } from './pdpServices';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import DressSize from './components/DressSize.vue';
import QuantityChange from './components/QuantityChange.vue';

const pdpStore = usePdpStore();
const { data, headerCart,headerCartCount} = storeToRefs(pdpStore);

// const router = useRouter();
const route = useRoute();
onMounted(() => {
  // console.log(route.params.productId);
  getProducts(route.params.productId);
});
// const productCount = ref(null);
const showDetails = ref(false);
// const dressSize = ref(false);
const addTocart = ref(null);
// const headerCart = ref(1);
const addToCartText = ref('Add to cart');
const totalOutputPrice = ref(null);

//Toggle the product detail section of each product
function toggleshowDetails() {
  showDetails.value = !showDetails.value;
}

//changes the text of add to cart when clicked
//Also updates the total cart count number in the header.
const updateCart = () => {
  console.log(headerCart.value);
  addToCartText.value = 'Added to cart';
  headerCartCount.value = (+headerCartCount.value) + (+headerCart.value)
  console.log(headerCartCount.value);
  // productCount.value.innerText = headerCart.value;
};
</script>

<template>
  <!-- <Header>
    <span ref="productCount" id="product-count">0</span>
  </Header> -->
  <main>
    <div id="product-image">
      <img :src="data.images" />
    </div>
    <div id="product-description">
      <h1>{{ data.title }}</h1>
      <p id="product-detail">{{ data.description }}</p>
      <div id="discount">
        <s id="cut-dollar"><i class="fa-solid fa-indian-rupee-sign"></i></s
        ><s>101</s>
        <h3>(20% OFF)</h3>
      </div>

      <div id="price-quantity">
        <div>
          <p id="price-word">Price</p>
          <p id="price" ref="a">
            <span class="dollar"
              ><i class="fa-solid fa-indian-rupee-sign"></i
            ></span>
            {{ data.price }}
          </p>
        </div>

        <QuantityChange
          :data="data"
          @header-cart="param => (headerCart = param)"
          @increase-by="param => (totalOutputPrice = param)"
          @decrease-by="param => (totalOutputPrice = param)"
          @button-change="param => (addToCartText = param)"
        />

      </div>
      <div v-if="data.category === 'Fashion'">
        <DressSize />
      </div>

      <hr />
      <div id="product-details-container" @click="toggleshowDetails">
        <h4>Product Details</h4>
        <p>+</p>
      </div>

      <ul v-if="showDetails">
        <li v-for="(item, index) in data.details" :key="index">
          <p class="detail-para">{{ Object.keys(item)[0] }}</p>
          <p id="detail-para-colon">:</p>
          <p class="detail-para">{{ Object.values(item)[0] }}</p>
        </li>
      </ul>

      <hr />
      <div id="what-we-offer">
        <p>&#10003;Free standard delivery on all orders</p>
        <p>&#10003;Free 30 day delivery Return</p>
        <p>
          &#10003;For any queries,plese contact customer service at
          <span id="customer-care-number">0804335245</span>
        </p>
      </div>
      <div id="total-price-container">
        <div>
          <p id="total-price-word">Total Price</p>
          <span class="dollar"
            ><i class="fa-solid fa-indian-rupee-sign"></i
          ></span>

          <p id="total-price" v-if="totalOutputPrice === null">
            {{ data.price }}
          </p>
          <p id="total-price" ref="totalPrice" v-else>{{ totalOutputPrice }}</p>
        </div>
        <button @click="updateCart" ref="addTocart">{{ addToCartText }}</button>
      </div>
    </div>
  </main>
  <!-- <Footer /> -->
</template>

<style scoped>
@import './pdp.css';
</style>
