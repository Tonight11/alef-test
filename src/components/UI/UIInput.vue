<script setup>
	defineProps({
		id: String,
		label: String,
		modelValue: [String, Number],
		type: {
			type: String,
			default: 'text',
		},
	});
</script>

<template>
	<div class="input-field">
		<label :for="id">{{ label }}</label>
		<input
			:id="id"
			class="input-field__item"
			:value="modelValue"
			:type="type"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
	</div>
</template>

<style scoped>
	.input-field {
		display: flex;
		flex-direction: column;
		background: #ffffff;

		border: 1px solid #f1f1f1;
		border-radius: 4px;
		padding: 8px 16px;
		margin-bottom: 10px;
	}
	label {
		font-size: 13px;
		color: rgba(17, 17, 17, 0.48);
		margin-bottom: 2px;
	}
	.input-field__item {
		flex: 1;

		font-size: 14px;
		color: #111111;
	}
</style>
