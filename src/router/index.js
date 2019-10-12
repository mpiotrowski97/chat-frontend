import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: "chat",
      path: "/chat",
      component: () => import("../views/Chat")
    },
    {
      name: "login",
      path: "/login",
      component: () => import("../views/Login")
    },
    {
      name: "register",
      path: "/register",
      component: () => import("../views/Register")
    },
  ]
});
