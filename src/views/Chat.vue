<template>
    <div>
        <div class="py-5 px-8 bg-blue-300 flex justify-between items-center">
            <div>
                <a href="#" class="text-white font-medium text-xl">Vue Chat</a>
            </div>
            <div class="flex flex-row">
                <div class="border-r-2 border-blue-500 px-3 text-blue-500">John Wick</div>
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
                        <li class="p-6 border-b-2 bg-blue-600 text-white"># General</li>
                        <li class="p-6 border-b-2"># Weapons</li>
                        <li class="p-6"># Combat</li>
                    </ul>
                </div>
            </div>
            <div class="w-4/6 h-full px-4">
                <h3 class="text-gray-600 font-bold text-3xl">
                    Messages
                </h3>
                <hr>
                <div class="mt-3 h-64 overflow-y-scroll">
                    <div v-for="message of messages" :key="message" class="text-gray-500 p-6 border-2 rounded flex justify-between mb-3">
                        <div>
                            <div class="font-bold text-gray-700 text-lg">
                                John Wick
                            </div>
                            <div class="text-lg">
                                <p>{{ message }}</p>
                            </div>
                        </div>
                        <div class="text-right flex flex-col justify-between">
                            <div>
                                @john
                            </div>
                            <div>
                                11:49:32 pm
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="message" class="text-gray-500 mb-2">@john</label>
                    <textarea name="message" id="message" class="border-2 p-2 rounded"
                              placeholder="Enter message" v-model="message"></textarea>
                    <div class="text-right">
                        <button class="bg-blue-500 py-1 px-2 rounded text-white mt-2" @click="sendMessage()">Send</button>
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
                        <li class="p-4 border-b-2 flex-row flex items-center">John Wick <span
                                class="text-xs bg-green-400 rounded px-1 ml-1">Online</span></li>
                        <li class="p-4 border-b-2 flex-row flex items-center">Paweł Kukiz <span
                                class="text-xs bg-orange-400 rounded px-1 ml-1">Offline</span></li>
                        <li class="p-4 flex-row flex items-center">Grzegorz Schetyna <span
                                class="text-xs bg-orange-400 rounded px-1 ml-1">Offline</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {LOGOUT} from "../store/actions.type";

  export default {
    name: "Chat",
    data() {
      return {
        messages: [],
        message: '',
        connection: null
      }
    },
    mounted() {
      this.connection = new WebSocket("ws://localhost:8002");

      this.connection.onmessage = (event) => {
        this.messages.push(event.data);
      }
    },
    methods: {
      sendMessage() {
        this.messages.push(this.message);
        this.connection.send(this.message);
        this.message = '';
      },
      onLogout() {
        this.$store.dispatch(LOGOUT);
        this.$router.push({name: 'login'});
      }
    }
  }
</script>

<style scoped>

</style>
