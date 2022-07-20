<template>
	<li class="container">
		<h2 class="txt-color text-lg">{{ data.title }}</h2>
		<h3 class="txt-color">{{ data.content }}</h3>
		<h4 class="txt-color">{{ data.done }}</h4>
	</li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: { data: { type: Object, required: true } },
});
</script>

<style lang="css" scoped>
.container {
	@apply mx-auto my-5 p-5 flex flex-col space-y-5;
}

.txt-color {
	@apply text-purple-800 dark:text-white;
}
</style>
