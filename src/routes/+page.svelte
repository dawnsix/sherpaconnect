
<script lang="ts">
	import type { PageData } from "./$types"

	export let data: PageData

</script>

<div class="flex justify-center mt-8">
	{#if data.session}
	<h1 id="hp-hdr">Welcome <span class="text-pink-700 font-bold text-6xl">
		{data.session.user.user_metadata.username}</span>!</h1>
	{:else}
	<h1 id="hp-hdr">Welcome to RaidCarry</h1>
	<h3>β</h3>
	{/if}
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply bg-gradient-to-r from-primary-300 to-warning-300;
		@apply absolute z-[-1] rounded-full blur-[64px];
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite;
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
