import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/cv',
    name: 'CV',
    component: () => import('../views/CV.vue')
  },
  {
    path: '/research_projects',
    name: 'Research Projects',
    component: () => import('../views/ResearchProjects.vue')
  },
  {
    path: '/personal_projects',
    name: 'Personal Projects',
    component: () => import('../views/PersonalProjects.vue')
  },
  {
    path: '/tutoring',
    name: 'Tutoring',
    component: () => import('../views/Tutoring.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
