<script setup>
import LogoComp from './components/LogoComp/LogoComp.vue';
</script>

<template>
  <div class="login">
    <div class="inner-wrap">
      <LogoComp />
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  @include flex-centered;
  height: 90vh;
}
</style>
