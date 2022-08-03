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
					:editing="modal === 'edit' && selected === todo.id"
					@trash="todo.id && toast('delete', todo.id)"
					@finish="todo.id && toast($event, todo.id)"
					@pencil="todo.id && toast('edit', $event)"
					@title="title"
					@content="content"
				/>
			</TransitionGroup>
		</ul>
		<Transition name="bounce">
			<UiToast
				:mode="modal"
				@close="modal = 'none'"
				@trash="remove"
				@finish="toggle"
				@pencil="edit"
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
import { Todo } from '@/types';
import { validateTodo } from '@/utils';

export default defineComponent({
	data() {
		return {
			modal: 'none',
			selected: 0,
			todo: { title: '', content: '' },
		};
	},
	components: { UiTodoCard, UiToast },
	methods: {
		toast(mode: string, id: number | Todo) {
			if (typeof id === 'number') this.selected = id;
			else {
				this.selected = id.id as number;
				this.todo.title = id.title as string;
				this.todo.content = id.content as string;
			}
			if (['complete', 'incomplete', 'delete', 'edit'].includes(mode)) {
				this.modal = mode;
			}
		},
		remove() {
			this.selected && db.todos.delete(this.selected);
			this.reset();
		},
		edit() {
			const todo = validateTodo(this.todo);
			if (todo) {
				this.selected &&
					db.todos.update(this.selected, {
						title: todo.title,
						content: todo.content,
					});
				this.reset();
			}
		},
		toggle(eve: boolean) {
			db.todos.update(this.selected, { done: eve });
			this.reset();
		},
		reset() {
			this.modal = 'none';
			this.selected = 0;
		},
		title(ev: string, todo: Todo) {
			this.todo.title = ev;
		},
		content(ev: string, todo: Todo) {
			this.todo.content = ev;
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
	@apply opacity-0 translate-x-36;
	/* -translate-y-10 */
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
