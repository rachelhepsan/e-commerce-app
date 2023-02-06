<script setup>
import ProductInfoVue from './components/ProductInfo.vue';
import SideNavBar from './components/SideNavBar.vue';

import { usePlpStore } from './plpStore';
import { onMounted, watch } from 'vue';
import {
  getProducts,
  filterByCategory,
  filterByPriceRange,
} from './plpService';

const plpStore = usePlpStore();
const state = plpStore.state;

watch(
  () => state.searchKey,
  () => {
    state.results = [];
    getProducts();
  },
);

watch(
  () => state.checkCategory,
  () => {
    filterByCategory(state.checkCategory);
  },
);

watch(
  () => state.checkPriceRange,
  () => {
    filterByPriceRange(state.checkPriceRange);
  },
);

onMounted(() => {
  getProducts(() => {
    filterByCategory(state.checkCategory);
  });
  filterByPriceRange(state.checkPriceRange);
});
</script>

<template>
  <main>
    <div class="banner">
      <div class="banner-caption">
        <h1>New Season <br />Arrivals!</h1>
      </div>
      <div class="banner-image">
        <img src="@/assets/images/banner.jpg" alt="banner" />
      </div>
    </div>
    <section>
      <SideNavBar />
      <div class="product-container">
        <ProductInfoVue
          v-for="data in state.results"
          :data="data"
          :key="data.id"
        />
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
@import './plp.scss';
</style>
