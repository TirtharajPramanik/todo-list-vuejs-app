<template>
	<form @submit.prevent class="create-todo-form">
		<UiTextInput name="title" autofocus v-model="form.title">Title</UiTextInput>
		<UiTextArea name="content" v-model="form.content">Content</UiTextArea>
		<UiToggle v-model="form.done" />
		<UiButton type="submit" @click="create">Create</UiButton>
	</form>
</template>

<script lang="ts">
import { UiTextInput, UiTextArea, UiButton, UiToggle } from '@/components';
import { Todo } from '@/types';
import { validateTodo } from '@/utils';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
	components: { UiTextInput, UiTextArea, UiButton, UiToggle },
	methods: {
		create() {
			this.todo = this.form;
		},
	},
	data() {
		return { form: { title: '', content: '', done: false } };
	},
	computed: {
		todo: {
			get() {
				const val = localStorage.getItem('todo');
				if (val) return JSON.parse(val);
				return {} as Todo;
			},
			set(val: Todo) {
				const validForm = validateTodo(val);
				if (validForm) localStorage.setItem('todo', JSON.stringify(validForm));
			},
		},
	},
});
</script>

<style lang="css" scoped>
.create-todo-form {
	@apply max-w-lg mx-auto p-5 rounded-md flex flex-col space-y-8;
}
</style>
