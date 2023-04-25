import { createRouter, createWebHistory } from 'vue-router'
import ListNewsItem from '../views/ListNewsView.vue'
import SearchNewsView from '../views/SearchNewsView.vue'

const routes = [
  {
    path: '/:page(\\d+)?',
    name: 'list',
    component: ListNewsItem
  },
  {
    path: '/search',
    name: 'search',
    component: SearchNewsView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
