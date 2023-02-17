<script setup>
import { onMounted, watch } from 'vue';
import { useLoginStore } from '../store.js';
import { attemptLogin, watchFormData, clearForm } from '../service.js';
import InputComp from '@/components/InputComp/InputComp.vue';
import ButtonComp from '@/components/ButtonComp/ButtonComp.vue';

const store = useLoginStore();
const { formData, errors } = store;

watch(formData, watchFormData);

onMounted(clearForm);
</script>

<template>
  <div class="login-form" :class="store.loading && 'loading'">
    <form @submit.prevent="attemptLogin">
      <h1>Welcome Back</h1>
      <InputComp
        v-model="formData.username"
        label="Username"
        type="text"
        placeholder="User Name"
        :class="errors.username && 'error'"
      />
      <InputComp
        v-model="formData.password"
        label="Password"
        type="password"
        placeholder="Password"
        :class="errors.password && 'error'"
      />
      <div class="button-wrap">
        <ButtonComp type="submit" class="sign-in-anchor">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign In
        </ButtonComp>
        <label class="error">{{ store.loginError }}</label>
        <p class="sign-up">
          Dont have an account ?
          <a>Sign Up</a>
        </p>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>
