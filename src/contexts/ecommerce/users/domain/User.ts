import { AggregateRoot } from '../../../shared/domain/AggregateRoot'
import { UserId } from '../../shared/domain/users/userId'
import { UserCellPhoneNumberIsVerified } from './UserCellPhoneNumberIsVerified'
import { UserCreatedDomainEvent } from './UserCreatedDomainEvent'
import { UserCellPhoneNumber } from './UserCellPhoneNumber'
import { UserLoginDomainEvent } from './UserLoginDomainEvent'
export class User extends AggregateRoot {
  readonly id: UserId
  readonly cellPhoneNumber: UserCellPhoneNumber
  readonly cellPhoneNumberIsVerified: UserCellPhoneNumberIsVerified
  constructor({
    id,
    cellPhoneNumber,
    cellPhoneNumberIsVerified
  }: {
    id: UserId
    cellPhoneNumber: UserCellPhoneNumber
    cellPhoneNumberIsVerified: UserCellPhoneNumberIsVerified
  }) {
    super()
    this.id = id
    this.cellPhoneNumber = cellPhoneNumber
    this.cellPhoneNumberIsVerified = cellPhoneNumberIsVerified
  }

  static create({
    id,
    cellPhoneNumber,
    cellPhoneNumberIsVerified
  }: {
    id: UserId
    cellPhoneNumber: UserCellPhoneNumber
    cellPhoneNumberIsVerified: UserCellPhoneNumberIsVerified
  }): User {
    const user = new User({
      id,
      cellPhoneNumber,
      cellPhoneNumberIsVerified
    })
    user.record(
      new UserCreatedDomainEvent({
        aggregateId: user.id.value,
        attributes: {
          id: user.id.value,
          cellPhoneNumber: user.cellPhoneNumber.value
        }
      })
    )
    return user
  }

  static login({
    id,
    cellPhoneNumber,
    cellPhoneNumberIsVerified
  }: {
    id: UserId
    cellPhoneNumber: UserCellPhoneNumber
    cellPhoneNumberIsVerified: UserCellPhoneNumberIsVerified
  }): User {
    const user = new User({
      id,
      cellPhoneNumber,
      cellPhoneNumberIsVerified
    })
    user.record(
      new UserLoginDomainEvent({
        aggregateId: user.id.value,
        attributes: {
          cellPhoneNumber: user.cellPhoneNumber.value
        }
      })
    )
    return user
  }

  toPrimitives() {
    return {
      id: this.id.value,
      cellPhoneNumber: this.cellPhoneNumber.value,
      cellPhoneNumberIsVerified: this.cellPhoneNumberIsVerified.value
    }
  }

  static fromPrimitives({
    id,
    cellPhoneNumber,
    cellPhoneNumberIsVerified
  }: {
    id: string
    cellPhoneNumber: string
    cellPhoneNumberIsVerified: boolean
  }): User {
    return new User({
      id: new UserId(id),
      cellPhoneNumber: new UserCellPhoneNumber(cellPhoneNumber),
      cellPhoneNumberIsVerified: new UserCellPhoneNumberIsVerified(
        cellPhoneNumberIsVerified
      )
    })
  }
}
