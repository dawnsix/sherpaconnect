import { supabaseClient } from '$lib/supabaseClient';
import { error, redirect } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {

    let {data: posts, error: err} = await supabaseClient
        .from('posts')
        .select()
        .eq('user_id', locals.session.user.id)
        .order('created_at',  { ascending: false });

    if (err) {
        throw error(500, 'Update failed, please try again later.')
    }

    return {
        posts: posts
    };
}
