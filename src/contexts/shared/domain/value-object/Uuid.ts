import { z } from 'zod'
import { InvalidArgumentError } from './InvalidArgumentError'
import { v4 } from 'uuid'
export class Uuid {
  readonly value: string
  constructor(value: string) {
    this.ensureIsValidUuid(value)
    this.value = value
  }

  private ensureIsValidUuid(value: string): void {
    const schema = z.string().uuid()
    const validate = schema.safeParse(value)
    if (!validate.success) {
      throw new InvalidArgumentError(
        `${this.constructor.name} Does not allow  the value ${this.value}`
      )
    }
  }

  static random(): Uuid {
    return new Uuid(v4())
  }

  toString(): string {
    return this.value
  }
}
