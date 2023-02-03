import { UserLoginRequest } from '../../../../../src/contexts/ecommerce/users/application/UserLoginRequest'
import { UserCellPhoneNumber } from '../../../../../src/contexts/ecommerce/users/domain/UserCellPhoneNumber'
import { UserCellPhoneNumberMother } from '../domain/userCellPhoneNumberMother'

export class UserLoginRequestMother {
  static create(cellPhoneNumber: UserCellPhoneNumber): UserLoginRequest {
    return {
      cellPhoneNumber: cellPhoneNumber.value
    }
  }

  static random(): UserLoginRequest {
    return this.create(UserCellPhoneNumberMother.random())
  }
}
