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
 * array() is used to define an array
 * tuple() is used to define an array with a fixed number of elements
 * rest() is used to define the rest of the elements in a tuple
 *
 * literal() is used to define a specific value
 * union() is used to define multiple types, the same as or()
 * discriminatedUnion() is used to define a union with a common property
 *
 * parse() will return valid data or throw an error if the data is invalid
 * safeParse() will return an object with success (true/false) and data properties
 * partial() is used to make all fields optional
 * pick() will return a new schema with only the specified fields
 * omit() will return a new schema without the specified fields
 * extend() will return a new schema with the specified fields added
 * strict() will throw an error if there are extra fields
 *
 * shape is a property that contains all the properties of the schema
 *
 * result.error can only be used when safeParse() returns false
 * result.error.errors will return an array of errors
 * result.error.flatten() will return a flattened array of errors, useful for displaying errors
 */
// * `as const` in this case is important to make the array readonly
const hobbies = ['reading', 'coding', 'gaming'] as const

export const UserSchemaInitial = z
  .object({
    fullName: z.string().min(3).max(20),
  })
  .strict()

export const UserSchema = z.object({
  // id: z.union([z.string(), z.number()]),
  id: z.string().or(z.number()), // same as above
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

export const UserListSchema = z.array(UserSchema).nonempty()
export const ListSchema = z.array(z.number()).nonempty()
export const ListSchemaAdvanced = z
  .tuple([z.number(), z.string()])
  .rest(z.number())

export const StatusSchema = z.union([
  z.literal('active'),
  z.literal('inactive'),
])
export const StatusSchemaAdvanced = z.discriminatedUnion('status', [
  z.object({
    status: z.literal('active'),
    description: z.string(),
  }),
  z.object({
    status: z.literal('inactive'),
    reason: z.string(),
  }),
])

export const UserFormSchemaAdvanced = z.object({
  email: z
    .string()
    .email()
    .refine((value) => value.length > 5, {
      message: 'Email must be longer than 5 characters',
    }),
  password: z.string().min(8),
  // confirmPassword: z.string().min(8),
})

const result = UserFormSchemaAdvanced.safeParse({ email: '@' })

if (!result.success) {
  console.log('ListSchema check', result.error.errors)
  console.log('ListSchema check', result.error.flatten())
}
/* ----- END: User validation ----- */
