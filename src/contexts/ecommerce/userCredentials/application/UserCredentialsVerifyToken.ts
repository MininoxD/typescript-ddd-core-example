import { EventBus } from '../../../shared/domain/EventBus'
import { UserRepository } from '../../users/domain/UserRepository'
import { UserCredentials } from '../domain/UserCredentials'
import { UserCredentialsRepository } from '../domain/UserCredentialsRepository'
import { UserCredentialsVerifyTokenRequest } from './UserCredentialsVerifyTokenRequest'

export class UserCredentialsVerifyToken {
  constructor(
    private userRepository: UserRepository,
    private userCredentialsRepository: UserCredentialsRepository,
    private eventBus: EventBus
  ) {}

  async run(request: UserCredentialsVerifyTokenRequest): Promise<void> {
    const userExist = await this.userRepository.findUserByCellPhoneNumber(
      request.cellPhoneNumber
    )
    if (!userExist) throw new Error('User not found')
    const userCredentialsExist =
      await this.userCredentialsRepository.findByIdUser(userExist.id.value)
    if (!userCredentialsExist) throw new Error('User credentials not found')
    if (userCredentialsExist.tokenCreatedAt.expire())
      throw new Error('Token expired')
    if (!userCredentialsExist.token.equals(request.token))
      throw new Error('Token invalid')
    if (userExist.cellPhoneNumberIsVerified.value) {
      const userCredentials = UserCredentials.verifyToken(userCredentialsExist)
      await this.eventBus.publish(userCredentials.pullDomainEvents())
    } else {
      const userCredentials =
        UserCredentials.cellPhoneNumberVerify(userCredentialsExist)
      await this.eventBus.publish(userCredentials.pullDomainEvents())
    }
  }
}
