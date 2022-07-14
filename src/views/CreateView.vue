<template>
	<form @submit.prevent class="create-todo-form">
		<UiTextInput name="title" autofocus>Title</UiTextInput>
		<UiTextArea name="content">Content</UiTextArea>
		<UiToggle />
		<UiButton type="submit" @click="create">Create</UiButton>
	</form>
</template>

<script lang="ts">
import { UiTextInput, UiTextArea, UiButton, UiToggle } from '@/components';

export default {
	components: { UiTextInput, UiTextArea, UiButton, UiToggle },
	methods: {
		create() {
			return;
		},
	},
};
</script>

<style lang="css" scoped>
.create-todo-form {
	@apply max-w-lg mx-auto p-5 rounded-md flex flex-col space-y-8;
}
</style>
