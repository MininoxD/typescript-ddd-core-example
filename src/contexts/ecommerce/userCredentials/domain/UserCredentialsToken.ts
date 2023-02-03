import { AuthCode } from '../../../shared/domain/value-object/AuthCode'

export class UserCredentialsToken extends AuthCode {
  static random(): UserCredentialsToken {
    return new UserCredentialsToken(this.generate())
  }

  static generate(lenght = 4): string {
    const number = Array.from({ length: lenght }, () => this.getRandomInt())
    return number.join('')
  }

  static getRandomInt() {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    return numbers[Math.floor(Math.random() * numbers.length)]
  }
}
