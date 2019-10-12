<template>
    <div class="flex items-center justify-center h-full w-full bg-blue-400 text-gray-700">
        <div class="w-2/6">
            <validation-observer v-slot="{ invalid }">
                <form>
                    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                        <div class="mb-4">
                            <validation-provider rules="required" v-slot="{ errors }">
                                <label class="block text-grey-darker text-sm font-bold mb-2" for="name">
                                    Name
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                       :class="{ 'border-red-500': errors[0] }"
                                       id="name"
                                       type="text" placeholder="Name" v-model="user.name">
                                <p class="text-red-500 text-xs italic pt-3" v-if="errors[0]">{{ errors[0] }}</p>
                            </validation-provider>
                        </div>
                        <div class="mb-4">
                            <validation-provider rules="required|email" v-slot="{ errors }">
                                <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                                    Email
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                       :class="{ 'border-red-500': errors[0] }"
                                       id="email"
                                       type="text" placeholder="Email" v-model="user.email">
                                <p class="text-red-500 text-xs italic pt-3" v-if="errors[0]">{{ errors[0] }}</p>
                            </validation-provider>
                        </div>
                        <div class="mb-4">
                            <validation-provider rules="required" ref="password" v-slot="{ errors }" vid="password">
                                <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                                    Password
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
                                       :class="{ 'border-red-500': errors[0] }"
                                       id="password" type="password" placeholder="******************"
                                       v-model="user.password">
                                <p class="text-red-500 text-xs italic pt-3" v-if="errors[0]">{{ errors[0] }}</p>
                            </validation-provider>
                        </div>
                        <div class="mb-6">
                            <validation-provider rules="required|confirmed:password" v-slot="{ errors }">
                                <label class="block text-grey-darker text-sm font-bold mb-2"
                                       for="password_confirmation">
                                    Confirm password
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
                                       :class="{ 'border-red-500': errors[0] }"
                                       id="password_confirmation" type="password" placeholder="******************"
                                       v-model="user.passwordConfirmation">
                                <p class="text-red-500 text-xs italic pt-3" v-if="errors[0]">{{ errors[0] }}</p>
                            </validation-provider>
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                                    :class="{ 'disabled': invalid }"
                                    type="button"
                                    :disabled="invalid">
                                Sign Up
                            </button>
                            <router-link :to="{name: 'login'}" class="text-blue-400 font-bold">Sign in</router-link>
                        </div>
                    </div>
                </form>
            </validation-observer>
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
    .disabled {
        @apply .bg-blue-300 .cursor-not-allowed
    }
</style>
