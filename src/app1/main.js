import { createApp } from 'vue'
import App from './App.vue'
import { checkAuth } from '@/utils/auth'

if (!checkAuth()) {
  window.location.href = '/index.html'
} else {
  localStorage.setItem('lastApp', 'app1')
  const app = createApp(App)
  app.mount('#app')
}
