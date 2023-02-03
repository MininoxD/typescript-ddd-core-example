import { z } from 'zod'

export const UserLoginParametersSchema = z.object({
  cellPhoneNumber: z.string().regex(/^[0-9]{9}$/)
})
