import {CHANNEL_SET_CURRENT, CHANNELS_SET, MESSAGES_CLEAR} from "../mutations.type";
import {CHANNEL_CHANGE, CHANNELS_FETCH, CONNECTION_SEND_MESSAGE} from "../actions.type";
import ApiService from "../../services/api.service";

const channelsModule = {
  state: {
    channels: [],
    currentChannel: {}
  },
  getters: {
    channels(state) {
      return state.channels;
    },
    currentChannel(state) {
      return state.currentChannel;
    }
  }
  ,
  mutations: {
    [CHANNELS_SET](state, channels) {
      state.channels = channels;
    },
    [CHANNEL_SET_CURRENT](state, channel) {
      state.currentChannel = channel;
    }
  },
  actions: {
    [CHANNELS_FETCH](context) {
      return ApiService.get('channels')
        .then(({data}) => {
          context.commit(CHANNELS_SET, data['hydra:member']);
          context.commit(CHANNEL_SET_CURRENT, data['hydra:member'][0]);
        });
    },
    [CHANNEL_CHANGE](context, channel) {
      context.commit(CHANNEL_SET_CURRENT, channel);
      context.commit(MESSAGES_CLEAR);
      context.dispatch(CONNECTION_SEND_MESSAGE, {type: 'channelChange', channel})
    }
  }
};

export default channelsModule;
