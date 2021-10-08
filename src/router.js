import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'empty'},
      component: () => import('./views/Login.vue')
    },
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import('./views/Home.vue')
    },
    {
      path: '/cameras',
      name: 'cameras',
      meta: {layout: 'main'},
      component: () => import('./views/Cameras.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      meta: {layout: 'main'},
      component: () => import('./views/Detail.vue')
    },
    {
      path: '/smartphones',
      name: 'smartphones',
      meta: {layout: 'main'},
      component: () => import('./views/Smartphones.vue')
    },
    {
      path: '/notebooks',
      name: 'notebooks',
      meta: {layout: 'main'},
      component: () => import('./views/Notebooks.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {layout: 'main'},
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/bracelets',
      name: 'bracelets',
      meta: {layout: 'main'},
      component: () => import('./views/Bracelets.vue')
    }
  ]
})
