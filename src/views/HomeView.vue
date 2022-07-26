<template>
	<div>
		<h3
			v-if="!todos || !todos.length"
			class="text-emerald-600 dark:text-white text-lg font-medium"
		>
			No Todos Yet!
		</h3>
		<ul v-else class="px-4 py-8 space-y-8">
			<TransitionGroup name="list">
				<UiTodoCard
					v-for="todo in todos"
					:data="todo"
					:key="todo.id"
					@trash="todo.id && remove(todo.id)"
					@pencil="todo.id && edit(todo.id)"
					@finish="todo.id && toggle($event, todo.id)"
				/>
			</TransitionGroup>
		</ul>
		<UiToast :mode="modal" @close="modal = 'none'" @delete="removable = true" />
	</div>
</template>

<script lang="ts">
import { UiTodoCard, UiToast } from '@/components';
import { liveQuery } from 'dexie';
import { useObservable } from '@vueuse/rxjs';
import { from } from 'rxjs';
import { db } from '@/db';
import { defineComponent } from 'vue';

export default defineComponent({
	data() {
		return { modal: 'none', removable: false };
	},
	components: { UiTodoCard, UiToast },
	methods: {
		remove(id: number) {
			// alert('Delete this todo?');
			this.modal = 'delete';
			setTimeout(() => {
				this.removable && db.todos.delete(id);
				this.modal = 'none';
				this.removable = false;
			}, 2000);
		},
		edit(id: number) {
			db.todos.update(id, { content: 'content' });
		},
		toggle(eve: any, id: number) {
			// eve
			// 	? alert('Completed this todo?')
			// 	: alert('Mark this todo as Incomplete?');
			db.todos.update(id, { done: eve });
		},
	},
	setup() {
		return {
			todos: useObservable(from(liveQuery(() => db.todos.toArray()))),
		};
	},
});
</script>

<style lang="css" scoped>
.list-enter-active,
.list-leave-active {
	@apply transition duration-500;
}
.list-enter,
.list-leave-to {
	@apply opacity-0 -translate-y-10 translate-x-36;
}
</style>
<!-- 

methods: {
		toggle() {
			this.show = !this.show;
		},
		accept() {
			this.toggle();
		},
	}, -->
