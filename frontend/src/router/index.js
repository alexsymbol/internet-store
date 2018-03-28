import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/Login';
import Signup from '../views/Signup';
import Profilepage from '../views/Profilepage';
import Cart from '../views/Cart';

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
      title: 'Profile page',
      path: '/profilepage',
      component: Profilepage
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
