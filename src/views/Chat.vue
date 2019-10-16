<template>
    <div class="h-full">
        <div class="py-5 px-8 bg-blue-300 flex justify-between items-center">
            <div>
                <a href="#" class="text-white font-medium text-xl">Vue Chat</a>
            </div>
            <div class="flex flex-row">
                <div class="border-r-2 border-blue-500 px-3 text-blue-500">{{ user.name }}</div>
                <a href="#" class="px-3 text-white" @click.prevent="onLogout">Logout</a>
            </div>
        </div>

        <div class="mt-4 flex flex-row">
            <div class="w-1/6 px-4">
                <h3 class="text-gray-600 font-bold text-3xl">
                    Channels
                </h3>
                <hr>
                <div class="border-0 rounded">
                    <ul class="border-2 rounded mt-3">
                        <li class="p-6 border-b-2" v-for="channel of channels" :key="channel.id"># {{channel.name}}</li>
                    </ul>
                </div>
            </div>
            <div class="w-4/6 h-full px-4">
                <h3 class="text-gray-600 font-bold text-3xl">
                    Messages
                </h3>
                <hr>
                <div class="mt-3 overflow-y-scroll" style="height: 600px">
                    <div v-for="message of messages" :key="message.id"
                         class="text-gray-500 text-xs p-4 border-2 rounded flex justify-between mb-3">
                        <div>
                            <div class="font-bold text-gray-700 text-base">
                                {{ message.author }}
                            </div>
                            <div class="text-sm">
                                <p>{{ message.message }}</p>
                            </div>
                        </div>
                        <div class="text-right flex flex-col justify-between">
                            <div>
                                {{ message.createdAt }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
<!--                    <label for="message" class="text-gray-500 mb-2">@john</label>-->
                    <textarea name="message" id="message" class="border-2 p-2 rounded"
                              placeholder="Enter message" v-model="message"></textarea>
                    <div class="text-right">
                        <button class="bg-blue-500 py-1 px-2 rounded text-white mt-2" @click="sendMessage()">Send
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-1/6 px-4">
                <h3 class="text-gray-600 font-bold text-3xl">
                    Members
                </h3>
                <hr>
                <div class="border-0 rounded">
                    <ul class="border-2 rounded mt-3">
                        <li v-for="user of users" :key="user.id" class="p-4 border-b-2 flex-row flex items-center">
                            {{ user.name }}
                            <span v-if="user.online" class="text-xs bg-green-400 rounded px-1 ml-1">
                                Online
                            </span>
                            <span v-if="!user.online" class="text-xs bg-orange-400 rounded px-1 ml-1">
                                Offline
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {
    CHANNELS_FETCH,
    CONNECTION_CONNECT,
    CONNECTION_DISCONNECT,
    CONNECTION_SEND_MESSAGE,
    LOGOUT,
    USERS_FETCH
  } from "../store/actions.type";
  import {mapGetters} from "vuex";
  import {SET_USERS} from "../store/mutations.type";

  export default {
    name: "Chat",
    data() {
      return {
        message: '',
      }
    },
    mounted() {
      this.$store.dispatch(CHANNELS_FETCH);
      this.$store.dispatch(USERS_FETCH)
        .then(({data}) => {
          this.$store.commit(SET_USERS, data['hydra:member']);
          this.$store.dispatch(CONNECTION_CONNECT);
        });
    },
    methods: {
      sendMessage() {
        this.$store.dispatch(CONNECTION_SEND_MESSAGE, {
          type: 'newMessage',
          message: this.message,
          author: this.user.name
        });
        this.message = '';
      },
      onLogout() {
        this.$store.dispatch(CONNECTION_DISCONNECT);
        this.$store.dispatch(LOGOUT);
        this.$router.push({name: 'login'});
      }
    },
    computed: {
      ...mapGetters(['users', 'messages', 'user', 'channels'])
    }
  }
</script>

<style scoped>

</style>
