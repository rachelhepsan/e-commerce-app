<script setup>
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';
</script>

<template>
  <div class="layout-wrap">
    <HeaderView />
    <main>
      <RouterView />
    </main>
    <FooterView />
  </div>
</template>

<style lang="scss" scoped>
.layout-wrap {
  @include expand-to-window-size;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  main {
    flex: 1;
  }
}
</style>
