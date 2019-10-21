<template>
    <div v-if="connectionError" class="w-full h-full absolute top-0 flex justify-center items-center">
        <div class="w-full h-full bg-black opacity-50 z-10 fixed">
        </div>
        <div class="w-1/2 h-32 bg-white z-20 py-5 text-center flex justify-center items-center">
            <p>
                Something went wrong. Please try again later!
            </p>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "ChatConnectionError",
    computed: {
      ...mapGetters(['connectionError'])
    }
  }
</script>

<style scoped>

</style>
