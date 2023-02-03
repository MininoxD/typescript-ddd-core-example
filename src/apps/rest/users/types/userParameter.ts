import { z } from 'zod'
import { UserCreateParametersSchema } from '../schemas/userCreateParametersSchema'
import { UserLoginParametersSchema } from '../schemas/userLoginParametersSchema'
export type UserCreateParameters = z.infer<typeof UserCreateParametersSchema>
export type UserLoginParameters = z.infer<typeof UserLoginParametersSchema>
