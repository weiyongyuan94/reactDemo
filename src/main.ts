import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
const app = createApp(App)
app.provide("data","duxin")
app.mount('#app')