import { AggregateRoot } from '../../../shared/domain/AggregateRoot'
import { UserId } from '../../shared/domain/users/userId'
import { UserCredentialsCellPhoneNumberVerifyDomainEvent } from './UserCredentialsCellPhoneNumberVerifyDomainEvent'
import { UserCredentialsToken } from './UserCredentialsToken'
import { UserCredentialsTokenCreatedAt } from './UserCredentialsTokenCreatedAt'

export class UserCredentials extends AggregateRoot {
  readonly idUser: UserId
  readonly token: UserCredentialsToken
  readonly tokenCreatedAt: UserCredentialsTokenCreatedAt
  constructor({
    idUser,
    token,
    tokenCreatedAt
  }: {
    idUser: UserId
    token: UserCredentialsToken
    tokenCreatedAt: UserCredentialsTokenCreatedAt
  }) {
    super()
    this.idUser = idUser
    this.token = token
    this.tokenCreatedAt = tokenCreatedAt
  }

  static create({
    idUser,
    token,
    tokenCreatedAt
  }: {
    idUser: UserId
    token: UserCredentialsToken
    tokenCreatedAt: UserCredentialsTokenCreatedAt
  }): UserCredentials {
    return new UserCredentials({
      idUser,
      token,
      tokenCreatedAt
    })
  }

  static verifyToken({
    idUser,
    token,
    tokenCreatedAt
  }: {
    idUser: UserId
    token: UserCredentialsToken
    tokenCreatedAt: UserCredentialsTokenCreatedAt
  }): UserCredentials {
    return new UserCredentials({
      idUser,
      token,
      tokenCreatedAt
    })
  }

  static cellPhoneNumberVerify({
    idUser,
    token,
    tokenCreatedAt
  }: {
    idUser: UserId
    token: UserCredentialsToken
    tokenCreatedAt: UserCredentialsTokenCreatedAt
  }): UserCredentials {
    const userCredentials = new UserCredentials({
      idUser,
      token,
      tokenCreatedAt
    })
    userCredentials.record(
      new UserCredentialsCellPhoneNumberVerifyDomainEvent({
        aggregateId: userCredentials.idUser.value,
        attributes: {
          cellPhoneNumber: userCredentials.idUser.value
        }
      })
    )
    return userCredentials
  }

  toPrimitives() {
    return {
      idUser: this.idUser.value,
      token: this.token.value,
      tokenCreatedAt: this.tokenCreatedAt.value
    }
  }

  static fromPrimitives({
    idUser,
    token,
    tokenCreatedAt
  }: {
    idUser: string
    token: string
    tokenCreatedAt: Date
  }): UserCredentials {
    return new UserCredentials({
      idUser: new UserId(idUser),
      token: new UserCredentialsToken(token),
      tokenCreatedAt: new UserCredentialsTokenCreatedAt(tokenCreatedAt)
    })
  }
}
