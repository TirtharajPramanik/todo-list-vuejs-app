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
					@trash="todo.id && toast('delete', todo.id)"
					@finish="todo.id && toast($event, todo.id)"
					@pencil="todo.id && edit(todo.id)"
				/>
			</TransitionGroup>
		</ul>
		<Transition name="bounce">
			<UiToast
				:mode="modal"
				@close="modal = 'none'"
				@trash="remove()"
				@finish="toggle"
			/>
		</Transition>
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
		return { modal: 'none', selected: 0 };
	},
	components: { UiTodoCard, UiToast },
	methods: {
		toast(mode: string, id: number) {
			this.selected = id;
			if (['complete', 'incomplete', 'delete'].includes(mode)) {
				this.modal = mode;
			}
		},
		remove() {
			this.selected && db.todos.delete(this.selected);
			this.modal = 'none';
			this.selected = 0;
		},
		edit(id: number) {
			db.todos.update(id, { content: 'content' });
		},
		toggle(eve: boolean) {
			db.todos.update(this.selected, { done: eve });
			this.modal = 'none';
			this.selected = 0;
		},
	},
	setup() {
		return {
			todos: useObservable(from(liveQuery(() => db.todos.reverse().toArray()))),
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

.bounce-enter-active {
	animation: bounce-in 0.7s;
}
.bounce-enter-from {
	display: none;
}
.bounce-leave-to {
	animation: bounce-in reverse 0.7s;
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
