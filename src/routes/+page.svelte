
<script lang="ts">
	import { supabaseClient } from '$lib/supabaseClient'
	import type { PageData } from "./$types"
	import { fade, blur, fly, slide, scale } from 'svelte/transition'

	export let data: PageData

</script>

<div in:fade="{{ duration: 300 }}">
	<div class="flex justify-center mt-8">
		{#if data.session}
		<h1 id="hp-hdr">Welcome <span class="text-pink-700 font-bold text-6xl">
			{data.session.user.user_metadata.username}</span>!</h1>
		{:else}
		<h1 id="hp-hdr">Welcome to PaidRaid</h1>
		{/if}
	</div>

	<br />
	<div class="flex justify-center">
		<table>
			<th class="[&>*]: border-solid-white border-2">
				<h3>{data.session?.user.id ?? 'brrr'}</h3>
			</th>
		</table>
	</div>
</div>