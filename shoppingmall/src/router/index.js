import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView/HomeView.vue'
import CartView from '@/components/CartView/CartView.vue'
import MineView from '@/components/MineView/MineView.vue'
import LoginView from '@/components/LoginView/LoginView.vue'
import RegisterView from '@/components/RegisterView/RegisterView.vue'

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
    },
		{
		  path: '/login',
		  name: 'LoginView',
		  component: LoginView
		},
		{
		  path: '/register',
		  name: 'RegisterView',
		  component: RegisterView
		}
  ]
})
