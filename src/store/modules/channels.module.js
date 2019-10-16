import {CHANNELS_SET} from "../mutations.type";
import {CHANNELS_FETCH} from "../actions.type";
import ApiService from "../../services/api.service";

const channelsModule = {
  state: {
    channels: []
  },
  getters: {
    channels(state) {
      return state.channels;
    }
  },
  mutations: {
    [CHANNELS_SET](state, channels) {
      state.channels = channels;
    }
  },
  actions: {
    [CHANNELS_FETCH](context) {
      ApiService.get('channels')
        .then(({data}) => {
          context.commit(CHANNELS_SET, data['hydra:member']);
        })
    }
  }
};

export default channelsModule;
