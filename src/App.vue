<template>
<div v-if="!userService.getters.isLoggedIn" class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <Login/>
</div>
<div v-else class="text-center text-2xl bg-gray-200 mr-32 ml-32 rounded">
  <h2 class="text-green-700 hover:text-green-500">Olá, {{userService.state.name}}</h2>
  <Counter/>
  <button @click="userService.logout()" class="rounded mt-2 py-3 text-sm px-6 text-white bg-red-600 hover:bg-red-700">
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
