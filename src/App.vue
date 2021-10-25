<template>
<div v-if="!userService.getters.isLoggedIn" class="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mr-4 ml-4">
  <Login/>
</div>
<div v-else class="min-h-full h-24 flex flex-col w-2/4 text-center inline-table text-2xl mr-3 ml-3 mt-10 rounded shadow-xl">
  <h2 class="text-green-700 hover:text-green-500">Olá, {{userService.state.name}}</h2>
  <Counter/>
  <button @click="userService.logout()" class="rounded py-3 text-sm px-6 text-white bg-red-600 hover:bg-red-700">
    Sair
  </button>
</div>

</template>

<script lang="ts">

import Login from '@/components/Login.vue'
import userService from '@/services/user'
import Counter from '@/components/Counter.vue'
import { defineComponent, onMounted } from '@vue/runtime-core'



export default defineComponent({
  name: 'App',
  components: { Login, Counter },
  setup() {
    onMounted(userService.getUser)
    return { userService }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
