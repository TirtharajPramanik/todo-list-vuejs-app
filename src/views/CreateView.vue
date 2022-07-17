<template>
	<form @submit.prevent class="create-todo-form">
		<UiTextInput name="title" autofocus v-model="form.title">Title</UiTextInput>
		<UiTextArea name="content" v-model="form.content">Content</UiTextArea>
		<UiToggle v-model="form.done" />
		<UiButton type="submit" @click="create">Create</UiButton>
		<UiAlert v-if="state !== 'working'" :state="state">{{ msg }}</UiAlert>
	</form>
</template>

<script lang="ts">
import {
	UiTextInput,
	UiTextArea,
	UiButton,
	UiToggle,
	UiAlert,
} from '@/components';
import { State, Todo } from '@/types';
import { validateTodo } from '@/utils';
import { defineComponent } from 'vue';

export default defineComponent({
	components: { UiTextInput, UiTextArea, UiButton, UiToggle, UiAlert },
	methods: {
		create() {
			this.todo = this.form;
		},
	},
	data() {
		return {
			form: { title: '', content: '', done: false } as Todo,
			state: 'working' as State,
		};
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
				if (validForm) {
					localStorage.setItem('todo', JSON.stringify(validForm));
					this.state = 'success';
					return;
				}
				this.state = 'error';
			},
		},
		msg() {
			if (this.state == 'success') return 'New Todo Created! 🎉';
			else if (this.state == 'error')
				return 'Enter a Title and try submitting again! 👾';
		},
	},
});
</script>

<style lang="css" scoped>
.create-todo-form {
	@apply max-w-lg mx-auto p-5 rounded-md flex flex-col space-y-8;
}
</style>
