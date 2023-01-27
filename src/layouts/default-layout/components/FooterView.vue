<script setup>
import CardComp from '@/components/CardComp.vue';
</script>

<template>
  <footer>
    <CardComp class="footer-wrap"> Happy Coding! </CardComp>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  font-size: 13px;
  .footer-wrap {
    padding: 4px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
