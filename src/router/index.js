// router.js

import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/register.vue'
import Login from '../views/login.vue'

const routes = [
  {
    path: '/',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router