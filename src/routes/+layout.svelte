<script lang="ts">
    import { supabaseClient } from '$lib/supabaseClient'
    import { navigating } from '$app/stores';
    import { onMount } from 'svelte'
    import { invalidateAll } from '$app/navigation'
    import NProgress from 'nprogress';

    import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
    import 'nprogress/nprogress.css';

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

<slot />