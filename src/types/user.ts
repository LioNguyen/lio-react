import { z } from 'zod'

/* ----- START: UserFormFields ----- */
export const userFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type UserFormFields = z.infer<typeof userFormSchema>
/* ----- END: UserFormFields ----- */

/* ----- START: User validation ----- */
/**
 * By default, all fields are required
 * Use as const to make it readonly
 * nullable() means null
 * nullish() means null or undefined
 * parse() will return valid data or throw an error if the data is invalid
 * safeParse() will return an object with success (true/false) and data properties
 */
const hobbies = ['reading', 'coding', 'gaming'] as const

export const UserSchema = z.object({
  username: z.string().min(3).max(20),
  age: z.number().default(18),
  birthday: z.date().optional(),
  isProgrammer: z.boolean().nullish(),
  hobbies: z.enum(hobbies).optional(),
})

export type User = z.infer<typeof UserSchema>
/* ----- END: User validation ----- */
