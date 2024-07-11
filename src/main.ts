import { createApp } from 'vue';
import App from '@/App.vue';
import '@/css/reset.scss';
import router from '@/router';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import { en } from '@/locale/en.ts';
import { ru } from '@/locale/ru.ts';

const app = createApp(App);

// vue router
app.use(router);

// directives
app.directive('lazyLoad', (el, binding) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = new Image();
                img.src = binding.value;

                img.addEventListener('load', () => {
                    el.setAttribute('src', img.src);
                    observer.unobserve(el);
                });
            }
        });
    });

    observer.observe(el);
});

const pinia = createPinia();
// pinia
app.use(pinia);

// locales
const i18n = createI18n({ legacy: false, locale: 'en', fallbackLocale: 'ru', messages: { en: en, ru: ru } });
app.use(i18n);

// mount vue on div#app
app.mount('#app');
