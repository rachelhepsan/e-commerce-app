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
  main {
    padding: 2em 4em;
    flex: 1;
    overflow: auto;
  }
}
</style>
