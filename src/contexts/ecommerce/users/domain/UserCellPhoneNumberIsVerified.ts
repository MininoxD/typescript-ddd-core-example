import { BooleanValueObject } from '../../../shared/domain/value-object/booleanValueObject'

export class UserCellPhoneNumberIsVerified extends BooleanValueObject {
  static initial(): UserCellPhoneNumberIsVerified {
    return new UserCellPhoneNumberIsVerified(false)
  }
}
