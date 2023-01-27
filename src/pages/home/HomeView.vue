<script setup>
import { onMounted } from 'vue';
import { getAllUsers } from './service';
import { useHomeStore } from './store';
import UserCard from './components/UserCard.vue';
import HomeDescription from './components/HomeDescription.vue';

const store = useHomeStore();
onMounted(() => {
  getAllUsers();
});
</script>
<template>
  <HomeDescription />
  <div class="users-wrap">
    <div class="loading" v-if="store.loading">Loading users...</div>
    <template v-else>
      <UserCard v-for="user in store.users" :key="user.id" :user="user">
      </UserCard>
    </template>
  </div>
</template>

<style scoped lang="scss">
@import './style.scss';
</style>
