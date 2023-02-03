import { UserCredentialsVerifyTokenRequest } from '../../../../../src/contexts/ecommerce/userCredentials/application/UserCredentialsVerifyTokenRequest'
import { UserCredentialsToken } from '../../../../../src/contexts/ecommerce/userCredentials/domain/UserCredentialsToken'
import { UserCellPhoneNumber } from '../../../../../src/contexts/ecommerce/users/domain/UserCellPhoneNumber'
import { UserCellPhoneNumberMother } from '../../users/domain/userCellPhoneNumberMother'
import { UserCredentialsTokenMother } from '../domain/UserCredentialsTokenMother'

export class UserCredentialsVerifyTokenRequestMother {
  static create(
    cellPhoneNumber: UserCellPhoneNumber,
    token: UserCredentialsToken
  ): UserCredentialsVerifyTokenRequest {
    return {
      cellPhoneNumber: cellPhoneNumber.value,
      token: token.value
    }
  }

  static random(): UserCredentialsVerifyTokenRequest {
    return this.create(
      UserCellPhoneNumberMother.random(),
      UserCredentialsTokenMother.random()
    )
  }
}
