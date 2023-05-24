<script setup>
	import { useFamilyStore } from '@/stores/family';
	import { storeToRefs } from 'pinia';

	const { savedFamily } = storeToRefs(useFamilyStore());
</script>

<template>
	<div class="preview">
		<h1 class="preview__title">Персональные данные</h1>
		<div class="preview__row">
			<div v-for="family in savedFamily" :key="family.fullName">
				<p class="preview__name">{{ family.fullName }}, {{ family.age }}</p>
				<template v-if="family.children.length">
					<p class="preview__children-name">Дети:</p>
					<ul class="preview__childs">
						<li
							class="preview__child"
							v-for="(child, index) in family.children"
							:key="index"
						>
							{{ child.name }}, {{ child.age }} лет
						</li>
					</ul>
				</template>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.preview {
	}
	.preview__title {
		font-weight: 500;
		font-size: 16px;
		margin-bottom: 2px;
	}
	.preview__row {
		display: flex;
		flex-wrap: wrap;
		gap: 40px;
	}
	.preview__name {
		font-weight: 700;
		font-size: 16px;
		margin-bottom: 60px;
	}
	.preview__children-name {
		font-weight: 500;
		font-size: 16px;
		margin-bottom: 20px;
	}
	.preview__childs {
		display: inline-flex;
		flex-direction: column;
		gap: 20px;
	}
	.preview__child {
		display: inline-block;
		background: #f1f1f1;
		border-radius: 5px;
		padding: 10px 20px;
		font-weight: 700;
		font-size: 16px;
	}
</style>
