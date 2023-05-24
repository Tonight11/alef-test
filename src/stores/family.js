import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useFamilyStore = defineStore('family', () => {
	const fullName = ref('');
	const age = ref(null);
	const children = ref([]);
	const error = ref(false);
	const savedFamily = useLocalStorage('saved-family', []);

	const addChild = () => {
		children.value.push({ name: '', age: null });
	};

	const removeChild = index => {
		children.value.splice(index, 1);
	};

	const saveData = () => {
		if (
			!fullName.value ||
			!age.value ||
			children.value.some(child => !child.name || !child.age)
		) {
			error.value = true;
			return;
		}
		const userData = {
			fullName: fullName.value,
			age: age.value,
			children: children.value,
		};
		savedFamily.value.push(userData);
		fullName.value = '';
		age.value = null;
		children.value = [];
		error.value = false;
	};

	return {
		fullName,
		age,
		children,
		addChild,
		removeChild,
		saveData,
		savedFamily,
		error,
	};
});
