import Vue from 'vue'
import Vuex from 'vuex'
import notificationsModule from "./modules/notifications.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notificationsModule
  }
});
