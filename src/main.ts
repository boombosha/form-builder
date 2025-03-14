import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './app/providers/vee-validate';
import vuetify from './app/providers/vuetify.ts';
import '@mdi/font/css/materialdesignicons.min.css';
import './plugins/yupLocale';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify);
app.mount('#app')
