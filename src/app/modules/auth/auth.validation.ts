import { z } from 'zod'

export const user_signup_zod_schema = z.object({
  body: z.object({
    name: z.string({ required_error: 'name address is required' }),
    email: z.string({ required_error: 'email address is required' }),
    password: z.string({ required_error: 'password address is required' }),
    role: z.string({ required_error: 'role address is required' }),
    contactNo: z.string({ required_error: 'contactNo address is required' }),
    address: z.string({ required_error: 'address address is required' }),
    profileImg: z.string({ required_error: 'profileImg address is required' }),
  }),
})

export const user_login_zod_schema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email address  is required' }),
    password: z.string({ required_error: 'Password  is required' }),
  }),
})

export const user_refresh_token_zod_schema = z.object({
  cookies: z.object({
    refreshToken: z.string({ required_error: 'Refresh token  is required' }),
  }),
})