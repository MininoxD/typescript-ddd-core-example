import { InvalidArgumentError } from '../../../shared/domain/value-object/InvalidArgumentError'

export class UserCellPhoneNumber {
  readonly value: string
  private celPhoneLength = 9

  constructor(value: string) {
    this.ensureIsValidPhoneNumber(value)
    this.value = value
  }

  private ensureIsValidPhoneNumber(value: string): void {
    const regex = /^[0-9]*$/
    const onlyNumbers = regex.test(value)
    if (!onlyNumbers)
      throw new InvalidArgumentError('Only numbers are accepted')
    if (value.length !== this.celPhoneLength)
      throw new InvalidArgumentError('Invalid phone number')
  }
}
