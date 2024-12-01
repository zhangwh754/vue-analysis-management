import { createRouter, createWebHashHistory } from 'vue-router'
import DocsList from '../views/DocsList.vue'
import DocViewer from '../views/DocViewer.vue'

const routes = [
  {
    path: '/',
    name: 'DocsList',
    component: DocsList,
  },
  {
    path: '/docDetail/:id',
    name: 'DocViewer',
    component: DocViewer,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
