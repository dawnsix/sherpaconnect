
<script lang="ts">
	import type { PageData } from "./$types"

	export let data: PageData

</script>

<div class="w-screen h-screen flex justify-center mt-8">
	<h1 id="hp-hdr">Welcome home.</h1>
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
