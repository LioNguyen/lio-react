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
 * partial() is used to make all fields optional
 * pick() will return a new schema with only the specified fields
 * omit() will return a new schema without the specified fields
 * extend() will return a new schema with the specified fields added
 * strict() will throw an error if there are extra fields
 *
 * shape is a property that contains all the properties of the schema
 */
// * `as const` in this case is important to make the array readonly
const hobbies = ['reading', 'coding', 'gaming'] as const

export const UserSchemaInitial = z
  .object({
    fullName: z.string().min(3).max(20),
  })
  .strict()

export const UserSchema = z.object({
  username: z.string().min(3).max(20),
  age: z.number(),
  birthday: z.date().optional(),
  isProgrammer: z.boolean().nullish().default(false),
  hobbies: z.enum(hobbies).optional(),
})
export type User = z.infer<typeof UserSchema>

export const UserSchemaPartial = UserSchema.partial()
export const UserSchemaBasic = UserSchema.pick({
  username: true,
  age: true,
})
export const UserSchemaWithoutAge = UserSchema.omit({ age: true })

export const UserSchemaExtended = UserSchema.extend({
  gender: z.string().optional(),
})
/* ----- END: User validation ----- */
