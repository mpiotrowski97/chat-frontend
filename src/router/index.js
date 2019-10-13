import Vue from "vue";
import Router from "vue-router";

import store from '../store';

Vue.use(Router);

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {name: 'chat'}
    },
    {
      name: "chat",
      path: "/chat",
      component: () => import("../views/Chat"),
      beforeEnter(to, from, next) {
        store.getters['isAuthenticated'] ? next() : next({name: 'login'})
      }
    },
    {
      name: "login",
      path: "/login",
      component: () => import("../views/Login"),
      beforeEnter(to, from, next) {
        !store.getters['isAuthenticated'] ? next() : next({name: 'chat'})
      }
    },
    {
      name: "register",
      path: "/register",
      component: () => import("../views/Register"),
      beforeEnter(to, from, next) {
        !store.getters['isAuthenticated'] ? next() : next({name: 'chat'})
      }
    },
  ]
});

export default router;
