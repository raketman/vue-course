import Vue from 'vue';
import Router from 'vue-router';

import MainPage from '../pages/Main'
import LoginPage from '../pages/Login'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: MainPage },
    { path: '/login', component: LoginPage },
    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});
