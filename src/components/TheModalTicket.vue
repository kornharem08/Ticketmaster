<script setup lang="ts">
import { useTicketStore } from '@/stores/ticket.ts'
import { useRouter } from 'vue-router'
const router = useRouter()
const ticket = useTicketStore()
defineProps({
    isModal: {
        type: Boolean,
        default: false,
    },

});
const emit = defineEmits(["close", "submitSuccess"]);
function closeModal() {
    emit("close");
}

function submit() {
    router.push({
        name: 'checkout'
    })
}
</script>

<template>
    <vcn-modal size="xl" v-if="isModal" @close="closeModal()">
        <template #header>
            <span class="font-bold"> {{ ticket.name }} </span>
        </template>
        <template #body>

            <div class="flex flex-col items-center justify-center">

                <div class="flex items-center justify-center rounded border border-gray-200 w-64">
                    <button @click="ticket.decrement" type="button"
                        class="h-10 w-12 leading-10 text-gray-600 transition hover:opacity-75">
                        &minus;
                    </button>

                    <span>
                        <input type="number" id="Quantity" :value="ticket.quantity"
                            class="h-10 w-full border-y-0 border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" />
                    </span>

                    <button @click="ticket.increment" type="button"
                        class="h-10 w-12 leading-10 text-gray-600 transition hover:opacity-75">
                        &plus;
                    </button>
                </div>
                <div class="mt-6 flex items-center justify-between w-full">
                    <p class="text-sm font-medium text-gray-900">Name</p>
                    <p class="text-sm font-semibold text-gray-900">{{ ticket.name }}</p>
                </div>
                <div class="mt-6 flex items-center justify-between w-full">
                    <p class="text-sm font-medium text-gray-900">Price Ticket</p>
                    <p class="text-sm font-semibold text-gray-900">${{ ticket.price }}</p>
                </div>
                <div class="mt-6 flex items-center justify-between w-full ">
                    <p class="text-sm font-medium text-gray-900">Total</p>
                    <p class="text-xl font-semibold text-gray-900">${{ ticket.sumprice }}</p>
                </div>

            </div>

        </template>

        <template #footer>
            <div class="justify-end flex items-center">
                <vcn-button name="ยืนยัน" @click="submit()" />
            </div>
        </template>
    </vcn-modal>
</template>