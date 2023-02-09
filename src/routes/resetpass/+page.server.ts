import type { Actions } from "./$types"
import { error, redirect } from '@sveltejs/kit'
import z from "zod"


export const actions: Actions = {
    default: async ({ request, locals }) => {

        const body = Object.fromEntries(await request.formData())

        const updatePassSchema = z
            .object({
                rstpsw: z
                    .string({ required_error: 'Password is required' })
                    .min(6, { message: 'Password must be at least 6 characters' })
                    .max(32, { message: 'Password must be less than 32 characters' })
                    .trim(),
                rstpsw_confirm: z
                    .string({ required_error: 'Password is required' })
                    .min(6, { message: 'Password must be at least 6 characters' })
                    .max(32, { message: 'Password must be less than 32 characters' })
                    .trim(),
            }).superRefine(({ rstpsw, rstpsw_confirm }, ctx) => {
                if (rstpsw !== rstpsw_confirm) {
                    ctx.addIssue({
                        code: 'custom',
                        message: 'Password and Confirm Password must match',
                        path: ['rstpsw_confirm']
                    });
                }
            });

        try {
            updatePassSchema.parse(body)
        } catch (err) {
            const formErrors = err.flatten()
            return {
                formErrors
            }
        }

        if(!locals.session) {
            throw redirect(303, "/")
        }

        const { data, error: err } = await locals.sb.auth.updateUser({
            password: body.rstpsw
        })

        if(err) {
            return {
                error: "We encountered an issue. Please try again later."
            }
        }

        throw redirect(303, '/')
    }
}