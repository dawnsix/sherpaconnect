import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async({ locals }) => {

    let { data: posts, error: err } = await locals.sb
        .from('posts')
        .select('title, desc, username, price')

        if(err) {
            return { 
                data: "engaging in dungoofed protocol"
            }
        }

    return {
        postData: posts
    }    
}

