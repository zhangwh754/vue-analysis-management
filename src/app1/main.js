import { createApp } from 'vue'
import App from './App.vue'
import { checkToken } from '@/utils/auth'
import '@/assets/styles/index.scss'

if (!checkToken()) {
  window.location.href = '/analysis/index.html'
} else {
  localStorage.setItem('lastApp', 'app1')
  const app = createApp(App)
  app.mount('#app')
}
