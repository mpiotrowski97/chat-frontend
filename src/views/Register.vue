<template>
    <div class="flex items-center justify-center h-full w-full bg-blue-400 text-gray-700">
        <div class="w-2/6">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="name">
                        Name
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="name"
                           type="text" placeholder="Name" v-model="user.name">
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email"
                           type="text" placeholder="Email" v-model="user.email">
                </div>
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-grey-darker mb-3"
                           id="password" type="password" placeholder="******************" v-model="user.password">
                    <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div class="mb-6">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="password_confirmation">
                        Confirm password
                    </label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-grey-darker mb-3"
                           id="password_confirmation" type="password" placeholder="******************"
                           v-model="user.passwordConfirmation">
                    <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
                        Sign Up
                    </button>
                    <router-link :to="{name: 'login'}" class="text-blue-400 font-bold">Sign in</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return {
        user: {
          name: '',
          email: '',
          password: '',
          passwordConfirmation: ''
        }
      }
    }
  }
</script>

<style scoped>
</style>
