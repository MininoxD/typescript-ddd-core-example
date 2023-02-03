import { EventBus } from '../../../shared/domain/EventBus'
import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'
import { UserLoginRequest } from './UserLoginRequest'

export class UserLogin {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly eventBus: EventBus
  ) {}

  async run(request: UserLoginRequest): Promise<void> {
    const userExit = await this.userRepository.findUserByCellPhoneNumber(
      request.cellPhoneNumber
    )
    if (!userExit) throw new Error('User not found')
    const user = User.login({
      id: userExit.id,
      cellPhoneNumber: userExit.cellPhoneNumber,
      cellPhoneNumberIsVerified: userExit.cellPhoneNumberIsVerified
    })
    await this.eventBus.publish(user.pullDomainEvents())
  }
}
