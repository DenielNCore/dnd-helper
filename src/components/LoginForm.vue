<script setup lang="ts">
  import { Ref, ref } from 'vue';
  import useAuthStore from '@/stores/authStore';

  const authStore = useAuthStore();

  const login: Ref<string> = ref('');
  const pass: Ref<string> = ref('');

  const click = async () => {
    await authStore.login(login.value, pass.value);
  };
</script>

<template>
  <div v-if="!authStore.isLoggedIn" class="login-container">
    <div class="input-container">
      <div class="input-title">Логін:</div>
      <input v-model.trim="login" type="text" placeholder="Enter username" />
    </div>

    <div class="input-container">
      <div class="input-title">Пароль:</div>
      <input v-model.trim="pass" type="password" placeholder="Enter password" />
    </div>

    <button class="log-in-out-btn" @click="click">Зайти</button>
  </div>
  <div v-if="authStore.isLoggedIn" class="logout-container">
    <button class="log-in-out-btn" @click="authStore.logout">Вийти</button>
  </div>
</template>

<style scoped lang="scss">
  .login-container,
  .logout-container {
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    width: fit-content;
  }
  .login-container {
    .input-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px 5px;

      .input-title {
        width: 60px;
      }
      input {
        width: 100px;
      }
    }
  }

  .log-in-out-btn {
    width: 70px;
  }
</style>
