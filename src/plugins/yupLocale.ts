import { setLocale } from 'yup';

setLocale({
  mixed: {
    default: 'Поле невалидно',
    required: 'Это поле обязательно для заполнения',
    oneOf: 'Поле должно быть одним из следующих значений: ${values}',
    notOneOf: 'Поле не должно быть одним из следующих значений: ${values}',
  },
  string: {
    length: 'Поле должно содержать ровно ${length} символов',
    min: 'Поле должно содержать минимум ${min} символов',
    max: 'Поле должно содержать максимум ${max} символов',
    matches: 'Поле должно соответствовать шаблону: "${regex}"',
    email: 'Введите корректный email',
    url: 'Введите корректный URL',
    trim: 'Поле не должно содержать пробелов в начале и конце',
    lowercase: 'Поле должно быть в нижнем регистре',
    uppercase: 'Поле должно быть в верхнем регистре',
  },
  number: {
    min: 'Поле должно быть не меньше ${min}',
    max: 'Поле должно быть не больше ${max}',
    lessThan: 'Поле должно быть меньше ${less}',
    moreThan: 'Поле должно быть больше ${more}',
    positive: 'Поле должно быть положительным числом',
    negative: 'Поле должно быть отрицательным числом',
    integer: 'Поле должно быть целым числом',
  },
  date: {
    min: 'Дата должна быть позже ${min}',
    max: 'Дата должна быть раньше ${max}',
  },
  array: {
    min: 'Поле должно содержать не менее ${min} элементов',
    max: 'Поле должно содержать не более ${max} элементов',
  },
});