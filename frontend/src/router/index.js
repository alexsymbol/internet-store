import Vue from 'vue';
import Router from 'vue-router';
import LogsIn from '../views/LogsIn';
import SignUp from '../views/SignUp';
import Profile from '../views/Profile';
import Cart from '../views/Cart';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'login',
      title: 'Login',
      path: '/login',
      component: LogsIn
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
