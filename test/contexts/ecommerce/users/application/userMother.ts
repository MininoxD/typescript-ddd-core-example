import { UserCellPhoneNumber } from '../../../../../src/contexts/ecommerce/users/domain/UserCellPhoneNumber'
import { UserId } from '../../../../../src/contexts/ecommerce/shared/domain/users/userId'
import { CreateUserRequest } from '../../../../../src/contexts/ecommerce/users/application/createUserRequest'
import { User } from '../../../../../src/contexts/ecommerce/users/domain/User'
import { UserCellPhoneNumberIsVerified } from '../../../../../src/contexts/ecommerce/users/domain/UserCellPhoneNumberIsVerified'
import { UserCellPhoneNumberMother } from '../domain/userCellPhoneNumberMother'
import { UserIdMother } from '../domain/userIdMother'
import { UserLoginRequest } from '../../../../../src/contexts/ecommerce/users/application/UserLoginRequest'
import { UserCredentialsVerifyTokenRequest } from '../../../../../src/contexts/ecommerce/userCredentials/application/UserCredentialsVerifyTokenRequest'

export class UserMother {
  static create(
    id: UserId,
    cellPhoneNumber: UserCellPhoneNumber,
    cellPhoneNumberIsVerified: UserCellPhoneNumberIsVerified
  ): User {
    return new User({
      id,
      cellPhoneNumber,
      cellPhoneNumberIsVerified
    })
  }
  static fromRequest(request: CreateUserRequest): User {
    return this.create(
      UserIdMother.create(request.id),
      UserCellPhoneNumberMother.create(request.cellPhoneNumber),
      UserCellPhoneNumberIsVerified.initial()
    )
  }

  static fromRequestLogin(request: UserLoginRequest): User {
    return this.create(
      UserIdMother.random(),
      UserCellPhoneNumberMother.create(request.cellPhoneNumber),
      UserCellPhoneNumberIsVerified.initial()
    )
  }

  static fromRequestLoginVerified(
    request: UserCredentialsVerifyTokenRequest
  ): User {
    return this.create(
      UserIdMother.random(),
      UserCellPhoneNumberMother.create(request.cellPhoneNumber),
      UserCellPhoneNumberIsVerified.initial()
    )
  }
}
