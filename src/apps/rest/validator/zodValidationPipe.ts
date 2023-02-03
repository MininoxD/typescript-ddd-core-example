import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common'
import { z } from 'zod'

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: z.ZodSchema) {}

  transform(value: any) {
    const validation = this.schema.safeParse(value)
    if (!validation.success) {
      throw new BadRequestException('Validation failed', {
        description: (validation as any).error?.issues
      })
    }
    return value
  }
}
