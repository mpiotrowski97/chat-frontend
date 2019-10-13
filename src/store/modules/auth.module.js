import jwtService from "../../services/jwt.service";
import {CHECK_AUTH, LOGIN, LOGOUT} from "../actions.type";
import {NOTIFICATIONS_PUSH, PURGE_AUTH, SET_AUTH} from "../mutations.type";
import ApiService from "../../services/api.service";
import authService from "../../services/auth.service";

const authModule = {
  state: {
    isAuthenticated: !!jwtService.getToken()
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    }
  },
  mutations: {
    [SET_AUTH](state, token) {
      state.isAuthenticated = true;
      jwtService.saveToken(token);
    },
    [PURGE_AUTH](state) {
      state.isAuthenticated = false;
      jwtService.destroyToken();
    }
  },
  actions: {
    [LOGIN](context, credentials) {
      return new Promise((resolve) => {
        authService.login(credentials)
          .then(({data}) => {
            context.commit(SET_AUTH, data.token);
            resolve();
          })
          .catch(() => {
            context.commit(NOTIFICATIONS_PUSH, {id: 'login-failed', message: 'Credentials are invalid', type: 'danger'})
          })
      })
    },
    [LOGOUT](context) {
      context.commit(PURGE_AUTH);
    },
    [CHECK_AUTH](context) {
      if (jwtService.getToken()) {
        ApiService.setHeader();
        context.commit(SET_AUTH, jwtService.getToken());
      } else {
        context.commit(PURGE_AUTH);
      }
    },
  },
};

export default authModule;
