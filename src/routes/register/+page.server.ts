import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from '@sveltejs/kit'
import { z } from "zod";
import type { PageServerLoad } from "../$types";
import type { Actions } from "./$types"

export const load: PageServerLoad = async({ locals }) => {
    if(locals.session)
        throw redirect(303, '/')
}

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())
        
        // schema validation
        const registerSchema = z
            .object({
                username: z
                    .string({ required_error: 'Username is required' })
                    .min(1, { message: 'Username is required' })
                    .max(25, { message: 'Username must be less than 64 characters' })
                    .trim(),
                email: z
                    .string({ required_error: 'Email is required' })
                    .min(1, { message: 'Email is required' })
                    .max(64, { message: 'Email must be less than 64 characters' })
                    .email({ message: 'Email must be a valid email address' }),
                psw: z
                    .string({ required_error: 'Password is required' })
                    .min(6, { message: 'Password must be at least 6 characters' })
                    .max(32, { message: 'Password must be less than 32 characters' })
                    .regex(RegExp('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\[-+_!@#$%^&*.,?])'), {message: 'Password must contain at least 1 special char, 1 uppercase, and 1 lowercase character'})
                    .trim(),
                pswrepeat: z
                    .string({ required_error: 'Password is required' })
                    .trim()
            })
            .superRefine(({ psw, pswrepeat }, ctx) => {
                if (psw !== pswrepeat) {
                    ctx.addIssue({
                        code: 'custom',
                        message: 'Password and Confirm Password must match',
                        path: ['pswrepeat']
                    });
                }
            });

        try {
            registerSchema.parse(body)
        } catch (err) {
            const formErrors = err.flatten()
            const { psw, pswrepeat, ...rest } = body
            return {
                data: rest,
                formErrors
            }
        }
        
        // unique username check
        const usernameQuery = await locals.sb
            .from('profiles')
            .select()
            .eq('username', body.username)

        if(usernameQuery.data[0]?.username) {
            const { psw, pswrepeat, ...rest } = body
            return {
                data: rest,
                formErrors: { 
                    fieldErrors: { 
                        usernameTaken: 'Username is taken' 
                    }
                }
            }
        }

        const emailQuery = await locals.sb
            .from('profiles')
            .select()
            .eq('email', body.email)

        console.log(JSON.stringify(emailQuery))

        if(emailQuery.data[0]?.username) {
            const { psw, pswrepeat, ...rest } = body
            return {
                data: rest,
                formErrors: { 
                    fieldErrors: { 
                        emailTaken: 'An account with this email already exists' 
                    }
                }
            }
        }

        // sign up to sb
        const { data, error: err } = await locals.sb.auth.signUp({
                    email: body.email as string,
                    password: body.psw as string,
                    options: {
                        data: {
                            username: body.username as string,
                            email: body.email as string,
                        }
                    }
                })

        if (err) {
            if (err instanceof AuthApiError && err.status == 400) {
                return fail(400, {
                    error: "Invalid email or password",
                    formErrors: { fieldErrors: true }
                })
            }
            
            return fail(500, {
                message: "Server error. Please try again later.",
                formErrors: { fieldErrors: true }
            })
        }

        throw redirect(303, "/verifyaction")
    }
}