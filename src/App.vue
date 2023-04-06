<script setup lang="ts">
import CardContent from './components/CardContent.vue';
import TheHeader from './components/TheHeader.vue';
components: { CardContent }
</script>
<template>
  <the-header />
	<router-view />
</template>



