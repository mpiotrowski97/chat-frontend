<template>
    <div>
        <h3 class="text-gray-600 font-bold text-3xl">
            Members
        </h3>
        <hr>
        <div class="border-0 rounded">
            <ul class="border-2 rounded mt-3">
                <li v-for="user of users" :key="user.id" class="p-4 border-b-2 flex-row flex items-center">
                    {{ user.firstName }} {{ user.lastName }}
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
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "ChatMembers",
    computed: {
      ...mapGetters(['users'])
    }
  }
</script>

<style scoped>

</style>
