// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		 interface Error {}
		 interface Platform {}

		 interface PageData {
			session: import('@supabase/supabase-js').Session
		 }

		 interface Locals {
			sb: TypedSupabaseClient;
			session: Session | null;
		}
	}
}

export {};
