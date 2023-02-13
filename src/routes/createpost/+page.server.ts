import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from "./$types"
import z from "zod"

export const load: PageServerLoad = async({ locals }) => {
    if(!locals.session)
        throw redirect(303, '/login')
}

export const actions: Actions = {
    default: async ({ request, locals }) => {
        
        const body = Object.fromEntries(await request.formData())

        const postSchema = z
            .object({
                postTitle: z
                    .string({ required_error: 'Title is required' }),
                postDescription: z
                    .string({ required_error: 'Description is required' }),
                price: z
                    .string({ required_error: 'Price is required' })
            });

        try {
            postSchema.parse(body)
        } catch (err) {
            const formErrors = err.flatten()
            return {
                formErrors
            }
        }

        const { data, error: err } = await locals.sb
            .from('posts')
            .insert([{ 
                    username: locals.session.user.user_metadata.username,
                    title: body.postTitle,
                    desc: body.postDescription,
                    price: body.price
                },
        ])

        if (err) {            
            return fail(500, {
                message: "Server error. Please try again later.",
                formErrors: { fieldErrors: true }
            })
        }

        throw redirect(303, "/posts")
    }
}