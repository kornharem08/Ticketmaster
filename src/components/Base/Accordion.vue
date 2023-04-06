<script setup lang="ts">
import { ref } from 'vue';
import { useTicketStore } from '@/stores/ticket.ts'
const ticket = useTicketStore()
const props = defineProps({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    date: { type: String, required: true },
    price: { type: String, required: true },
  bar: Number
})


const isOpen = ref(false)
const emit = defineEmits(["isModalTicket", "toggle"]);
function toggle() {
    isOpen.value = !isOpen.value
}
function isModalTicket() {
    ticket.setticket({
        name: props.title,
        price: props.price
    })
    console.log(ticket);

    emit('isModalTicket')
}
</script>
<template>
    <div class="border border-gray-300 rounded-md">
        <div class="flex items-center justify-between p-4 cursor-pointer relative">
            <span class=" text-gray-600" :class="{ 'transform rotate-180': isOpen }">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20">
                    <path d="M10 14L3 7h14z" />
                </svg>
            </span>
            <div class="flex space-x-2 w-full pl-8" @click="toggle">

                <span class="border-r px-2">
                   <span class="text-xl font-bold text-blue-500 ">{{ date }} </span> <br>
                  <span class="text-sm font-bold text-violet-600-500 "> ${{ price}}</span>  
                </span>
                <div>
                    <h3 class="text-lg font-medium">{{ title }}</h3>
                    <h3 class="text-sm font-medium text-gray-400">{{ subtitle }}</h3>
                </div>

            </div>
            <div class="w-32">
                <vcn-button name="Buy Ticket" @click="isModalTicket()" />
            </div>

        </div>
        <div class="p-4" v-show="isOpen">
            <slot></slot>
        </div>
    </div>
</template>
  

  