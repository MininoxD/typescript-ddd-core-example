import { UserCellPhoneNumber } from '../../../../../src/contexts/ecommerce/users/domain/UserCellPhoneNumber'
import { UserId } from '../../../../../src/contexts/ecommerce/shared/domain/users/userId'
import { CreateUserRequest } from '../../../../../src/contexts/ecommerce/users/application/createUserRequest'
import { UserCellPhoneNumberMother } from '../domain/userCellPhoneNumberMother'
import { UserIdMother } from '../domain/userIdMother'
export class CreateUserRequestMother {
  static create(
    id: UserId,
    cellPhoneNumber: UserCellPhoneNumber
  ): CreateUserRequest {
    return {
      id: id.value,
      cellPhoneNumber: cellPhoneNumber.value
    }
  }

  static random(): CreateUserRequest {
    return this.create(
      UserIdMother.random(),
      UserCellPhoneNumberMother.random()
    )
  }
}
