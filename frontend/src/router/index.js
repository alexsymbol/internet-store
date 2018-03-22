import Vue from 'vue';
import Router from 'vue-router';
import logIn from '../views/logIn';
import signUp from '../views/signUp';
import ProfilePage from '../views/ProfilePage';
import BindingAccount from '../views/BindingAccount';
import Cart from '../views/Cart';
import OrderTable from '../views/OrderTable';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      title: '',
      path: '/login',
      component: logIn
    },
    {
      title: '',
      path: '/signup',
      component: signUp
    },
    {
      title: 'Profile page',
      path: '/profilepage',
      component: ProfilePage
    },
    {
      title: 'Binding Account',
      path: '/bindingAccount',
      component: BindingAccount
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
      path: '/*',
      redirect: '/'
    }
  ]
})
