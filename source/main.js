import './styles/main.scss';
import App from './components/app';
import { createApp } from 'vue';
import VueApp from './components/vue-app.vue';

window.App = new App();
createApp(VueApp).mount('#app');