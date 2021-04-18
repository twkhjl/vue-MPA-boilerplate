import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cp/',
    name: 'CpHome',
    component: () => import('../views/Cp/Home.vue'),


  },
  {
    path: '/cp/about',
    name: 'CpAbout',
    component: () => import('../views/Cp/About.vue')
  },
  {
    path: '/cp/ttt',
    ncame: 'CpTtt',
    component: () => import('../views/Cp/Ttt.vue'),
    children: [
      
      {
        path: '',
        name: 'CpT0',
        component: () => import('../views/Cp/T0.vue'),


      },
      {
        path: 't1',
        name: 'CpT1',
        component: () => import('../views/Cp/T1.vue'),


      },
      {
        path: 't2',
        name: 'CpT2',
        component: () => import('../views/Cp/T2.vue'),


      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
