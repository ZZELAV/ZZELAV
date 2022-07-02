import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import CvView from '@/views/CvView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

const routes = [
  {
    path: '/',
    name: 'about',
    component: AboutView
  },
  {
    path: '/cv',
    name: 'cv',
    component: CvView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
