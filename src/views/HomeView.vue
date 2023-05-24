<script setup>
	import UIInput from '../components/UI/UIInput.vue';
	import UIButton from '../components/UI/UIButton.vue';
	import { useFamilyStore } from '@/stores/family';
	import { storeToRefs } from 'pinia';

	const { addChild, removeChild, saveData } = useFamilyStore();

	const { fullName, age, children, error } = storeToRefs(useFamilyStore());
</script>

<template>
	<div class="form">
		{{ familyStore }}
		<h1 class="form__title">Персональные данные</h1>
		<UIInput id="1" v-model="fullName" label="Имя" />
		<UIInput id="2" v-model="age" label="Возраст" type="number" />

		<div class="form__children">
			<div class="form__top">
				<h2 class="form__subtitle">Дети (макс. 5)</h2>
				<UIButton
					@click="addChild"
					label="+ Добавить ребенка"
					:disabled="children.length >= 5"
					button-class="output"
				/>
			</div>
		</div>

		<div class="children-info">
			<div v-for="(child, index) in children" :key="index" class="child-info">
				<UIInput
					:id="Math.random() * index + '1'"
					v-model="child.name"
					label="Имя"
				/>
				<UIInput
					:id="Math.random() * index + '2'"
					v-model="child.age"
					label="Возраст"
					type="number"
				/>
				<UIButton
					@click="removeChild(index)"
					label="Удалить"
					button-class="no-border"
				/>
			</div>
		</div>

		<div v-if="error" class="error-message">
			Пожалуйста, правильно заполните все поля!
		</div>
		<UIButton @click="saveData" label="Сохранить" />
	</div>
</template>

<style scoped>
	.form__title {
		font-weight: 500;
		font-size: 16px;
		margin-bottom: 20px;
	}

	.form__children {
		margin-top: 35px;
	}
	.form__top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 10px;
	}
	.form__subtitle {
		font-weight: 500;
		font-size: 16px;
	}
	.children-info {
		margin-bottom: 30px;
	}
	.child-info {
		display: flex;
		align-items: center;
		gap: 18px;
	}

	.error-message {
		color: red;
	}
</style>
