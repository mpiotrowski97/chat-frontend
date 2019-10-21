<template>
    <div class="w-1/6 px-4">
        <h3 class="text-gray-600 font-bold text-3xl">
            Channels
        </h3>
        <hr>
        <div class="border-0 rounded">
            <ul class="border-2 rounded mt-3">
                <li class="p-6 border-b-2 cursor-pointer" v-for="channel of channels" :key="channel.id"
                    :class="{ 'selected-channel': channel.id === currentChannel.id}"
                    @click="changeChannel(channel)"># {{channel.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import {CHANNEL_CHANGE} from "../store/actions.type";
  import {mapGetters} from "vuex";

  export default {
    name: "ChatChannels",
    computed: {
      ...mapGetters(['currentChannel', 'channels'])
    },
    methods: {
      changeChannel(channel) {
        this.$store.dispatch(
          CHANNEL_CHANGE, channel
        );
      }
    }
  }
</script>

<style scoped lang="less">
    .selected-channel {
        @apply .bg-blue-400 .font-bold .text-white;
    }
</style>
