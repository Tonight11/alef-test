<script setup>
	import TheHeader from '@/components/TheHeader.vue';
	import { RouterView } from 'vue-router';
</script>

<template>
	<TheHeader />
	<div class="wrapper">
		<RouterView />
	</div>
</template>

<style scoped>
	.wrapper {
	}
</style>
