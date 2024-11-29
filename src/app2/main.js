import { createApp } from 'vue'
import App from './App.vue'
import { checkAuth } from '@/utils/auth'

// Check authentication before creating app
if (!checkAuth()) {
  window.location.href = '/index.html'
} else {
  localStorage.setItem('lastApp', 'app2')
  const app = createApp(App)
  app.mount('#app')
}
