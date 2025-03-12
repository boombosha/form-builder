<template>
  <v-form @submit.prevent="submit">
    <!-- Поле для ввода email -->
    <v-text-field
      v-model="login"
      label="Логин"
      :rules="loginRules"
      required
    />

    <!-- Поле для ввода пароля -->
    <v-text-field
      v-model="password"
      label="Пароль"
      type="password"
      :rules="passwordRules"
      required
    />

    <!-- Кнопка для отправки формы -->
    <v-btn type="submit" color="primary" :loading="isSubmitting">Войти</v-btn>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginForm',
  emits: ['submit'], // Событие для передачи данных наверх
  setup(_, { emit }) {
    // Состояние формы
    const login = ref('');
    const password = ref('');
    const isSubmitting = ref(false);

    // Правила валидации
    const loginRules = [
      (value: string) => !!value || 'Имя обязательно',
      (value: string) => value.length >= 2 || 'Имя должно быть не менее 2 символов',
    ];

    const passwordRules = [
      (value: string) => !!value || 'Пароль обязателен',
      (value: string) => value.length >= 6 || 'Пароль должен быть не менее 6 символов',
    ];

    // Обработчик отправки формы
    const submit = () => {
      if (!login.value || !password.value) return;

      isSubmitting.value = true; // Показываем состояние загрузки
      emit('submit', { login: login.value, password: password.value }); // Передаем данные наверх
      isSubmitting.value = false; // Сбрасываем состояние загрузки
    };

    return {
      login,
      password,
      isSubmitting,
      loginRules,
      passwordRules,
      submit,
    };
  },
});
</script>

<style scoped>
  button {
    margin-top: 20px;
  }
</style>