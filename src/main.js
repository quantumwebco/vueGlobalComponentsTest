import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Plugins from "./plugins/Plugins";
createApp(App).use(Plugins).mount('#app')
