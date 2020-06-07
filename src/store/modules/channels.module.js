import {CHANNEL_SET_CURRENT, CHANNELS_SET, MESSAGES_CLEAR} from "../mutations.type";
import {CHANNEL_CHANGE, CHANNELS_FETCH, CONNECTION_SEND_MESSAGE, MESSAGES_FETCH} from "../actions.type";
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
      return new Promise((resolve) => {
        ApiService.get('channels')
          .then(({data}) => {
            context.commit(CHANNELS_SET, data);
            context.commit(CHANNEL_SET_CURRENT, data[0]);
            context.dispatch(MESSAGES_FETCH, data[0]).then(() => resolve());
          });
      })
    },
    [CHANNEL_CHANGE](context, channel) {
      return new Promise(resolve => {
        context.commit(CHANNEL_SET_CURRENT, channel);
        context.commit(MESSAGES_CLEAR);
        context.dispatch(CONNECTION_SEND_MESSAGE, {type: 'channelChange', channel});
        context.dispatch(MESSAGES_FETCH, channel).then(() => resolve());
      });
    }
  }
};

export default channelsModule;
