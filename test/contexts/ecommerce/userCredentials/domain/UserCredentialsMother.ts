import { UserId } from '../../../../../src/contexts/ecommerce/shared/domain/users/userId'
import { UserCredentialsToken } from '../../../../../src/contexts/ecommerce/userCredentials/domain/UserCredentialsToken'
import { UserCredentialsTokenCreatedAt } from '../../../../../src/contexts/ecommerce/userCredentials/domain/UserCredentialsTokenCreatedAt'
import { UserCredentials } from '../../../../../src/contexts/ecommerce/userCredentials/domain/UserCredentials'
export class UserCredentialsMother {
  static create(
    idUser: UserId,
    token: UserCredentialsToken,
    tokenCreatedAt: UserCredentialsTokenCreatedAt
  ): UserCredentials {
    return new UserCredentials({
      idUser,
      token,
      tokenCreatedAt
    })
  }

  static fromUserVerify(idUser: UserId, token: string): UserCredentials {
    return this.create(
      idUser,
      new UserCredentialsToken(token),
      UserCredentialsTokenCreatedAt.now()
    )
  }
}
