import { UserCellPhoneNumber } from '../../../../../src/contexts/ecommerce/users/domain/UserCellPhoneNumber'
import { CellPhoneNumberMother } from '../../../shared/domain/CellPhoneNumberMother'

export class UserCellPhoneNumberMother {
  static create(value: string): UserCellPhoneNumber {
    return new UserCellPhoneNumber(value)
  }

  static random(): UserCellPhoneNumber {
    return this.create(CellPhoneNumberMother.random())
  }

  static invalidCellPhoneNumber(): string {
    return this.createNumber(8)
  }

  static createNumber(lenght = 4) {
    const number = Array.from({ length: lenght }, () => this.getRandomInt())
    return number.join('')
  }

  static getRandomInt() {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    return numbers[Math.floor(Math.random() * numbers.length)]
  }
}
