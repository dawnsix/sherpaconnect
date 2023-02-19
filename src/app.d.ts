// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	declare namespace App {
		 interface Error {}
		 interface Platform {}

		interface PageData {
			session: import('@supabase/supabase-js').Session
		}
		
		interface Locals {
			sb: TypedSupabaseClient;
			session: Session | null;
		}

		interface PostCard {
			title: string,
			username: string,
			type: string,
			lifespan: string,
			desc: string,
			price: number
		}
	}
}

export {};
