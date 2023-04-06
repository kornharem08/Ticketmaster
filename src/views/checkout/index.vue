<script setup lang="ts">
import CardContent from '@/components/CardContent.vue';
import { useTicketStore } from '@/stores/ticket.ts'
import { useRouter } from 'vue-router'
const ticket = useTicketStore()
const router = useRouter()
</script>

<template>
    <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 h-screen py-10 sm:space-x-6">
        <div class="space-y-6">
            <card-content>
                <div>
                    <!-- <Icon icon="logos:astronomer" style="font-size: 24px;" /> -->
                    <header-title title="Delivery" />
                    <div class="text-gray-500 mt-4">
                        <p>Ticket Avaliable by Sun Apr 3,2023 </p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit tempora harum odio numquam, magnam rem facilis, ad possimus consequuntur inventore fugit consequatur nisi doloremque officia enim, aperiam blanditiis provident aliquam?</p>
                    </div>
                </div>
            </card-content>
            <card-content>
                <div>
                    <header-title title="Payment" />
                    <form class="mt-5 grid gap-6">
      <div class="relative">
        <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
          <img class="w-14 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">MasterCard - 9999</span>
            <p class="text-slate-500 text-sm leading-6">User name | exp. 00/11</p>
          </div>
        </label>
      </div>
      <div class="relative">
        <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
          <img class="w-14 object-contain" src="https://www.visa.com.my/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg" alt="" />
          <div class="ml-5">
            <span class="mt-2 font-semibold">Visa - 8888</span>
            <p class="text-slate-500 text-sm leading-6">User name | exp. 00/11</p>
          </div>
        </label>
      </div>

      <div class="flex text-xl space-x-4 text-blue-500 cursor-pointer">
      <Icon icon="ep:plus" style="font-size: 24px;" class="mr-4" />  Add New Card
      </div>

    </form>
                </div>
            </card-content>
            <div>
            <card-content>
                <div>
            
                    <header-title title="Address" />
                    <p class="mt-4 text-gray-500"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laboriosam sit recusandae, natus neque maiores in. Blanditiis doloribus amet consequatur porro quidem laboriosam nostrum! Rerum nihil aliquid tempore velit reiciendis.
                    </p>
        </div>
            </card-content>

    </div>
        </div>
        <div>
            <card-content>
                <div>
                   <div class="flex justify-between">
                    <header-title title="Total" />
                    <div>
                        $ {{ ticket.sumprice ?  ticket.sumprice : 0}}
                    </div>
                   </div>
                   <div class="font-xl font-semibold mt-4">
                    Ticket
                   </div>
                    <p> {{ticket.name ? ticket.name  : '-'}}</p>
                    <div class="font-xl font-semibold mt-4">
                    Notes from Seller
                   </div>
                   <p class="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad placeat illum eligendi, repudiandae eaque possimus quam labore voluptatibus explicabo quasi quibusdam consequatur aperiam ipsam distinctio perspiciatis. Mollitia fugit aliquam tenetur!</p>
                   <div class="font-xl font-semibold mt-4 mb-2">
                    Fees
                   </div>
                   <div class="flex justify-between mt-2">
                    <div v-if="ticket.name">
                        {{ ticket.name ? ticket.name  : '-'}} x {{ ticket.quantity }}
                    </div>
                    <div>
                        ${{ ticket.sumprice}}
                    </div>                    
                   </div>
                   <div class="flex justify-between mt-2">
                    <div >
                        Delivery
                    </div>
                    <div>
                       Free
                    </div>                    
                   </div>

                   <div class="flex justify-between mt-2">
                    <div v-if="ticket.name">
                        Total
                    </div>
                    <div>
                        ${{ ticket.sumprice}}
                    </div>                    
                   </div>
                   <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
                </div>
            </card-content>
        </div>
 

    </div>
</template>