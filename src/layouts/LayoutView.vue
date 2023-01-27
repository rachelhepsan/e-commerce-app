<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import DefaultLayout from './default-layout/DefaultLayout.vue';
import LoginLayout from './login-layout/LoginLayout.vue';
import * as layoutNames from '@/constants/layouts';

const route = useRoute();
const layout = computed(() => route?.meta?.layout);
</script>

<template>
  <DefaultLayout v-if="layout === layoutNames.DEFAULT_LAYOUT" />
  <LoginLayout v-else-if="layout === layoutNames.LOGIN_LAYOUT" />
</template>
