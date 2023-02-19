import { supabaseClient } from '$lib/supabaseClient';
import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request, locals }) => {

    if(!locals.session) {
        throw redirect(303, "/")
    }

    let postPayload = await request.json()
    
    const { data, error: err } = await locals.sb
        .from('posts')
        .delete()
        .eq('id', postPayload.post_id)
        .eq('user_id', locals.session.user.id)

    if (err) {
        throw error(500)
    }

    return new Response(
        JSON.stringify({ 
            message: "Post successfully deleted." 
        }), { status: 200 }) 
}

export const GET: RequestHandler = async ({ locals }) => {

    if(!locals.session) throw redirect(303, '/')
    
}