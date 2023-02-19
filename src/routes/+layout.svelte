<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import NProgress from 'nprogress';

	import { supabaseClient } from '$lib/supabaseClient'
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { invalidateAll } from '$app/navigation'
	import { onMount } from 'svelte'
	import { navigating } from '$app/stores';
	import type { PageData } from "./$types"

	// component imports
	import NavRail from '$lib/components/navrail.svelte';
	
	// package styles
	import 'nprogress/nprogress.css';

	export let data: PageData

	NProgress.configure({
		minimum: 0.16,
		showSpinner: false
	})
 
	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}

	onMount(() => {
			const {
				data: { subscription },
			} = supabaseClient.auth.onAuthStateChange(() => {
				invalidateAll()
		})

		return () => {
			subscription.unsubscribe()
		}
	})

</script>

<title>Paid Raid - Destiny 2 carry services</title>
<Toast />

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">	
				<div class="flex flex-row">
					<div>
						<svg width="126.465" height="58.105" viewBox="0 0 126.465 58.105" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000000" stroke-width="0.25mm" fill="#ff00d4" style="stroke:#000000;stroke-width:0.25mm;fill:#ff00d4"><path d="M 37.598 58.105 L 37.598 0 L 71.777 0 L 71.777 44.434 L 58.105 44.434 L 58.105 27.344 L 51.27 27.344 L 51.27 44.434 L 37.598 58.105 Z M 34.18 27.344 L 13.672 27.344 L 13.672 44.434 L 0 58.105 L 0 0 L 34.18 0 L 34.18 27.344 Z M 126.465 37.598 L 119.629 44.434 L 92.285 44.434 L 92.285 0 L 119.629 0 L 126.465 6.836 L 126.465 37.598 Z M 75.195 0 L 88.867 0 L 88.867 44.434 L 75.195 58.105 L 75.195 0 Z M 105.957 10.254 L 105.957 34.18 L 112.793 34.18 L 112.793 10.254 L 105.957 10.254 Z M 20.508 10.254 L 13.672 10.254 L 13.672 17.09 L 20.508 17.09 L 20.508 10.254 Z M 58.105 10.254 L 51.27 10.254 L 51.27 17.09 L 58.105 17.09 L 58.105 10.254 Z" vector-effect="non-scaling-stroke"/></g></svg>
					</div>
					<div class="ml-1">
						<svg width="135.498" height="62.256" viewBox="0 0 135.498 62.256" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#ffffff" stroke-width="0.50mm" fill="#000" style="stroke:#ffffff;stroke-width:0.50mm;fill:#000"><path d="M 21.973 47.607 L 21.973 29.297 L 14.648 29.297 L 14.648 47.607 L 0 62.256 L 0 0 L 36.621 0 L 36.621 18.311 L 31.128 23.804 L 36.621 29.297 L 36.621 47.607 L 21.973 47.607 Z M 40.283 62.256 L 40.283 0 L 76.904 0 L 76.904 47.607 L 62.256 47.607 L 62.256 29.297 L 54.932 29.297 L 54.932 47.607 L 40.283 62.256 Z M 135.498 40.283 L 128.174 47.607 L 98.877 47.607 L 98.877 0 L 128.174 0 L 135.498 7.324 L 135.498 40.283 Z M 80.566 0 L 95.215 0 L 95.215 47.607 L 80.566 62.256 L 80.566 0 Z M 113.525 10.986 L 113.525 36.621 L 120.85 36.621 L 120.85 10.986 L 113.525 10.986 Z M 21.973 10.986 L 14.648 10.986 L 14.648 18.311 L 21.973 18.311 L 21.973 10.986 Z M 62.256 10.986 L 54.932 10.986 L 54.932 18.311 L 62.256 18.311 L 62.256 10.986 Z" vector-effect="non-scaling-stroke"/></g></svg>
					</div>
					<div class="ml-1">
						<svg width="146.973" height="58.105" viewBox="0 0 146.973 58.105" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000000" stroke-width="0.25mm" fill="#ff00d4" style="stroke:#000000;stroke-width:0.25mm;fill:#ff00d4"><path d="M 112.793 10.254 L 105.957 10.254 L 105.957 44.434 L 92.285 58.105 L 92.285 0 L 146.973 0 L 146.973 44.434 L 133.301 44.434 L 133.301 10.254 L 126.465 10.254 L 126.465 44.434 L 112.793 44.434 L 112.793 10.254 Z M 37.598 17.09 L 37.598 10.254 L 30.762 10.254 L 30.762 34.18 L 37.598 34.18 L 37.598 27.344 L 51.27 27.344 L 51.27 44.434 L 17.09 44.434 L 17.09 0 L 51.27 0 L 51.27 17.09 L 37.598 17.09 Z M 88.867 44.434 L 54.688 44.434 L 54.688 0 L 88.867 0 L 88.867 44.434 Z M 68.359 10.254 L 68.359 34.18 L 75.195 34.18 L 75.195 10.254 L 68.359 10.254 Z M 13.672 34.18 L 13.672 44.434 L 0 44.434 L 0 34.18 L 13.672 34.18 Z" vector-effect="non-scaling-stroke"/></g></svg>
					</div>
				</div>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				{#if data.session}
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M374 2009c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673A5.983 5.983 0 0 0 380 2005a6 6 0 1 0-9.758 4.673c-3.659 1.375-6.242 4.772-6.242 9.327h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327" transform="translate(-364 -1999)"/></svg>
				<a class="text-pink-800 hover:text-pink-900" href="/profile">{data.session.user.user_metadata.username}</a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		
		<NavRail session={data.session}/>

	</svelte:fragment>
	
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	
	<svelte:fragment slot="footer">

		<footer class="text-center text-white">
		
			<div class="text-center text-gray-700 p-4" style="background-color: rgba(0, 0, 0, 0.2);">
			<span class="dark:text-white text-black text-xs">© 2023 <a href="http://tibetanbuddhistencyclopedia.com/en/images/thumb/f/f8/5056_n.jpg/250px-5056_n.jpg">Bleanis LLC</a> - Powered by YourMum</span>
			<br />
			<p><span class="dark:text-white text-black text-xs">PAIDRAID.COM 2023</span></p>
			<LightSwitch class="mt-1"/>
			</div>
		</footer>

	</svelte:fragment>
</AppShell>
