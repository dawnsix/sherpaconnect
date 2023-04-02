import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async({ locals }) => {
    if(!locals.session)
        throw redirect(303, '/')

    let { data: profiles, error: err } = await locals.sb
        .from('profiles')
        .select()
        .eq('username', locals.session.user.user_metadata.username)

        if(err) {
            return { 
                data: "engaging in dungoofed protocol"
            }
        }

    return {
        profileData: profiles
    }    
}

