import Vue from 'vue';
import Router from 'vue-router';
import LogIn from '../views/LogIn';
import SignUp from '../views/SignUp';
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
      component: LogIn
    },
    {
      name: 'Sign Up',
      path: '/signup',
      component: SignUp
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
