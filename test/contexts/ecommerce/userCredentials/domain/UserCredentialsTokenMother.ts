import { UserCredentialsToken } from '../../../../../src/contexts/ecommerce/userCredentials/domain/UserCredentialsToken'

export class UserCredentialsTokenMother {
  static create(value: string): UserCredentialsToken {
    return new UserCredentialsToken(value)
  }

  static random(): UserCredentialsToken {
    return this.create(UserCredentialsToken.generate())
  }
}
