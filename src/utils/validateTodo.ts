import { Todo } from '@/types';

export default function validateTodo(form: Todo): Todo | undefined {
	form.title = form.title.trim();
	if (!form.title) return;
	if (!form.content) form.content = '';
	if (!form.done) form.done = false;
	return form;
}
