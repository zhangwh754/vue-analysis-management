import { createApp } from 'vue'
import App from './App.vue'
import { checkToken } from '@/utils/auth'
import '@/assets/styles/index.scss'

// Check authentication before creating app
if (!checkToken()) {
  window.location.href = '/analysis/index.html'
} else {
  localStorage.setItem('lastApp', 'app2')
  const app = createApp(App)
  app.mount('#app')
}
