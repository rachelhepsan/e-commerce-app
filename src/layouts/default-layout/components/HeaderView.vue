<script setup>
import ButtonComp from '@/components/ButtonComp/ButtonComp.vue';
import CardComp from '@/components/CardComp.vue';
import { HOME_ROUTE } from '@/constants/routes';
import { logout } from '@/service/auth';
</script>

<template>
  <header>
    <CardComp class="header-wrap">
      <div class="app-title">
        <router-link :to="HOME_ROUTE" class="app-title">
          <img src="@/assets/images/qb-logo.png" />
          <img src="@/assets/images/vue-logo.png" />
        </router-link>
        <span>Qburst Vue Boilerplate</span>
      </div>
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
</style>
