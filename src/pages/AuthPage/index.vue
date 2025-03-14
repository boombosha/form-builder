<template>
  <!-- Шапка для страницы авторизации -->
  <v-app>
    <AuthPageHeader />

    <v-main>
      <div class="auth-page">
        <!-- Переключение между вкладками "Вход" и "Регистрация" -->
        <v-tabs v-model="tab" grow>
          <v-tab value="login">Вход</v-tab>
          <v-tab value="register">Регистрация</v-tab>
        </v-tabs>

        <!-- Контент вкладок -->
        <v-window v-model="tab">
          <!-- Вкладка "Вход" -->
          <v-window-item value="login">
            <LoginForm @submit="handleLogin" />
          </v-window-item>

          <!-- Вкладка "Регистрация" -->
          <v-window-item value="register">
            <RegisterForm @submit="handleRegister" />
          </v-window-item>
        </v-window>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoginForm from '@/pages/AuthPage/components/LoginForm.vue';
import RegisterForm from '@/pages/AuthPage/components/RegisterForm.vue';
import AuthPageHeader from './components/AuthPageHeader.vue';

// Состояние для активной вкладки
const tab = ref<'login' | 'register'>('login');

// Обработчик для формы входа
const handleLogin = (credentials: { login: string; password: string }) => {
  console.log('Данные для входа:', credentials);
  // Здесь можно вызвать API для входа
};

// Обработчик для формы регистрации
const handleRegister = (data: { login: string; password: string; name: string }) => {
  console.log('Данные для регистрации:', data);
  // Здесь можно вызвать API для регистрации
};
</script>

<style scoped>
.auth-page {
  min-width: 350px;
  margin: 50% auto;
  padding: 20px;
}
</style>