<template>
	<div
		id="toast-success"
		class="flex fixed xs:left-5 top-[85vh] items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow-[rgba(17,12,46,0.15)_0px_48px_100px_0px] dark:shadow-[rgba(17,12,46,1)_0px_48px_100px_0px] dark:text-gray-400 dark:bg-gray-800"
		role="alert"
		v-if="show"
	>
		<completeToast v-if="mode === 'complete'" />
		<incompleteToast v-else-if="mode === 'incomplete'" />
		<deleteToast v-else-if="mode === 'delete'" @delete="$emit('delete')" />

		<button
			type="button"
			class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
			data-dismiss-target="#toast-success"
			aria-label="Close"
			@click="$emit('close')"
		>
			<span class="sr-only">Close</span>
			<svg
				aria-hidden="true"
				class="w-5 h-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"
				></path>
			</svg>
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { completeToast, incompleteToast, deleteToast } from './toasts';
export default defineComponent({
	components: { completeToast, incompleteToast, deleteToast },
	props: { mode: { type: String, required: false, default: 'none' } },
	computed: {
		show() {
			return ['complete', 'incomplete', 'delete'].includes(this.mode);
		},
	},
});
</script>

<style lang="css" scoped></style>
