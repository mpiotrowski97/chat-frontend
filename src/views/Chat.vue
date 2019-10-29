<template>
    <div class="h-full relative">
        <div v-if="isLoading" class="w-full h-full flex justify-center items-center">
            <loader></loader>
        </div>
        <div v-if="!isLoading">
            <chat-connection-error></chat-connection-error>

            <chat-header></chat-header>

            <div class="mt-4 flex flex-row">

                <chat-channels></chat-channels>

                <div class="w-4/6 h-full px-4">
                    <chat-messages></chat-messages>
                </div>
                <div class="w-1/6 px-4">
                    <chat-members></chat-members>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {
    CHANNELS_FETCH,
    CONNECTION_CONNECT,
    USERS_FETCH
  } from "../store/actions.type";
  import {mapGetters} from "vuex";
  import Loader from "../components/Loader";
  import ChatHeader from "../components/ChatHeader";
  import ChatChannels from "../components/ChatChannels";
  import ChatMembers from "../components/ChatMembers";
  import ChatConnectionError from "../components/ChatConnectionError";
  import ChatMessages from "../components/ChatMessages";

  export default {
    name: "Chat",
    components: {ChatMessages, ChatConnectionError, ChatMembers, ChatChannels, ChatHeader, Loader},
    data() {
      return {
        isLoading: false
      }
    },
    mounted() {
      this.isLoading = true;
      this.$store.dispatch(USERS_FETCH)
        .then(() => {
          this.$store.dispatch(CHANNELS_FETCH)
            .then(() => {
              this.$store.dispatch(CONNECTION_CONNECT);
              this.isLoading = false;
            });
        });
    },
    computed: {
      ...mapGetters(['users', 'user'])
    }
  }
</script>

<style scoped>

</style>
