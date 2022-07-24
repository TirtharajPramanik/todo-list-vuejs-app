<template>
	<form @submit.prevent class="create-todo-form">
		<UiTextInput name="title" v-model="form.title">Title</UiTextInput>
		<UiTextArea name="content" v-model="form.content">Content</UiTextArea>
		<UiToggle v-model="form.done" />
		<UiButton type="submit" @click="create">Create</UiButton>
		<Transition name="bounce">
			<UiAlert class="alert" v-if="state === 'error'" state="error">{{
				msg
			}}</UiAlert>
		</Transition>
		<Transition name="bounce">
			<UiAlert class="alert" v-if="state === 'success'" state="success">{{
				msg
			}}</UiAlert>
		</Transition>
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
import { db } from '@/db';
import { State, Todo } from '@/types';
import { validateTodo } from '@/utils';
import { defineComponent } from 'vue';

export default defineComponent({
	components: { UiTextInput, UiTextArea, UiButton, UiToggle, UiAlert },
	methods: {
		async create() {
			try {
				const validForm = validateTodo(this.form);
				if (validForm) {
					const id = await db.todos.add({
						title: validForm.title,
						content: validForm.content,
						done: validForm.done,
					});
					if (id) {
						this.state = 'success';
						this.reset();
						return;
					}
				}
				this.state = 'error';
			} catch (error) {
				this.state = 'error';
			}
		},
		reset() {
			this.form = { title: '', content: '', done: false } as Todo;
		},
	},
	data() {
		return {
			form: { title: '', content: '', done: false } as Todo,
			state: 'working' as State,
		};
	},
	computed: {
		msg() {
			if (this.state === 'success') return 'New Todo Created! 🎉';
			else if (this.state === 'error')
				return 'Enter a Title and try submitting again! 👾';
		},
	},
});
</script>

<style lang="css" scoped>
.create-todo-form {
	@apply max-w-lg mx-auto p-5 rounded-md flex flex-col space-y-10;
}

.alert {
	@apply shadow-gray-300 dark:shadow-gray-800 drop-shadow-lg;
}

.bounce-enter-active {
	animation: bounce-in 0.5s;
}

.bounce-enter-from {
	display: none;
}

.bounce-leave-to {
	opacity: 0;
}
@keyframes bounce-in {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.25);
	}
	100% {
		transform: scale(1);
	}
}
</style>
