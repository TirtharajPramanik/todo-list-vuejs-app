<template>
	<div class="container">
		<h1 class="txt-color text-lg">{{ todo.title }}</h1>
		<h3 class="txt-color">{{ todo.content }}</h3>
		<h5 class="txt-color">{{ todo.done }}</h5>
	</div>
</template>

<script lang="ts">
import { Todo } from '@/types';
import { defineComponent } from 'vue';

export default defineComponent({
	computed: {
		todo() {
			const val = localStorage.getItem('todo');
			if (val) return JSON.parse(val);
			return { title: 'No Todos Yet!' } as Todo;
		},
	},
});
</script>

<style lang="css" scoped>
.container {
	@apply mx-auto my-5 p-5 flex flex-col space-y-5;
}

.txt-color {
	@apply text-purple-800 dark:text-white;
}
</style>
