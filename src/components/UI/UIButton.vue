<script setup>
	defineProps({
		label: String,
		disabled: Boolean,
		buttonClass: String,
	});

	const emits = defineEmits(['click']);

	const onClick = () => {
		emits('click');
	};
</script>

<template>
	<button :class="[buttonClass, 'btn']" @click="onClick" :disabled="disabled">
		{{ label }}
	</button>
</template>

<style>
	.btn {
		color: white;
		background: #01a7fd;
		border-radius: 100px;
		padding: 10px 20px;
		cursor: pointer;
		font-size: 14px;
	}

	.output {
		border: 2px solid #01a7fd;
		background-color: white;
		color: #01a7fd;
	}
	.no-border {
		border: none;
		background-color: white;
		padding: 0;
		color: #01a7fd;
	}
</style>
