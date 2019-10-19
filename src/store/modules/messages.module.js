import {MESSAGES_ADD, MESSAGES_CHANGE, MESSAGES_CLEAR} from "../mutations.type";
import {MESSAGES_FETCH} from "../actions.type";
import ApiService from "../../services/api.service";

const messagesModule = {
  state: {
    messages: []
  },
  getters: {
    messages(state) {
      return state.messages;
    }
  },
  mutations: {
    [MESSAGES_ADD](state, message) {
      state.messages = [...state.messages, message];
    },
    [MESSAGES_CLEAR](state) {
      state.messages = [];
    },
    [MESSAGES_CHANGE](state, messages) {
      state.messages = messages;
    }
  },
  actions: {
    [MESSAGES_FETCH](context, channel) {
      return ApiService.get(`channels/${channel.id}/messages`)
        .then(({data}) => {
          context.commit(MESSAGES_CHANGE, data['hydra:member'])
        });
    }
  },
};

export default messagesModule;
