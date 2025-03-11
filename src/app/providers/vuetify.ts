// Импортируем необходимые модули Vuetify
import { createVuetify, type VuetifyOptions } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Опции для конфигурации Vuetify
const vuetifyOptions: VuetifyOptions = {
  components, // Регистрируем все компоненты Vuetify
  directives, // Регистрируем все директивы Vuetify
  theme: {
    defaultTheme: 'light', // Используем светлую тему по умолчанию
    themes: {
      light: {
        colors: {
          primary: '#1976D2', // Основной цвет
          secondary: '#424242', // Вторичный цвет
          accent: '#82B1FF', // Акцентный цвет
        },
      },
    },
  },
};

// Создаем и экспортируем экземпляр Vuetify
export default createVuetify(vuetifyOptions);