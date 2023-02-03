import { EventBus } from '../../../shared/domain/EventBus'
import { UserCellPhoneNumber } from '../domain/UserCellPhoneNumber'
import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'
import { CreateUserRequest } from './createUserRequest'
import { UserCellPhoneNumberIsVerified } from '../domain/UserCellPhoneNumberIsVerified'
import { UserId } from '../../shared/domain/users/userId'

export class UserCreator {
  constructor(
    private userRepository: UserRepository,
    private eventBus: EventBus
  ) {}

  async run({ id, cellPhoneNumber }: CreateUserRequest): Promise<void> {
    const userUuid = new UserId(id)
    const userCellPhoneNumber = new UserCellPhoneNumber(cellPhoneNumber)

    const userExist = await this.userRepository.findUserByCellPhoneNumber(
      userCellPhoneNumber.value
    )

    if (userExist) throw new Error('User already exist')

    const user = User.create({
      id: userUuid,
      cellPhoneNumber: userCellPhoneNumber,
      cellPhoneNumberIsVerified: UserCellPhoneNumberIsVerified.initial()
    })

    await this.userRepository.save(user)
    await this.eventBus.publish(user.pullDomainEvents())
  }
}
