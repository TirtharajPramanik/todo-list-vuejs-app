<template>
	<ul v-if="todos.length">
		<UiTodoCard v-for="todo in todos" :data="todo" :key="todo.id" />
	</ul>
	<h3 v-else class="text-emerald-600 dark:text-white text-lg font-medium">
		No Todos Yet!
	</h3>
</template>

<script lang="ts">
import { UiTodoCard } from '@/components';
import { liveQuery } from 'dexie';
import { useObservable } from '@vueuse/rxjs';
import { from } from 'rxjs';
import { db } from '@/db';

export default {
	components: { UiTodoCard },
	setup() {
		return {
			db,
			todos: useObservable(from(liveQuery(() => db.todos.toArray()))),
		};
	},
};
</script>

<style lang="css" scoped></style>
