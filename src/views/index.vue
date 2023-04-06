<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const ticketmastercategory = [
    {
        category: 'Family',
    },
    {
        category: 'Concert',
    },
    {
        category: 'Sport',
    },
    {
        category: 'Art & Theater',
    },
]

function select(name: string) {
    router.push({
        name: 'discover',
        params: {
            name
        }
    })
}
</script>

<template>
    <div class="container mx-auto p-10">
        <header-title title="  Browse by Category" />

        <div class="flex flex-wrap items-center lg:justify-between justify-center mt-10">
            <vcn-card v-for="(category, index) in ticketmastercategory" :category="category.category"
                @click="select(category.category)" :image="`https://picsum.photos/200/300?random=${index}`" />
        </div>

    </div>
</template>