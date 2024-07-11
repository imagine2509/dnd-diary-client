import { createApp } from 'vue';
import App from '@/App.vue';
import '@/css/reset.scss';
import router from '@/router';
import { i18n } from '@/locale/i18n.ts';
import { pinia } from '@/stores/pinia.ts';

const app = createApp(App);

// vue router
app.use(router);

// pinia
app.use(pinia);

// locales
app.use(i18n);

// mount vue on div#app
app.mount('#app');
