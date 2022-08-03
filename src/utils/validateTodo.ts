import { Todo } from '@/types';

export default function validateTodo(form: Todo): Todo | undefined {
	if (!form.title && !form.content) return;
	if (!form.title) form.title = '';
	if (!form.content) form.content = '';
	form.title = form.title.trim();
	form.content = form.content.trim();
	form.done = !!form.done;
	return form;
}
