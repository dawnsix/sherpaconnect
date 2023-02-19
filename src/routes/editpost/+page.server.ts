import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from "./$types"
import z from "zod"

export const load: PageServerLoad = async({ locals, url }) => {

    if(!locals.session)
        throw redirect(303, '/login')

    let editPost = null;
    const targetId = url.searchParams.get('id') ?? null;
    if(targetId) {
        let {data: post, error: err} = await locals.sb
            .from('posts')
            .select()
            .eq('user_id', locals.session.user.id)
            .eq('id', targetId)

        if(post && post.length > 0) {
            editPost = post[0]
        }
    }

    return {
        formState: editPost,
        tgtId: targetId
    }
}

export const actions: Actions = {
    default: async ({ request, locals }) => {
        
        const body = Object.fromEntries(await request.formData())

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
                gamertag: z
                    .string({ required_error: 'Gamertag is required' })
                    .max(100, { message: 'Gamertag must be less than 300 characters' })
                    .min(2, { message: 'Gamertag must be more than 10 characters' }),
                platform: z
                    .string({ required_error: "Platform required" }),
                price: z
                    //add more to this validation, need non-negative, etc
                    .string({ required_error: 'Valid price required'})
                    .regex(/^\$?[0-9]+\.?[0-9]?[0-9]?$/, { message: 'Price invalid'}),
                endtime: z
                    .string({ required_error: 'End time is required' })
                    .regex(/^([01][0-9]|2[0-3]):([0-5][0-9])$/, { message: "Invalid end time" })
            }).superRefine(({ category, platform }, ctx) => {

                if (!["raid", "trials", "grind", "nightfall"].includes(category)) {
                    ctx.addIssue({
                        code: 'custom',
                        message: 'Category invalid',
                        path: ['category']
                    });
                }

                if(!["ps", "xbox", "pc"].includes(platform)) {
                    ctx.addIssue({
                        code: 'custom',
                        message: 'Platform invalid',
                        path: ['platform']
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

        // delete original post
        console.log(body.targetId)
        const { error: errDelete } = await locals.sb
            .from('posts')
            .delete()
            .eq('id', body.targetId)

        if (errDelete) {            
            return fail(500, {
                message: "Server error. Please try again later.",
                formErrors: { fieldErrors: true }
            })
        }

        // create new post
        const { error: err } = await locals.sb
            .from('posts')
            .insert([{ 
                    username: locals.session.user.user_metadata.username,
                    available: 1,
                    title: body.postTitle,
                    desc: body.postDescription,
                    price: body.price,
                    type: body.category,
                    platform: body.platform,
                    lifespan: body.endtime,
                    gamertag: body.gamertag,
                    user_id: locals.session?.user.id
                },
        ])

        if (err) {            
            return fail(500, {
                message: "Server error. Please try again later.",
                formErrors: { fieldErrors: true }
            })
        }

        throw redirect(303, "/myposts")
    }
}