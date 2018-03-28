import Vue from 'vue';
import Router from 'vue-router';
import logIn from '../views/logIn';
import signUp from '../views/signUp';
import ProfilePage from '../views/ProfilePage';
import Cart from '../views/Cart';
import OrderTable from '../views/OrderTable';
import Logout from '../views/Logout';



Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: logIn
    },
    {
      path: '/signup',
      component: signUp
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
      title: 'Orders',
      path: '/orders',
      component: OrderTable
    },
    {
      path: '/logout',
      component: Logout
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})
