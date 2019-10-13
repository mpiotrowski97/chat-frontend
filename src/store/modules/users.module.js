import {OFFLINE_USER, ONLINE_USER, ONLINE_USERS, SET_USERS} from "../mutations.type";
import {USERS_FETCH} from "../actions.type";
import ApiService from "../../services/api.service";

const usersModule = {
  state: {
    users: []
  },
  getters: {
    users(state) {
      return state.users;
    }
  },
  mutations: {
    [SET_USERS](state, users) {
      state.users = users;
    },
    [ONLINE_USERS](state, payload) {
      const {ids} = payload;

      state.users = state.users.map(user => {
        if (ids.includes(user.id)) {
          user.online = true;
        }

        return user;
      });
    },
    [ONLINE_USER](state, payload) {
      let found = false;
      state.users = state.users.map(user => {
        if (user.id === payload.id) {
          user.online = true;
          found = true;
        }

        return user;
      });

      if (!found) {
        state.users.push(payload);
      }
    },
    [OFFLINE_USER](state, payload) {
      state.users = state.users.map(user => {
        if (user.id === payload.id) {
          user.online = false;
        }

        return user;
      });
    }
  },
  actions: {
    [USERS_FETCH]() {
      return ApiService.get('users');
    }
  },
};

export default usersModule;
