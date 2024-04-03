**Table of Contents | React Form Control with Zod**

- [1. Overview](#1-overview)
  - [1.1 Resources](#11-resources)
  - [1.2 What can you learn?](#12-what-can-you-learn)
- [2. How to init?](#2-how-to-init)
- [3. How to use react-hook-form?](#3-how-to-use-react-hook-form)
  - [3.1 Create type](#31-create-type)
  - [3.2 How to implement react-hook-form into form?](#32-how-to-implement-react-hook-form-into-form)
  - [3.3 How to get validate form?](#33-how-to-get-validate-form)
  - [3.4 How to validate form with Zod?](#34-how-to-validate-form-with-zod)
    - [3.4.1 Create type and schema](#341-create-type-and-schema)
    - [3.4.2 Add zod schema into form](#342-add-zod-schema-into-form)
  - [3.5 How to get form errors?](#35-how-to-get-form-errors)
  - [3.6 How to set form errors?](#36-how-to-set-form-errors)
- [4. How to use zod?](#4-how-to-use-zod)
  - [4.1 How to create basic schema?](#41-how-to-create-basic-schema)
  - [4.2 How to validate based on schema?](#42-how-to-validate-based-on-schema)
  - [4.3 How to modify schema?](#43-how-to-modify-schema)

# 1. Overview

## 1.1 Resources

- [React Hook Form - Complete Tutorial (with Zod) | Youtube](https://youtu.be/cc_xmawJ8Kg?si=dfG75BvUGrXU_KCq)
- [React Hook Form - Complete Tutorial (with Zod) | Repo](https://github.com/cosdensolutions/code/tree/master/videos/long/react-hook-form-tutorial)
- [Zod Tutorial | Youtube](https://youtu.be/L6BE-U3oy80?si=rg1oqJoGk7VjsGZb)

## 1.2 What can you learn?

- React-hook-form
- Zod

# 2. How to init?

```bash
npm i react-hook-form
npm i zod @hookform/resolvers
```

# 3. How to use react-hook-form?

## 3.1 Create type

```js
// src/types/user.ts

export const userFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type UserFormFields = z.infer<typeof userFormSchema>
```

## 3.2 How to implement react-hook-form into form?

- Put type into `useForm()` hook
- Use `register()` method to bind form into hook
- Use `handleSubmit()` method to handle submit action
- Use `defaultValues` option in `useForm()` hook to set form default value

```js
// src/components/organisms/lesson-1-basic/Lesson_1.tsx

export const Lesson_1: FC<Lesson_1Props> = ({ className, ...props }) => {
  const { register, handleSubmit } = useForm<UserFormFields>({
    defaultValues: {
      email: 'test@co.co',
      password: '55555555',
    },
  })

  const onSubmit: SubmitHandler<UserFormFields> = (data) => {
    console.log({ data })
  }

  return (
    <form as="form" onSubmit={handleSubmit(onSubmit)} {...props}>
      {/* Email input */}
      <FormControl mb="15px">
        <FormLabel>Email</FormLabel>
        <Input type="text" placeholder="Email" {...register('email')} />
      </FormControl>

      <Button type="submit">Submit</Button>
    </form>
  )
}

```

## 3.3 How to get validate form?

- Use options in `register()` method
- Some common options: `required, minLength, pattern, validate`

```js
// src/components/organisms/lesson-2-form-validation/Lesson_2.tsx

export const Lesson_2: FC<Lesson_2Props> = ({ className, ...props }) => {
  const {
    register,
    handleSubmit,
  } = useForm<UserFormFields>()

  const onSubmit: SubmitHandler<UserFormFields> = (data) => {
    console.log({ data })
  }

  return (
    <form as="form" onSubmit={handleSubmit(onSubmit)} {...props}>
      {/* Email input */}
      <FormControl mb="15px">
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          placeholder="Email"
          {...register('email', {
            required: 'Email is required',
            minLength: {
              value: 3,
              message: 'Email is not valid',
            },
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,

            // Another way to validate
            validate: (value) => {
              if (!value.includes('@')) {
                return 'Email must include @'
              }

              return true
            },
          })}
        />
      </FormControl>

      <Button type="submit">Submit</Button>
    </form>
  )
}
```

## 3.4 How to validate form with Zod?

### 3.4.1 Create type and schema

```js
// src/types/user.ts

export const userFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type UserFormFields = z.infer<typeof userFormSchema>
```

### 3.4.2 Add zod schema into form

- Add `zodResolver()` method from `'@hookform/resolvers/zod'` lib into `resolver` option in `useForm()` hook
- Add schema created into `zodResolver()` method

```js
// src/components/organisms/lesson-4-form-validation-zod/Lesson_4.tsx

import { zodResolver } from '@hookform/resolvers/zod'

export const Lesson_4: FC<Lesson_4Props> = ({ className, ...props }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<UserFormFields>({
    defaultValues: {
      email: 'test@co.co',
      password: '55555555',
    },
    resolver: zodResolver(userFormSchema),
  })

  const onSubmit: SubmitHandler<UserFormFields> = async (data) => {
    // Your code here
  }

  return (
    <form as="form" onSubmit={handleSubmit(onSubmit)} {...props}>
      {/* Email input */}
      <FormControl mb="15px" isInvalid={!!errors?.email}>
        <FormLabel>Email</FormLabel>
        <Input type="text" placeholder="Email" {...register('email')} />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
      </FormControl>

      {/* Password input */}
      <FormControl mb="15px" isInvalid={!!errors?.password}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
      </FormControl>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Loading...' : 'Submit'}
      </Button>

      <FormControl isInvalid={!!errors?.root}>
        <FormErrorMessage>{errors?.root?.message}</FormErrorMessage>
      </FormControl>
    </form>
  )
}
```

## 3.5 How to get form errors?

- Use `formState: { errors }` of `useForm()` hook
- Use `errors[property].message` to get error message

```js
// src/components/organisms/lesson-2-form-validation/Lesson_2.tsx

export const Lesson_2: FC<Lesson_2Props> = ({ className, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormFields>()

  const onSubmit: SubmitHandler<UserFormFields> = (data) => {
    console.log({ data })
  }

  return (
    <form as="form" onSubmit={handleSubmit(onSubmit)} {...props}>
      {/* Email input */}
      <FormControl mb="15px" isInvalid={!!errors?.email}>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          placeholder="Email"
          {...register('email', {
            // Validation code
          })}
        />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
      </FormControl>

      <Button type="submit">Submit</Button>
    </form>
  )
}
```

## 3.6 How to set form errors?

- Use `setError()` method to set error for specific registered form, or the whole form with `root`

```js
// src/components/organisms/lesson-3-advance/Lesson_3.tsx

export const Lesson_2: FC<Lesson_2Props> = ({ className, ...props }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UserFormFields>({
    defaultValues: {
      email: 'test@co.co',
      password: '55555555',
    },
  })

  const onSubmit: SubmitHandler<UserFormFields> = async (data) => {
    try {
      const res = await new Promise((resolve) =>
        setTimeout(() => resolve(data), 2000),
      )

      console.log({ res })

      throw new Error()
    } catch (error) {
      setError('email', {
        message: 'Email already exists',
      })
      setError('root', {
        message: 'Something went wrong',
      })
    }
  }

  return (
    <form as="form" onSubmit={handleSubmit(onSubmit)} {...props}>
      {/* Email input */}
      <FormControl mb="15px" isInvalid={!!errors?.email}>
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          placeholder="Email"
          {...register('email', {
            // Validation code
          })}
        />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
      </FormControl>

      <Button type="submit">Submit</Button>

      <FormControl isInvalid={!!errors?.root}>
        <FormErrorMessage>{errors?.root?.message}</FormErrorMessage>
      </FormControl>
    </form>
  )
}
```

# 4. How to use zod?

- Type of zod: `number(), string(), boolean(), date(), object(), nullish(), nullable()`
- Array type of zod: `array(), tuple()`
- Some common methods: `optional(), default(), min(), max(), length(), nonempty()`

## 4.1 How to create basic schema?

- By default, all fields are required
- Use as const to make it readonly
- array() is used to define an array
- tuple() is used to define an array with a fixed number of elements
- rest() is used to define the rest of the elements in a tuple
- nullable() means null
- nullish() means null or undefined

```js
// src/types/user.ts

const hobbies = ['reading', 'coding', 'gaming'] as const

export const UserSchema = z.object({
  username: z.string().min(3).max(20),
  age: z.number(),
  birthday: z.date().optional(),
  isProgrammer: z.boolean().nullish().default(false),
  hobbies: z.enum(hobbies).optional(),
})
export type User = z.infer<typeof UserSchema>

export const UserListSchema = z.array(UserSchema).nonempty()
export const ListSchema = z.array(z.number()).nonempty()
export const ListSchemaAdvanced = z
  .tuple([z.number(), z.string()])
  .rest(z.number())
```

## 4.2 How to validate based on schema?

- parse() will return valid data or throw an error if the data is invalid
- safeParse() will return an object with success (true/false) and data properties

```js
// src/components/organisms/lesson-5-zod-basic/Lesson_5.tsx

  const user: User = {
    username: 'John Doe',
    age: 20,
    birthday: new Date(),
    isProgrammer: true,
    hobbies: 'coding',
  }

  // const userCheck = UserSchema.parse(user)
  const userCheck = UserSchema.safeParse(user)
```

## 4.3 How to modify schema?

- partial() is used to make all fields optional
- pick() will return a new schema with only the specified fields
- omit() will return a new schema without the specified fields
- extend() will return a new schema with the specified fields added
- strict() will throw an error if there are extra fields
- shape is a property that contains all the properties of the schema

```js
// src/types/user.ts

// strict() will throw an error if there are extra fields
export const UserSchemaInitial = z
  .object({
    fullName: z.string().min(3).max(20),
  })
  .strict()

// partial() is used to make all fields optional
export const UserSchemaPartial = UserSchema.partial()

// pick() will return a new schema with only the specified fields
export const UserSchemaBasic = UserSchema.pick({
  username: true,
  age: true,
})

// omit() will return a new schema without the specified fields
export const UserSchemaWithoutAge = UserSchema.omit({ age: true })

// extend() will return a new schema with the specified fields added
export const UserSchemaExtended = UserSchema.extend({
  gender: z.string().optional(),
})
```
