/*
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async({ locals, fetch }) => {
    let res = await locals.sb
            .from('posts')
            .select('title, desc, username, price')

        return res
}
*/