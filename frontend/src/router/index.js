import Vue from 'vue';
import Router from 'vue-router';
import LogIn from '../views/LogIn';
import SignUp from '../views/SignUp';
import ProfilePage from '../views/ProfilePage';
import Cart from '../views/Cart.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: LogIn
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      title: 'Profile page',
      path: '/profilepage',
      component: ProfilePage
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
