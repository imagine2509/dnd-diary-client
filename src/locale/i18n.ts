import { createI18n } from 'vue-i18n';
import { en } from '@/locale/en.ts';
import { ru } from '@/locale/ru.ts';

export const i18n = createI18n({ legacy: false, locale: 'en', fallbackLocale: 'ru', messages: { en: en, ru: ru } });
