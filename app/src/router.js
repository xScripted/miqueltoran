import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/dieta',
      name: 'dieta',
      component: () => import('./views/Diet.vue')
    },
    {
      path: '/musica',
      name: 'musica',
      component: () => import('./views/Music.vue')
    },
    {
      path: '/idiomas',
      name: 'idiomas',
      component: () => import('./views/Lang.vue')
    }
  ]
})
