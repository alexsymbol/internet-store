import Vue from 'vue';
import Router from 'vue-router';
import logIn from '../views/logIn';
import signUp from '../views/signUp';
import ProfilePage from '../views/ProfilePage';
import BindingAccount from '../views/BindingAccount';
import Basket from '../views/Basket';
import Payment from '../views/Payment';
import Buy from '../views/Buy';

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
      title: 'Basket',
      path: '/basket',
      component: Basket
    },
    {
      title: 'Payment',
      path: '/payment',
      component: Payment
    },
    {
      title: 'Buy',
      path: '/buy',
      component: Buy
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})
