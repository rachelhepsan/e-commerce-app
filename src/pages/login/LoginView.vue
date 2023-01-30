<script setup>
import LoginComp from './components/LoginForm.vue';
import { onMounted, watch } from 'vue';
import { useLoginStore } from './store';
import { watchFormData, clearForm } from './service.js';

const store = useLoginStore();
const { formData } = store;

watch(formData, watchFormData);

onMounted(clearForm);
</script>

<template>
  <!-- <div class="sub-heading">
    <p>This is a dummy login page</p>
    <p>Use username <b>kminchelle</b> and password <b>0lelplR</b></p>
  </div> -->
  <section id="sign-in">
    <div id="sign-in-image"></div>
    <div id="sign-in-content">
      <LoginComp />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
