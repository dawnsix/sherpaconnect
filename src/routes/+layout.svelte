<script lang="ts">
	//import '@skeletonlabs/skeleton/themes/theme-crimson.css';
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

<title>Paid Raid - Destiny 2 carry services (test build)</title>
<Toast />

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">	
				<div class="flex flex-row">

					<!--
					<div>
						<svg width="126.465" height="58.105" viewBox="0 0 126.465 58.105" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000000" stroke-width="0.25mm" fill="red" style="stroke:#000000;stroke-width:0.25mm;fill:#80f789"><path d="M 37.598 58.105 L 37.598 0 L 71.777 0 L 71.777 44.434 L 58.105 44.434 L 58.105 27.344 L 51.27 27.344 L 51.27 44.434 L 37.598 58.105 Z M 34.18 27.344 L 13.672 27.344 L 13.672 44.434 L 0 58.105 L 0 0 L 34.18 0 L 34.18 27.344 Z M 126.465 37.598 L 119.629 44.434 L 92.285 44.434 L 92.285 0 L 119.629 0 L 126.465 6.836 L 126.465 37.598 Z M 75.195 0 L 88.867 0 L 88.867 44.434 L 75.195 58.105 L 75.195 0 Z M 105.957 10.254 L 105.957 34.18 L 112.793 34.18 L 112.793 10.254 L 105.957 10.254 Z M 20.508 10.254 L 13.672 10.254 L 13.672 17.09 L 20.508 17.09 L 20.508 10.254 Z M 58.105 10.254 L 51.27 10.254 L 51.27 17.09 L 58.105 17.09 L 58.105 10.254 Z" vector-effect="non-scaling-stroke"/></g></svg>
					</div>
					<div class="ml-1">
						<svg width="135.498" height="62.256" viewBox="0 0 135.498 62.256" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#ffffff" stroke-width="0.50mm" fill="#000" style="stroke:#ffffff;stroke-width:0.50mm;fill:#000"><path d="M 21.973 47.607 L 21.973 29.297 L 14.648 29.297 L 14.648 47.607 L 0 62.256 L 0 0 L 36.621 0 L 36.621 18.311 L 31.128 23.804 L 36.621 29.297 L 36.621 47.607 L 21.973 47.607 Z M 40.283 62.256 L 40.283 0 L 76.904 0 L 76.904 47.607 L 62.256 47.607 L 62.256 29.297 L 54.932 29.297 L 54.932 47.607 L 40.283 62.256 Z M 135.498 40.283 L 128.174 47.607 L 98.877 47.607 L 98.877 0 L 128.174 0 L 135.498 7.324 L 135.498 40.283 Z M 80.566 0 L 95.215 0 L 95.215 47.607 L 80.566 62.256 L 80.566 0 Z M 113.525 10.986 L 113.525 36.621 L 120.85 36.621 L 120.85 10.986 L 113.525 10.986 Z M 21.973 10.986 L 14.648 10.986 L 14.648 18.311 L 21.973 18.311 L 21.973 10.986 Z M 62.256 10.986 L 54.932 10.986 L 54.932 18.311 L 62.256 18.311 L 62.256 10.986 Z" vector-effect="non-scaling-stroke"/></g></svg>
					</div>
					<div class="ml-1">
						<svg width="146.973" height="58.105" viewBox="0 0 146.973 58.105" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000000" stroke-width="0.25mm" fill="red" style="stroke:#000000;stroke-width:0.25mm;fill:#80f789"><path d="M 112.793 10.254 L 105.957 10.254 L 105.957 44.434 L 92.285 58.105 L 92.285 0 L 146.973 0 L 146.973 44.434 L 133.301 44.434 L 133.301 10.254 L 126.465 10.254 L 126.465 44.434 L 112.793 44.434 L 112.793 10.254 Z M 37.598 17.09 L 37.598 10.254 L 30.762 10.254 L 30.762 34.18 L 37.598 34.18 L 37.598 27.344 L 51.27 27.344 L 51.27 44.434 L 17.09 44.434 L 17.09 0 L 51.27 0 L 51.27 17.09 L 37.598 17.09 Z M 88.867 44.434 L 54.688 44.434 L 54.688 0 L 88.867 0 L 88.867 44.434 Z M 68.359 10.254 L 68.359 34.18 L 75.195 34.18 L 75.195 10.254 L 68.359 10.254 Z M 13.672 34.18 L 13.672 44.434 L 0 44.434 L 0 34.18 L 13.672 34.18 Z" vector-effect="non-scaling-stroke"/></g></svg>
					</div>
					-->
					
					<div class="">
						<svg width="290.527" height="41.504" viewBox="0 0 290.527 41.504" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#ffffff" stroke-width="0.25mm" fill="#000000" style="stroke:#ffffff;stroke-width:0.25mm;fill:#000000"><path d="M 266.113 7.324 L 261.23 7.324 L 261.23 31.738 L 251.465 41.504 L 251.465 0 L 290.527 0 L 290.527 31.738 L 280.762 31.738 L 280.762 7.324 L 275.879 7.324 L 275.879 31.738 L 266.113 31.738 L 266.113 7.324 Z M 212.402 12.207 L 212.402 7.324 L 207.52 7.324 L 207.52 24.414 L 212.402 24.414 L 212.402 19.531 L 222.168 19.531 L 222.168 31.738 L 197.754 31.738 L 197.754 0 L 222.168 0 L 222.168 12.207 L 212.402 12.207 Z M 107.422 31.738 L 107.422 19.531 L 102.539 19.531 L 102.539 31.738 L 92.773 41.504 L 92.773 0 L 117.188 0 L 117.188 12.207 L 113.525 15.869 L 117.188 19.531 L 117.188 31.738 L 107.422 31.738 Z M 26.855 41.504 L 26.855 0 L 51.27 0 L 51.27 31.738 L 41.504 31.738 L 41.504 19.531 L 36.621 19.531 L 36.621 31.738 L 26.855 41.504 Z M 119.629 41.504 L 119.629 0 L 144.043 0 L 144.043 31.738 L 134.277 31.738 L 134.277 19.531 L 129.395 19.531 L 129.395 31.738 L 119.629 41.504 Z M 24.414 19.531 L 9.766 19.531 L 9.766 31.738 L 0 41.504 L 0 0 L 24.414 0 L 24.414 19.531 Z M 249.023 31.738 L 224.609 31.738 L 224.609 0 L 249.023 0 L 249.023 31.738 Z M 90.332 26.855 L 85.449 31.738 L 65.918 31.738 L 65.918 0 L 85.449 0 L 90.332 4.883 L 90.332 26.855 Z M 183.105 26.855 L 178.223 31.738 L 158.691 31.738 L 158.691 0 L 178.223 0 L 183.105 4.883 L 183.105 26.855 Z M 53.711 0 L 63.477 0 L 63.477 31.738 L 53.711 41.504 L 53.711 0 Z M 146.484 0 L 156.25 0 L 156.25 31.738 L 146.484 41.504 L 146.484 0 Z M 75.684 7.324 L 75.684 24.414 L 80.566 24.414 L 80.566 7.324 L 75.684 7.324 Z M 168.457 7.324 L 168.457 24.414 L 173.34 24.414 L 173.34 7.324 L 168.457 7.324 Z M 234.375 7.324 L 234.375 24.414 L 239.258 24.414 L 239.258 7.324 L 234.375 7.324 Z M 195.313 24.414 L 195.313 31.738 L 185.547 31.738 L 185.547 24.414 L 195.313 24.414 Z M 14.648 7.324 L 9.766 7.324 L 9.766 12.207 L 14.648 12.207 L 14.648 7.324 Z M 41.504 7.324 L 36.621 7.324 L 36.621 12.207 L 41.504 12.207 L 41.504 7.324 Z M 107.422 7.324 L 102.539 7.324 L 102.539 12.207 L 107.422 12.207 L 107.422 7.324 Z M 134.277 7.324 L 129.395 7.324 L 129.395 12.207 L 134.277 12.207 L 134.277 7.324 Z" vector-effect="non-scaling-stroke"/></g></svg>
					</div>
				</div>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				{#if data.session}
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M374 2009c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673A5.983 5.983 0 0 0 380 2005a6 6 0 1 0-9.758 4.673c-3.659 1.375-6.242 4.772-6.242 9.327h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327" transform="translate(-364 -1999)"/></svg>
				<a class="text-black hover:text-accent-700 dark:text-accent-400" href="/profile">{data.session.user.user_metadata.username}</a>
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
			<span class="dark:text-white text-black text-xs">© 2023 <a href="http://tibetanbuddhistencyclopedia.com/en/images/thumb/f/f8/5056_n.jpg/250px-5056_n.jpg">Bleanis LLC</a> - Powered by SvelteKit</span>
			<br />
			<p><span class="dark:text-white text-black text-xs">PAIDRAID.COM 2023</span></p>
			<LightSwitch class="mt-1"/>
			</div>
		</footer>

	</svelte:fragment>
</AppShell>
