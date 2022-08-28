import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import "./utils/rem"
import { Button } from 'vant';
import store from '@/store/index';

createApp(App).use(store).use(router).use(Button).mount('#app')
