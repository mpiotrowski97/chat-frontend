<template>
    <router-view></router-view>
</template>

<script>

  export default {
    name: 'app',
  }
</script>

<style>
    html, body {
        @apply .w-full .h-full ;
    }

    .disabled {
        @apply .bg-blue-200 .cursor-not-allowed !important
    }
</style>
