import { createApp } from 'vue'
import App from './App.vue'
import { checkToken } from '@/utils/auth'

// Check authentication before creating app
if (!checkToken()) {
  window.location.href = '/index.html'
} else {
  localStorage.setItem('lastApp', 'app2')
  const app = createApp(App)
  app.mount('#app')
}
