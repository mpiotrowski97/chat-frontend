import {MESSAGES_ADD, MESSAGES_CLEAR} from "../mutations.type";

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
    }
  },
  actions: {
    
  },
};

export default messagesModule;
