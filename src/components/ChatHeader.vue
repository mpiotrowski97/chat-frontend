<template>
    <div class="py-5 px-8 bg-blue-300 flex justify-between items-center">
        <div>
            <a href="#" class="text-white font-medium text-xl">Vue Chat</a>
        </div>
        <div class="flex flex-row">
            <div class="border-r-2 border-blue-500 px-3 text-blue-500">{{ user.name }}</div>
            <a href="#" class="px-3 text-white" @click.prevent="onLogout">Logout</a>
        </div>
    </div>
</template>

<script>
  import {CONNECTION_DISCONNECT, LOGOUT} from "../store/actions.type";
  import {mapGetters} from "vuex";

  export default {
    name: "ChatHeader",
    computed: {
      ...mapGetters(['user'])
    },
    methods: {
      onLogout() {
        this.$store.dispatch(CONNECTION_DISCONNECT);
        this.$store.dispatch(LOGOUT);
        this.$router.push({name: 'login'});
      }
    }
  }
</script>

<style scoped>

</style>
