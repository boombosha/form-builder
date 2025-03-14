<script setup lang="ts">
import logo from '@/pages/AuthPage/assets/logo.png';
import ThemeToggle from '@/widgets/theme-toggle/ui/ThemeToggle.vue';
</script>

<template>
  <v-app-bar color="primary" dark>
    <v-img :src="logo" alt="Логотип" max-width="170" class="pl-8" />
    <v-spacer></v-spacer>
    <ThemeToggle />
  </v-app-bar>
</template>

<style scoped>
</style>