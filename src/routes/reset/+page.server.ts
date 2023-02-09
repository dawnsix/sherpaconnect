import type { Actions } from "./$types"
import { error, redirect, fail } from '@sveltejs/kit'
import { env } from '$env/dynamic/public'
import { hostDomain } from '$lib/constants'
import z from "zod"

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())

        var emailSchema = z.object({
            email: z
                .string()
                .trim()
                .email({ message: 'Email must be a valid email address' })
        })

        try {
            emailSchema.parse(body)
        } catch (err) {
            const formErrors = err.flatten()
            console.log(formErrors)
            return {
                formErrors
            }
        }

        if(!locals.sb) {
            throw redirect(303, '/')
        }

        const { data, error: err } = await locals.sb.auth.resetPasswordForEmail(
            body.email,
            { redirectTo: env.PUBLIC_REDIRECT_HOST + '/resetpass' }
        )

        if(err) {
            return {
                error: "We encountered an issue. Please try again later."
            }
        }

        throw redirect(303, "/verifyaction")
    }
}