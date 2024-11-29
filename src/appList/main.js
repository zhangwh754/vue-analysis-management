import { createApp } from 'vue'
import AppList from './AppList.vue'
import { checkToken } from '@/utils/auth'

// Redirect to login if not authenticated
if (!checkToken()) {
  window.location.href = '/index.html'
} else {
  createApp(AppList).mount('#app')
}
