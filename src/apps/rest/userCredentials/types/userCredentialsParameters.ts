import { z } from 'zod'
import { UserCredentialsVerifyParametersSchema } from '../schemas/userCredentialsVerifyParametersSchema'
export type UserCredentialsVerifyParameters = z.infer<
  typeof UserCredentialsVerifyParametersSchema
>
