import Vue from 'vue';
import Router from 'vue-router';
import LogIn from './views/LogIn.vue';
import SignUp from './views/SignUp.vue';
import Profile from '../views/Profile.vue';
import Cart from '../views/Cart.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'login',
      title: 'Login',
      path: '/login',
      component: LogIn
    },
    {
      name: 'signup',
      title: 'Signup',
      path: '/signup',
      component: SignUp
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
