import {MESSAGES_ADD, MESSAGES_CHANGE, MESSAGES_CHANGE_LOADING, MESSAGES_CLEAR} from "../mutations.type";
import {MESSAGES_FETCH} from "../actions.type";
import ApiService from "../../services/api.service";

const messagesModule = {
  state: {
    messages: [],
    messagesLoading: false
  },
  getters: {
    messages(state) {
      return state.messages;
    },
    messagesLoading(state) {
      return state.messagesLoading;
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
    },
    [MESSAGES_CHANGE_LOADING](state, isLoading) {
      state.messagesLoading = isLoading;
    }
  },
  actions: {
    [MESSAGES_FETCH](context, channel) {
      context.commit(MESSAGES_CHANGE_LOADING, true);
      return ApiService.get(`channels/${channel.id}/messages`)
        .then(({data}) => {
          context.commit(MESSAGES_CHANGE, data['hydra:member']);
          context.commit(MESSAGES_CHANGE_LOADING, false);
        });
    }
  },
};

export default messagesModule;
