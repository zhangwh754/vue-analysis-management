import { createApp } from 'vue';
import AppList from './AppList.vue';
import { checkAuth } from '@/utils/auth';

// Redirect to login if not authenticated
if (!checkAuth()) {
  window.location.href = '/index.html';
} else {
  createApp(AppList).mount('#app');
} 