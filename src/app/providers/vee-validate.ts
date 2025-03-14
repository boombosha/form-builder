import { defineRule, configure } from 'vee-validate';
import { required, min } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import ru from '@vee-validate/i18n/dist/locale/ru.json';

defineRule('required', required);
defineRule('min', min);

configure({
  validateOnInput: true,
  generateMessage: localize({
    ru,
  }),
});