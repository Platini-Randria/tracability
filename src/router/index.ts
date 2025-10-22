import { createMemoryHistory, createRouter } from 'vue-router'

import AuthView from '@/view/auth.view.vue'
import UserAddView from '@/view/userAdd.view.vue'

const routes = [
  { path: '/', name: 'Auth', component: AuthView },
  { path: '/userAdd', name: 'UserAdd', component: UserAddView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})