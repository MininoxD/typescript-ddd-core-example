import { z } from 'zod'

export const UserCredentialsVerifyParametersSchema = z.object({
  cellPhoneNumber: z.string().regex(/^[0-9]{9}$/),
  token: z.string().regex(/^[1-9]{4}$/)
})
