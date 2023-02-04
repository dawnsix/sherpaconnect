import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ locals }) => {

    const { error: err } = await locals.sb.auth.signOut()

    if (err) {
        throw error(500, 'Logout failed, please try again later.')
    }

    throw redirect(303, '/')
}
