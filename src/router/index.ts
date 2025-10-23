import {  createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router'

import AuthView from '@/view/auth.view.vue'
import UserAddView from '@/view/userAdd.view.vue'
import HomeView from '@/view/home.view.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/auth', name: 'Auth', component: AuthView },
  { path: '/add', name: 'UserAdd', component: UserAddView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,  
})

export default router