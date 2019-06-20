import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView/HomeView.vue'
import CartView from '@/components/CartView/CartView.vue'
import MineView from '@/components/MineView/MineView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/CartView',
      name: 'CartView',
      component: CartView
    },
    {
      path: '/MineView',
      name: 'MineView',
      component: MineView
    }
  ]
})
