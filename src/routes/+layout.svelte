<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import NProgress from 'nprogress';

	import { supabaseClient } from '$lib/supabaseClient'
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
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
	});
 
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

<title>Sherpa Pro - Destiny 2 carry services</title>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">	
				
			</svelte:fragment>
				 <div>
					<h1 class="flex items-center text-5xl font-extrabold text-pink-700">SHERPA<span class="text-blue-100 bg-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">PRO</span></h1>
				 </div>
			<svelte:fragment slot="trail">
				
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
		
			<div class="text-center text-gray-700 p-8" style="background-color: rgba(0, 0, 0, 0.2);">
			<a class="text-gray-800" href="https://youtu.be/Rlij_2kNv-s">Copyright: Bleanis© 2023</a>
			<br />
			<LightSwitch class="mt-1"/>
			</div>
		</footer>

	</svelte:fragment>
</AppShell>
