<template>
	<li class="container group trans">
		<h2 class="title trans">{{ data.title }}</h2>
		<h3 class="content trans" v-if="data.content">{{ data.content }}</h3>
		<div class="flex justify-around">
			<PencilAltIcon class="edt-icn trans-30" @click="$emit('pencil')" />
			<h4
				v-if="data.done"
				class="done trans-30"
				@click="$emit('finish', 'incomplete')"
			>
				Completed
			</h4>
			<h4 v-else class="undone trans-30" @click="$emit('finish', 'complete')">
				Incomplete
			</h4>
			<TrashIcon class="dlt-icn trans-30" @click="$emit('trash')" />
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
.trans {
	@apply transition duration-500;
}
.trans-30 {
	@apply transition duration-300;
}
.container {
	@apply mx-auto px-4 py-6 flex flex-col space-y-12 max-w-md;
	@apply rounded-md dark:bg-[rgb(40,50,60)] hover:scale-105;
	@apply shadow-[0px_8px_24px_rgba(149,157,165,0.2)] dark:shadow-[0px_8px_24px_rgba(0,0,0,0.4)];
	@apply hover:shadow-[0px_24px_48px_rgba(143,167,163,0.3)] dark:hover:shadow-[0px_24px_48px_rgba(0,0,0,0.4)];
}
.title {
	@apply text-xl group-hover:scale-90 text-emerald-600 dark:text-white;
	@apply group-hover:text-emerald-400;
}
.content {
	@apply text-lg group-hover:scale-110  text-purple-400;
	@apply group-hover:text-purple-600 dark:group-hover:text-pink-400;
}
.done,
.undone {
	@apply text-sm;
	@apply hover:scale-125;
}
.done {
	@apply text-cyan-400 group-hover:text-slate-400;
}
.undone {
	@apply text-amber-400 group-hover:text-slate-400;
}
.edt-icn,
.dlt-icn {
	@apply w-5 h-5 font-thin hover:scale-125;
}
.edt-icn {
	@apply text-cyan-300;
}
.dlt-icn {
	@apply text-rose-300;
}
</style>
