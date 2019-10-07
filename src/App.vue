<template>
  <div>
    <div class="py-5 px-8 bg-blue-300 flex justify-between items-center">
      <div>
        <a href="#" class="text-white font-medium text-xl">Vue Chat</a>
      </div>
      <div class="flex flex-row">
        <div class="border-r-2 border-blue-500 px-3 text-blue-500">John Wick</div>
        <a href="#" class="px-3 text-white">Logout</a>
      </div>
    </div>

    <div class="mt-4 flex flex-row">
      <div class="w-1/6 px-6">
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
      <div class="w-4/6">
      </div>
      <div class="w-1/6">3</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
</style>
