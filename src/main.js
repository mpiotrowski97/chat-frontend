import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import {ValidationProvider, ValidationObserver, extend} from "vee-validate";
import {confirmed, email, required} from "vee-validate/dist/rules";

import '@/assets/css/tailwind.css'
import {CHECK_AUTH} from "./store/actions.type";

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('email', {
  ...email,
  message: 'Please enter a valid email'
});

extend('confirmed', {
  ...confirmed,
  message: 'Please confirm password'
});

Vue.config.productionTip = false;

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch(CHECK_AUTH)]).then(next).catch(() => {
    router.push({name: 'auth.login'})
  })
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
