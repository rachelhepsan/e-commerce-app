<script setup>
import ButtonComp from '@/components/ButtonComp/ButtonComp.vue';
import CardComp from '@/components/CardComp.vue';
import { HOME_ROUTE } from '@/constants/routes';
import { logout } from '@/service/auth';
import { storeToRefs } from 'pinia';
import { usePdpStore } from '@/pages/pdp/pdpStore';
import { usePlpStore } from '@/pages/plp/plpStore';

const plpStore = usePlpStore();
const state = plpStore.state;

const pdpStore = usePdpStore();
const { headerCartCount } = storeToRefs(pdpStore);
</script>

<template>
  <header>
    <CardComp class="header-wrap">
      <div class="app-title">
        <router-link :to="HOME_ROUTE" class="app-title">
          <h2>ShopCart</h2>
        </router-link>
      </div>
      <div class="cart-container">
        <input
          type="search"
          placeholder="search for products"
          class="search-input"
          v-model="state.searchKey"
        />
        <i class="fa-solid fa-cart-shopping"></i>
        <span ref="productCount" class="product-count">{{
          headerCartCount
        }}</span>
        <ButtonComp @click="logout()" class="logout-button">Logout</ButtonComp>
      </div>
    </CardComp>
  </header>
</template>

<style lang="scss" scoped>
header {
  z-index: 1;

  .header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .app-title {
      display: flex;
      align-items: center;

      img {
        width: 20px;
      }

      span {
        padding-left: 10px;
        font-size: 14px;
      }
    }
  }
}

a {
  text-decoration: none;
}

h2 {
  font-size: 25px;
  color: brown;
  cursor: pointer;
}

.cart-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 26%;

  i {
    margin-right: 10px;
  }
}

.search-input {
  border-radius: 20px;
  padding: 5px;
}

.product-count {
  margin-right: 22px;
  position: absolute;
  background-color: #ceccc8;
  border: 1px solid black;
  border-radius: 12px;
  padding: 1px 7px;
  right: 46px;
  bottom: 32px;
}

.logout-button {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 6px 10px;
  border-radius: 20px;
}

.logout-button:hover {
  background-color: #fff;
  color: #000;
  box-shadow: 0px 0px 5px 0px #000;
}
</style>
