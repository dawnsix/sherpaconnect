import { supabaseClient } from '$lib/supabaseClient';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {

    let {data: posts, error: err} = await locals.sb
        .from('posts')
        .select()
        .order('created_at',  { ascending: false });

    // Use defer here (streaming with promises)
    // https://youtu.be/wTF9uunxSvA

    return {
        posts: posts
    };
}

  