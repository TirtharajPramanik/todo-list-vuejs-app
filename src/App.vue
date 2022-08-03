<template>
	<main class="container max-w-xl relative mx-auto">
		<nav>
			<!-- <button
				class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				type="button"
			>
				Select Multiple
			</button> -->
			<router-link @click="setSlideType('left')" to="/">Home</router-link> |
			<router-link @click="setSlideType('right')" to="/create"
				>Create</router-link
			>
			<UiToggleTheme @click="toggleTheme" :isdark="theme === 'dark'" />
		</nav>
		<router-view v-slot="{ Component }">
			<transition :name="slideType" mode="out-in">
				<component :is="Component" :key="$route.path" />
			</transition>
		</router-view>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UiButton, UiToggleTheme } from '@/components';
import { changeTheme } from '@/utils';

export default defineComponent({
	data() {
		return { theme: 'dark', slideType: 'slideleft' };
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
			this.theme = this.theme === 'dark' ? 'light' : 'dark';
		},
		setSlideType(typ: string) {
			if (['left', 'right'].includes(typ)) this.slideType = `slide${typ}`;
		},
	},
	components: { UiButton, UiToggleTheme },
});
</script>

<style>
body {
	@apply bg-white dark:bg-gray-900;
	/* dark:bg-[rgb(40,50,60)]; */
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

.slideleft-enter-active,
.slideleft-leave-active,
.slideright-enter-active,
.slideright-leave-active {
	transition: opacity 0.4s, transform 0.4s;
}

.slideleft-enter-from,
.slideleft-leave-to,
.slideright-enter-from,
.slideright-leave-to {
	opacity: 0;
}

.slideleft-enter-from,
.slideright-leave-to {
	transform: translateX(-30%);
}

.slideleft-leave-to,
.slideright-enter-from {
	transform: translateX(30%);
}
</style>
