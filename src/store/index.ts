import { createStore } from 'vuex';

export default createStore({
	state: { form: { title: '', content: '', done: false } },
	getters: {
		title(state) {
			return state.form.title;
		},
		content(state) {
			return state.form.content;
		},
		done(state) {
			return state.form.done;
		},
	},
	mutations: {},
	actions: {},
	modules: {},
});
