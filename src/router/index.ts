import { createRouter, createWebHistory } from 'vue-router';
import AuthPage from '@/pages/AuthPage/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AuthPage',
      component: AuthPage,
    },
  ],
})

export default router
