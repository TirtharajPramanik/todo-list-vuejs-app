<template>
	<div class="mx-auto my-5 p-5 flex flex-col space-y-5">
		<h1 class="text-purple-800 text-lg">{{ todo.title }}</h1>
		<h3 class="text-purple-800">{{ todo.content }}</h3>
		<h5 class="text-purple-800">{{ todo.done }}</h5>
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
