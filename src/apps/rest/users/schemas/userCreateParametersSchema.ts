import { z } from 'zod'

export const UserCreateParametersSchema = z.object({
  id: z.string().uuid(),
  cellPhoneNumber: z.string().regex(/^[0-9]{9}$/)
})
