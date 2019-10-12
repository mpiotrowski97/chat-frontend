import Vue from 'vue'
import App from './App.vue'
import router from './router';
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import {confirmed, email, required} from "vee-validate/dist/rules";

import '@/assets/css/tailwind.css'

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

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
