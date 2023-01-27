<script setup>
import { onMounted, watch } from 'vue';
import { useLoginStore } from '../store.js';
import { attemptLogin, watchFormData, clearForm } from '../service.js';
import CardComp from '@/components/CardComp.vue';
import InputComp from '@/components/InputComp/InputComp.vue';
import ButtonComp from '@/components/ButtonComp/ButtonComp.vue';

const store = useLoginStore();
const { formData, errors } = store;

watch(formData, watchFormData);

onMounted(clearForm);
</script>

<template>
  <CardComp class="login-form" :class="store.loading && 'loading'">
    <form @submit.prevent="attemptLogin">
      <InputComp
        v-model="formData.username"
        label="Username"
        :class="errors.username && 'error'"
      />
      <InputComp
        v-model="formData.password"
        label="Password"
        type="password"
        :class="errors.password && 'error'"
      />
      <div class="button-wrap">
        <ButtonComp type="submit">Login</ButtonComp>
        <label class="error">{{ store.loginError }}</label>
      </div>
    </form>
  </CardComp>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
