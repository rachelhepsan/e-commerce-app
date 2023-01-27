<script setup>
import ButtonComp from '@/components/ButtonComp/ButtonComp.vue';
import CardComp from '@/components/CardComp.vue';
import { logout } from '@/service/auth';
</script>

<template>
  <header>
    <CardComp class="header-wrap">
      <header class="header">
        <div>
          <RouterLink :to="{ name: 'plp' }">
            <h2>ShopCart</h2>
          </RouterLink>
        </div>
        <div class="options-container">
          <div class="cart-container">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <i class="fa-solid fa-user"></i>
        </div>
      </header>
      <ButtonComp @click="logout()">Logout</ButtonComp>
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

.header {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
}

a {
  text-decoration: none;
}

.options-container {
  display: flex;
  align-items: center;
}

.cart-container {
  position: relative;
  margin-right: 20px;
}

i {
  padding: 8px;
  font-size: 20px;
  cursor: pointer;
}

h2 {
  font-size: 25px;
  color: brown;
  cursor: pointer;
}

.container {
  width: 90%;
  margin: 0 auto;
}

.cart-container slot {
  background-color: bisque;
  border: 1px solid red;
  border-radius: 12px;
  padding: 0px 6px;
}
</style>
