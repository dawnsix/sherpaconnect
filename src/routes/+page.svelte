
<script lang="ts">
	import { supabaseClient } from '$lib/supabaseClient'
	import type { PageData } from "./$types"
	import { fade, blur, fly, slide, scale } from 'svelte/transition'

	export let data: PageData

</script>

<div class="flex flex-col h-screen" 
	style="
		background-size: auto 100%; 
		background-image: url('https://cutewallpaper.org/28x/gypuz30ts/2433626945.jpg');
		background-repeat:no-repeat;
		background-position: center center;">

<div in:fade="{{ duration: 300 }}">
	<div class="flex justify-center mt-8">
		{#if data.session}
		<div class="text-center fixed">
			<h1 id="hp-hdr">Welcome <span class="font-bold text-6xl dark:text-black">
				{data.session.user.user_metadata.username}</span></h1>
		</div>
		{:else}
		<div class="text-center fixed dark:text-black">
			<h1 id="hp-hdr">Welcome to PaidRaid</h1>
			<p>The number 178 place for Destiny 2 carries</p>
		</div>
		{/if}
	</div>

	<br />
	<div class="flex justify-center">
	</div>
</div>
</div>