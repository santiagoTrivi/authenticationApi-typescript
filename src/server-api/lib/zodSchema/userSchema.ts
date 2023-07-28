import { object, z } from "zod";



export const userSchema = object({
    body: object({
        username: z.string({
            required_error: 'Username required'
        }).nonempty(),
        email: z.string({
            required_error: 'Email required'
        }).email('invalid email'),
        password: z.string({
            required_error: 'Password required'
        }).min(8, {
            message: 'The password must be more than 5 characters'
        }),
        birthdate: z.string({
            required_error: 'birthdate required'
        })
    })
});

export type UserData = z.TypeOf<typeof userSchema>['body'];