<template>
	<li class="container group hover:transition duration-500">
		<h2 class="title">{{ data.title }}</h2>
		<h3 class="content">{{ data.content }}</h3>
		<div class="flex justify-around">
			<PencilAltIcon class="edt-icn" />
			<h4 v-if="data.done" class="done">Completed</h4>
			<h4 v-else class="undone">Incomplete</h4>
			<TrashIcon class="dlt-icn" />
		</div>
	</li>
</template>

<script lang="ts">
import { PencilAltIcon, TrashIcon } from '@heroicons/vue/outline';
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		data: { type: Object, required: true },
	},
	components: { PencilAltIcon, TrashIcon },
});
</script>

<style lang="css" scoped>
.container {
	@apply mx-auto px-4 py-6 flex flex-col space-y-12 max-w-md;
	@apply rounded-md;
	@apply shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:shadow-[0px_8px_24px_rgba(0,0,0,0.2)];
	@apply hover:shadow-[0px_16px_48px_rgba(149,157,165,0.2)] dark:hover:shadow-[0px_16px_48px_rgba(0,0,0,0.3)];
}
.title {
	@apply text-xl group-hover:text-lg text-emerald-600 dark:text-white;
	@apply group-hover:text-emerald-400 dark:group-hover:text-violet-400;
}
.content {
	@apply text-lg group-hover:text-xl  text-purple-400  dark:text-indigo-300;
	@apply group-hover:text-purple-600 dark:group-hover:text-fuchsia-400;
}
.done,
.undone {
	@apply text-sm;
}
.done {
	@apply text-cyan-400 group-hover:text-slate-400;
}
.undone {
	@apply text-amber-400 group-hover:text-slate-400;
}
.edt-icn,
.dlt-icn {
	@apply w-5 h-5 font-thin;
}
.edt-icn {
	@apply text-cyan-300;
}
.dlt-icn {
	@apply text-rose-300;
}
</style>
