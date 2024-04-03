import { z } from 'zod'

export const userFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type UserFormFields = z.infer<typeof userFormSchema>
