<template>
<transition name="slide" mode="out-in">
<div v-if="!userService.getters.isLoggedIn" class="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mr-4 ml-4">
  <Login/>
</div>
<div v-else class="min-h-full h-24 flex flex-col w-2/4 text-center inline-table text-2xl mr-3 ml-3 mt-10 rounded border-indigo-50 shadow-lg">
  <h2 class="text-green-700 hover:text-green-500">Olá, {{userService.state.name}}</h2>
     <Counter/>
  <button @click="userService.logout()" class="mt-3 mb-1 rounded py-3 text-sm px-6 text-white transition duration-500 ease-in-out bg-red-600 hover:bg-red-700 transform hover:-translate-y-1 hover:scale-110 ...">
    Sair
  </button>
</div>
</transition>
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
@keyframes slide-in{
		from{transform: translateY(-30px); opacity: 0;}
		to{transform: translateY(0px); opacity: 1;}
	}
	@keyframes slide-out{
		from{ transform: translateY(0px); opacity: 1;}
		to{transform: translateY(-30px);opacity: 0;}
	}
	.slide-enter-active{
		animation: slide-in 0.3s ease;
	}
	.slide-leave-active{
		animation: slide-out 0.3s ease;
	}
</style>
