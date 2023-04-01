import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './Router'

createApp(App)
  .use(router)
  .mount('#app')
