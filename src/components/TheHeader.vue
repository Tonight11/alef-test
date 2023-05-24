<script setup>
	import { RouterLink } from 'vue-router';
</script>

<template>
	<header class="header">
		<img alt="Vue logo" class="logo" src="@/assets/logo.svg" />

		<nav class="header__nav">
			<RouterLink class="header__link" to="/">Форма</RouterLink>
			<RouterLink class="header__link" to="/about">Превью</RouterLink>
		</nav>
	</header>
</template>

<style scoped>
	.header {
		display: flex;
		padding: 22px 55px;
	}
	.logo {
	}
	.header__nav {
		flex: 1;
		display: flex;
		justify-content: center;
		gap: 24px;
	}
	.header__link {
	}
</style>
