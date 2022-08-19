import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import "./utils/rem"
import { Button } from 'vant';
createApp(App).use(router).use(Button).mount('#app')
