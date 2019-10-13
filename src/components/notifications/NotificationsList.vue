<template>
    <div class="py-5">
        <notification v-for="notification of notifications" :key="notification.id"
                      :notification="notification">
        </notification>
    </div>
</template>

<script>
  import Notification from "./Notification";

  export default {
    name: "NotificationsList",
    components: {Notification},
    props: {
      notifications: {
        default: () => []
      }
    }
  }
</script>

<style scoped>

</style>
