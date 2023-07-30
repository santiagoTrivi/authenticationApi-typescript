import { object, z } from "zod";



export const loginSchema = object({
    body: object({
        email: z.string({
            required_error: 'Email required'
        }).nonempty(),
        password: z.string({
            required_error: 'Password required'
        })
    })
})

export const googleOauth = object({
    body: object({
        g_csrf_token: z.string({
            required_error: 'g_csrf_token required'
        })
    })
})

export type LoginData = z.TypeOf<typeof loginSchema>['body'];