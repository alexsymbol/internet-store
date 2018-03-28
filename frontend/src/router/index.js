import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/Login';
import signup from '../views/SignUp';
import profilepage from '../views/ProfilePage';
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
      component: signup
    },
    {
      title: 'Profile page',
      path: '/profilepage',
      component: profilepage
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
