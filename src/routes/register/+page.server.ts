import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from "./$types"

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())

        const { data, error: err } = await locals.sb.auth.signUp({
                    email: body.email as string,
                    password: body.psw as string,
                    options: {
                        data: {
                            username: body.username as string,
                        }
                    }
                })

        if (err) {
            if (err instanceof AuthApiError && err.status == 400) {
                return fail(400, {
                    error: "Invalid email or password"
                })
            }
            
            return fail(500, {
                message: "Server error. Please try again later."
            })
        }

        throw redirect(303, "/registerverify")
    }
}