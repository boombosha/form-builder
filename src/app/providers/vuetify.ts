// Импортируем необходимые модули Vuetify
import { createVuetify, type VuetifyOptions } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/lib/styles/main.css'

// Опции для конфигурации Vuetify
const vuetifyOptions: VuetifyOptions = {
  components, // Регистрируем все компоненты Vuetify
  directives, // Регистрируем все директивы Vuetify
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'dark', // Используем тёмную тему по умолчанию
    themes: {
      light: {
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          primary: '#6200EE',
          'primary-darken-1': '#3700B3',
          secondary: '#03DAC6',
          'secondary-darken-1': '#018786',
          error: '#B00020',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
      },
    },
  },
};

// Создаем и экспортируем экземпляр Vuetify
export default createVuetify(vuetifyOptions);