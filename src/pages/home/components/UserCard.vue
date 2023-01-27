<script setup>
import CardComp from '@/components/CardComp.vue';

defineProps({
  user: Object,
});
</script>

<template>
  <CardComp class="user-card">
    <div class="image-wrap">
      <img :src="user.image" />
    </div>
    <div class="desc-wrap">
      <span>
        <div>{{ user.firstName }} {{ user.lastName }}</div>
        <div>{{ user.age }} years old {{ user.gender }}</div>
        <div>Born on {{ user.birthDate }}</div>
        <div>{{ user.email }}</div>
      </span>
    </div>
  </CardComp>
</template>

<style lang="scss" scoped>
.user-card {
  display: flex;
  .image-wrap {
    img {
      width: 61px;
    }
  }
  .desc-wrap {
    padding-left: 20px;
    font-size: 13px;
  }
}
</style>
