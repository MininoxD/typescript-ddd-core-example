import { EventBus } from '../../../shared/domain/EventBus'
import { UserCellPhoneNumber } from '../../users/domain/UserCellPhoneNumber'
import { UserRepository } from '../../users/domain/UserRepository'
import { UserCredentials } from '../domain/UserCredentials'
import { UserCredentialsRepository } from '../domain/UserCredentialsRepository'
import { UserCredentialsToken } from '../domain/UserCredentialsToken'
import { UserCredentialsTokenCreatedAt } from '../domain/UserCredentialsTokenCreatedAt'

export class UserCredentialsGenerate {
  constructor(
    private userRepository: UserRepository,
    private userCredentialsRepository: UserCredentialsRepository,
    private eventBus: EventBus
  ) {}

  async run(cellPhoneNumber: UserCellPhoneNumber): Promise<void> {
    const user = await this.userRepository.findUserByCellPhoneNumber(
      cellPhoneNumber.value
    )
    if (!user) throw new Error('User not found')
    const userCredentials = UserCredentials.create({
      idUser: user.id,
      token: UserCredentialsToken.random(),
      tokenCreatedAt: UserCredentialsTokenCreatedAt.now()
    })
    await this.userCredentialsRepository.upsert(userCredentials)
    await this.userCredentialsRepository.send(userCredentials)
    await this.eventBus.publish(userCredentials.pullDomainEvents())
  }
}
