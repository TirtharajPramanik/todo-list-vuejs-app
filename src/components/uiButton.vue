<template>
	<button :type="type" class="btn" :class="color">
		<slot />
	</button>
</template>

<script lang="ts">
export default {
	props: {
		type: {
			type: String as () => 'button' | 'submit',
			default: 'button',
			required: false,
		},
		color: {
			type: String as () => 'green' | 'gray',
			default: 'green',
			required: false,
		},
	},
};
</script>

<style lang="css" scoped>
.btn {
	@apply bg-gradient-to-r hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-lg dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 w-max mx-auto;
}
.green {
	@apply text-white  from-emerald-500 via-emerald-600 to-emerald-700 focus:ring-emerald-300 dark:focus:ring-teal-800  shadow-emerald-500/50  dark:shadow-teal-800/80;
}

.gray {
	@apply text-white  from-slate-500 via-slate-600 to-slate-700  focus:ring-slate-300 dark:focus:ring-slate-800  shadow-slate-500/50  dark:shadow-slate-800/80;
}
</style>
