<template>
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
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LoginForm from '@/pages/AuthPage/components/LoginForm.vue'; // Импорт формы входа
import RegisterForm from '@/pages/AuthPage/components/RegisterForm.vue'; // Импорт формы регистрации

export default defineComponent({
  name: 'AuthPage',
  components: {
    LoginForm, // Регистрация компонента формы входа
    RegisterForm, // Регистрация компонента формы регистрации
  },
  setup() {
    // Состояние для активной вкладки
    const tab = ref<'login' | 'register'>('login');

    // Обработчик для формы входа
    const handleLogin = (credentials: { email: string; password: string }) => {
      console.log('Данные для входа:', credentials);
      // Здесь можно вызвать API для входа
    };

    // Обработчик для формы регистрации
    const handleRegister = (data: { email: string; password: string; name: string }) => {
      console.log('Данные для регистрации:', data);
      // Здесь можно вызвать API для регистрации
    };

    return {
      tab, // Возвращаем состояние вкладки
      handleLogin, // Возвращаем обработчик входа
      handleRegister, // Возвращаем обработчик регистрации
    };
  },
});
</script>

<style scoped>
.auth-page {
  max-width: 400px;
  margin: 0 auto; 
  padding: 20px; 
}
</style>