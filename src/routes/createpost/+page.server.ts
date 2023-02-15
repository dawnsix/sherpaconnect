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
        console.log(JSON.stringify(body))

        //TODO: verify validation from api client
        const postSchema = z
            .object({
                postTitle: z
                    .string({ required_error: 'Title is required' })
                    .max(64, { message: 'Title must be less than 64 characters' })
                    .min(6, { message: 'Title must be more than 6 characters' }),
                category: z
                    .string({ required_error: 'Please select a catagory' }),
                postDescription: z
                    .string({ required_error: 'Description is required' })
                    .max(300, { message: 'Description must be less than 300 characters' })
                    .min(10, { message: 'Description must be more than 10 characters' }),
                price: z
                    //add more to this validation, need non-negative, etc
                    .string({ required_error: 'Valid price required'})
                    .regex(/^\$?[0-9]+\.?[0-9]?[0-9]?$/, { message: 'Price invalid'}),
                endtime: z
                    .string({ required_error: 'End time is required' })
                    .regex(/^([01][0-9]|2[0-3]):([0-5][0-9])$/, { message: "Invalid end time" })
            }).superRefine(({ category }, ctx) => {
                if (!["raid", "trials", "grind", "nightfall"].includes(category)) {
                    ctx.addIssue({
                        code: 'custom',
                        message: 'Category invalid',
                        path: ['category']
                    });
                }
            })
                

        try {
            postSchema.parse(body)
        } catch (err) {
            const formErrors = err.flatten()
            return {
                data: body,
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