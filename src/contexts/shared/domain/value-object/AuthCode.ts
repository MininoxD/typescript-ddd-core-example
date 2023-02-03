import { InvalidArgumentError } from './InvalidArgumentError'

export class AuthCode {
  readonly value: string
  constructor(value: string) {
    this.ensureIsValidAuthCode(value)
    this.value = value
  }

  private ensureIsValidAuthCode(value: string): void {
    const regex = /^[1-9]*$/
    const onlyNumbers = regex.test(value)
    if (!onlyNumbers)
      throw new InvalidArgumentError('Only numbers are accepted')
  }

  equals(code: string): boolean {
    return code === this.value
  }
}
