<template>
<form @submit.prevent="onSubmit">
  <v-text-field
    label="Логин"
    v-model="login.value.value"
    :error-messages="login.errorMessage.value"
  ></v-text-field>

  <v-text-field
    label="Пароль"
    type="password"
    v-model="password.value.value"
    :error-messages="password.errorMessage.value"
  ></v-text-field>
  <v-btn color="primary" type="submit">Submit</v-btn>
</form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
      login: yup.string().min(2).required(),
      password: yup.string().min(8).required(),
    });

    const { handleSubmit, handleReset } = useForm({
      validationSchema,
    });

    const login = useField('login', validationSchema);
    const password = useField('password', validationSchema);

    const onSubmit = handleSubmit(async (values) => {
      alert(JSON.stringify(values, null, 2));
    })
</script>

<style scoped>
</style>