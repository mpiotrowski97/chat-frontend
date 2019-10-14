import Vue from 'vue'
import Vuex from 'vuex'
import notificationsModule from "./modules/notifications.module";
import authModule from "./modules/auth.module";
import usersModule from "./modules/users.module";
import connectionModule from "./modules/connection.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notificationsModule,
    authModule,
    usersModule,
    connectionModule
  }
});
