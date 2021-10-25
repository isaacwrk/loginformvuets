<template>
<div class="mt-2 bg-white">
    <div class="mt-2">
        <h1>Contador</h1>
        <h2>{{ counter }}</h2>
    </div>
    <div>
        <button class="cursor-pointer rounded text-sm mt-2 mr-2 py-3 px-6 text-white bg-red-600 hover:bg-red-700" @click="decreaseCounter">-</button>
        <button class="cursor-pointer rounded text-sm mt-2 mb-1 py-3 px-6 text-white bg-green-600 hover:bg-green-700" @click="increaseConter">+</button>
    </div>
</div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';

const contador = defineComponent({
     props:{
        initialValue:{
            type:Number
        }
    },
    
    setup(){
        let counter = ref(0)
        const decreaseCounter = function(){
            counter.value--
        }

        const increaseConter = function(){
            counter.value++
        }
        return{
            counter,
            decreaseCounter,
            increaseConter
        }
    }
});
export default contador;
</script>


<style>
</style>