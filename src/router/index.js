import { createRouter, createWebHashHistory } from 'vue-router'
import History from '../views/HistoryView.vue'
import Contact from '../views/ContactView.vue'
import KeypadView from '../views/KeypadView.vue'

const routes = [
  {
    path: '/',
    name: 'contact',
    component: Contact
  },

  {
    path: '/history',
    name: 'history',
    component: History
  },

  {
    path: '/keypad',
    name: 'keypad',
    component: KeypadView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
