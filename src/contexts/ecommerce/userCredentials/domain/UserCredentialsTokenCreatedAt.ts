import { DateValueObject } from '../../../shared/domain/value-object/dateValueObject'

export class UserCredentialsTokenCreatedAt extends DateValueObject {
  static now(): UserCredentialsTokenCreatedAt {
    return new UserCredentialsTokenCreatedAt(new Date())
  }
  expire(): boolean {
    const dateNow = new Date()
    if (dateNow.getTime() - this.value.getTime() < 300000) return false
    return true
  }
}
