// router.js

import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import Home from '../views/home.vue'
import Join from '../views/join_competetion.vue'

const routes = [
  {
    path: '/',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/join',
    name: 'join',
    component: Join
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router