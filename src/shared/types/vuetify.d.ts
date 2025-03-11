import 'vuetify/styles';
import { createVuetify } from 'vuetify';

// Расширяем типы Vuetify
declare module 'vuetify' {
  export interface VuetifyOptions {
    theme?: {
      defaultTheme?: string;
      themes?: Record<string, any>;
    };
  }
}

// Экспортируем экземпляр Vuetify
export default createVuetify;