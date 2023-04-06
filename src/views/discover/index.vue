<script setup lang="ts">
import TheModalTicket from '@/components/TheModalTicket.vue';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const isModal = ref(false)

const list = [
    {
    title : "Tortuga Music Festival Hotel Experience Packages",
    subtitle : "at Tortuga Music Festival",
    price : "275",
    date : "14-16 APR"
},
{
    title : "Shania Twain: Queen Of Me Tour",
    subtitle : "at Tortuga Music Festival",
    price : "249",
    date : "20 APR"
},
{
    title : "Joji Presents Smithereens Oblivio",
    subtitle : "at Madison Square Garden, New York, NY",
    price : "275",
    date : "06 May"
},
{
    title : "Ed Sheeran's New Album Subtract",
    subtitle : "at Kings Theatre, Brooklyn, NY",
    price : "750",
    date : "10 May"
},

]

</script>


<template>
    <div class="mx-auto container">
        <header-title :title="`${route.params.name} Tickets`" class="mt-4" /> 
        <div class="flex flex-wrap space-y-2 w-full  items-start mt-10">
            <vcn-accordion v-for="(data) in list"  @isModalTicket="isModal = !isModal"  class="w-full" :price="data.price" :title="data.title" :date="data.date" :subtitle="data.subtitle">
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facilis. Illo fuga cumque, molestiae cupiditate omnis fugiat aut provident consequuntur! Officiis repellat ipsa deserunt rem veniam, ea ducimus quam possimus.
            </div>
        </vcn-accordion>
        </div>
   <the-modal-ticket @close="isModal = false" :isModal="isModal"/>
    </div>
</template>