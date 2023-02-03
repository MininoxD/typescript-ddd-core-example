import { DomainEventSubscriber } from '../../../shared/domain/DomainEventSubscriber'
import { UserCredentialsGenerate } from './UserCredentialsGenerate'
import { UserLoginDomainEvent } from '../../users/domain/UserLoginDomainEvent'
import { UserCellPhoneNumber } from '../../users/domain/UserCellPhoneNumber'
export class GenerateUserCredentialsOnUserLogin
  implements DomainEventSubscriber<UserLoginDomainEvent>
{
  constructor(
    private readonly userCredentialsGenerate: UserCredentialsGenerate
  ) {}

  async on(domainEvent: UserLoginDomainEvent): Promise<void> {
    await this.userCredentialsGenerate.run(
      new UserCellPhoneNumber(domainEvent.attributes.cellPhoneNumber)
    )
  }
}
