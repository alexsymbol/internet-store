import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/Login.vue';
import SignUp from '../views/Signup.vue';
import ProfilePage from '../views/Profilepage.vue';
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
