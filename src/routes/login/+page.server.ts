import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from "./$types"
import z from "zod"

export const load: PageServerLoad = async({ locals }) => {
    if(locals.session)
        throw redirect(303, '/')
}

export const actions: Actions = {
    default: async ({ request, locals }) => {
        
        const body = Object.fromEntries(await request.formData())

        const loginSchema = z
            .object({
                email: z
                    .string({ required_error: 'Email is required' })
                    .email(),
                psw: z
                    .string({ required_error: 'Password is required' })
            });

        try {
            loginSchema.parse(body)
        } catch (err) {
            const formErrors = err.flatten()
            return {
                formErrors
            }
        }

        const { data, error: err } = await locals.sb.auth.signInWithPassword({
            email: body.email as string,
            password: body.psw as string
        })

        if (err) {
            if (err instanceof AuthApiError && err.status == 400) {
                return fail(400, {
                    error: "Invalid credentials",
                    formErrors: { fieldErrors: true }
                })
            }
            
            return fail(500, {
                message: "Server error. Please try again later.",
                formErrors: { fieldErrors: true }
            })
        }

        throw redirect(303, "/")
    }
}