import Vue from 'vue';
import Router from 'vue-router';
import logIn from '../views/logIn';
import signUp from '../views/signUp';
import ProfilePage from '../views/ProfilePage';
import Cart from '../views/Cart';
import OrderTable from '../views/OrderTable';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Loign',
      path: '/login',
      component: logIn
    },
    {
      name: 'Sign Up',
      path: '/signup',
      component: signUp
    },
    {
      name: 'Profile page',
      title: 'Profile page',
      path: '/profilepage',
      component: ProfilePage
    },
    {
      name: 'Cart',
      title: 'Cart',
      path: '/cart',
      component: Cart,
        props:{
        customer_id: true
        }
    },
    {
      name: 'Orders',
      title: 'Orders',
      path: '/orders',
      component: OrderTable
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})
