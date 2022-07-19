import Dexie, { Table } from 'dexie';
import { Todo } from './types';

export default class DexieDB extends Dexie {
	todos!: Table<Todo>;

	constructor() {
		super('todoDB');
		this.version(1).stores({ todos: '++id, title, content, done' });
	}
}

export const db = new DexieDB();
