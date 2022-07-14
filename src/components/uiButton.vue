<template>
	<button
		:type="type"
		class="text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-emerald-800 shadow-lg shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 w-max mx-auto"
	>
		<slot />
	</button>
</template>

<script lang="ts">
export default { props: { type: String as () => 'button' | 'submit' } };
</script>
