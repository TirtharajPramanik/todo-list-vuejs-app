<template>
	<main class="container max-w-xl relative mx-auto">
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/create">Create</router-link>
			<UiToggleTheme @click="toggleTheme" :isdark="theme == 'dark'" />
		</nav>
		<router-view />
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UiButton, UiToggleTheme } from '@/components';
import { changeTheme } from '@/utils';

export default defineComponent({
	data() {
		return { theme: 'dark' };
	},
	mounted() {
		const val = localStorage.getItem('theme');
		val ? (this.theme = val) : (this.theme = 'dark');
		changeTheme(this.theme);
	},
	watch: {
		theme(val: string) {
			localStorage.setItem('theme', val);
			changeTheme(this.theme);
		},
	},
	methods: {
		toggleTheme() {
			this.theme = this.theme == 'dark' ? 'light' : 'dark';
		},
	},
	components: { UiButton, UiToggleTheme },
});
</script>

<style>
body {
	@apply bg-white dark:bg-slate-700;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
	@apply dark:text-slate-400;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
	@apply dark:text-slate-300;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
