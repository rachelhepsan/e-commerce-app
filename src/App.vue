<script setup>
import LayoutView from './layouts/LayoutView.vue';
import { checkForLogin } from '@/service/auth';
import { onMounted } from 'vue';
onMounted(() => {
  checkForLogin();
});
</script>

<template>
  <LayoutView />
</template>
