<template>
        <div>
            <h3 class="text-gray-600 font-bold text-3xl">
                Messages
            </h3>
            <hr>
            <div v-if="messagesLoading" class="w-full h-full flex justify-center items-center">
                <loader></loader>
            </div>
            <div v-if="!messagesLoading" ref="messages" class="mt-3 overflow-y-scroll" style="height: 600px">
                <div v-for="message of messages" :key="message.id"
                     class="text-gray-500 text-xs p-4 border-2 rounded flex justify-between mb-3">
                    <div>
                        <div class="font-bold text-gray-700 text-base">
                            {{ message.user.firstName }} {{ message.user.lastName }}
                            <span v-if="(+message.user.id) === (+user.id)">(me)</span>
                        </div>
                        <div class="text-sm">
                            <p>{{ message.body }}</p>
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
                <label for="message" class="text-gray-500 mb-2">New message</label>
                <textarea name="message" id="message" class="border-2 p-2 rounded"
                          placeholder="Enter message" v-model="message"></textarea>
                <div class="text-right">
                    <button class="bg-blue-500 py-1 px-2 rounded text-white mt-2" @click="sendMessage()">Send
                    </button>
                </div>
            </div>
        </div>
</template>

<script>
  import {CONNECTION_SEND_MESSAGE} from "../store/actions.type";
  import {mapGetters} from "vuex";
  import Loader from "./Loader";

  export default {
    name: "ChatMessages",
    components: {Loader},
    data() {
      return {
        message: ''
      }
    },
    computed: {
      ...mapGetters(['messages', 'user', 'messagesLoading'])
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
    }
  }
</script>

<style scoped>

</style>
