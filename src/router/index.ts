import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BoardView from '../views/BoardView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'board',
    component: BoardView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
