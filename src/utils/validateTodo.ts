import { Todo } from '@/types';

export default function validateTodo(form: Todo): Todo | undefined {
	if (!form.title) return;
	form.title = form.title.trim();
	if (!form.title) return;
	if (!form.content) form.content = '';
	form.content = form.content.trim();
	form.done = !!form.done;
	return form;
}
