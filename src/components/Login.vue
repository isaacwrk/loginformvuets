<template>
<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Login
      </h2>
    </div>
    <form @submit.prevent="onSubmit" class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Usuário</label>
          <input 
          v-model="form.username"
          id="email-address"
          name="user" 
          required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
          placeholder="Usuário">
        </div>
        <div>
          <label for="password" class="sr-only">Senha</label>
          <input 
          v-model="form.password"
          id="password" 
          name="password" 
          type="password" 
          autocomplete="current-password" 
          required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
          placeholder="Senha">
        </div>
      </div>

    <div role="alert" v-if="userService.state.error != userService.state.username">
        <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">Error</div>
        <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>{{userService.state.error}}.</p>
        </div>
    </div>
    
      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Login
        </button>
      </div>
    </form>
  </div>
</div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue';
import userService from '@/services/user'

const name = defineComponent({
    setup(){
        const form = reactive({
            username:'',
            password:''
        })

        const onSubmit = () =>{
            userService.login(form.username, form.password)
            form.username = ''
            form.password = ''
        }
        return { form, userService, onSubmit}
    }
});

export default name;
</script>

<style>

</style>