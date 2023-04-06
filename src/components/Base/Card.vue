<script setup lang="ts">
defineProps<{
    image?: string,
    category?: string
}>()

</script>

<template>
    <div class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 rounded-md overflow-hidden shadow-lg relative">
        <div class="overflow-hidden">
            <img  :src="image"
                class="focus:outline-none w-full h-44 hover:scale-110 transition-all" />
        </div>
        <div class="absolute bottom-1 left-1 py-2 px-4 text-white bg-black/30 backdrop-blur-sm">
            <span class="font-semibold">
                {{ category }}
            </span>
        </div>
    </div>
</template>