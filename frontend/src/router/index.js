import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/Login';
import Signup from '../views/Signup';
import Profile from '../views/Profile';
import Cart from '../views/Cart.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      title: 'Profile',
      path: '/profile',
      component: Profile
    },
    {
      title: 'Cart',
      path: '/cart',
      component: Cart,
        props:{
        customer_id: true
        }
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})
