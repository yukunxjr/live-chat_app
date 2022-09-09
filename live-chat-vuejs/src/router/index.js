import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome'
import Chatroom from '../views/Chatroom'

// eslint-disable-next-line no-unused-vars

const requireAuth = async (to, from, next) => {
  console.log('requireAuthが呼ばれています！')

  next()
}


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
