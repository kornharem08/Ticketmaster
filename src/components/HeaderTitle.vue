<script setup lang="ts">
defineProps<{
    title?: string
}>()

</script>
<template>
    <div class="flex items-center space-x-2">
        <h1 class="text-2xl font-bold text-gray-800">{{ title }}</h1>
        <slot></slot>
    </div>
</template>
  
