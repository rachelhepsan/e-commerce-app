<script setup>
import { onMounted } from 'vue';
import { usePdpStore } from './pdpStore';
import { getProducts } from './pdpServices';
// import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import DressSize from './components/DressSize.vue';
import QuantityChange from './components/QuantityChange.vue';

const pdpStore = usePdpStore();
const {data} = storeToRefs(pdpStore);

const route = useRoute();
onMounted(() => {
  getProducts(route.params.productId);
});



//Toggle the product detail section of each product
function toggleshowDetails() {
  pdpStore.showDetails = !pdpStore.showDetails ;
}

//changes the text of add to cart when clicked
//Also updates the total cart count number in the header.
const updateCart = () => {
  pdpStore.addToCartText= 'Added to cart';
  pdpStore.headerCartCount = (+pdpStore.headerCartCount) + (+pdpStore.headerCart)
};
</script>

<template>
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
          @header-cart="param => (pdpStore.headerCart = param)"
          @increase-by="param => (pdpStore.totalOutputPrice = param)"
          @decrease-by="param => (pdpStore.totalOutputPrice = param)"
          @button-change="param => ( pdpStore.addToCartText = param)"
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

      <ul v-if="pdpStore.showDetails ">
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

          <p id="total-price" v-if="pdpStore.totalOutputPrice === null">
            {{ data.price }}
          </p>
          <p id="total-price" ref="totalPrice" v-else>{{ pdpStore.totalOutputPrice }}</p>
        </div>
        <button @click="updateCart" >{{ pdpStore.addToCartText }}</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import './pdp.css';
</style>
