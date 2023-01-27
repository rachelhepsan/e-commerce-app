<script setup>
import ProductInfoVue from '@/components/ProductInfo.vue';
import SideNavBar from '@/components/SideNavBar.vue';

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
    state.results = [];
    filterByCategory(state.checkCategory);
  },
);

watch(
  () => state.checkPriceRange,
  () => {
    state.results = [];
    filterByPriceRange(state.checkPriceRange);
  },
);

onMounted(() => {
  getProducts();
});
</script>

<template>
  <!-- <Header>
    <template v-slot:search>
      <input
        type="search"
        placeholder="search for products"
        class="search-input"
        v-model="state.searchKey"
      />
    </template>
  </Header> -->
  <main>
    <div class="banner">
      <div class="banner-caption">
        <h1>New Season <br />Arrivals!</h1>
      </div>
      <div class="banner-image">
        <img src="/banner.jpg" alt="banner" />
      </div>
    </div>
    <section>
      <SideNavBar />
      <div class="product-container">
        <ProductInfoVue
          v-for="(data, index) in state.results"
          :data="data"
          :key="index"
        />
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
@import './plp.scss';
</style>
