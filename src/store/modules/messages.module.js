import {MESSAGES_ADD} from "../mutations.type";

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
    }
  },
  actions: {
    
  },
};

export default messagesModule;
