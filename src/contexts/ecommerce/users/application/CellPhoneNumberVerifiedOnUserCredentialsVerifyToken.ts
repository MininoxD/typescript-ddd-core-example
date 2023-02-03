import { DomainEventSubscriber } from '../../../shared/domain/DomainEventSubscriber'
import { UserCellPhoneNumberVerified } from './UserCellPhoneNumberVerified'
import { UserCredentialsCellPhoneNumberVerifyDomainEvent } from '../../userCredentials/domain/UserCredentialsCellPhoneNumberVerifyDomainEvent'
export class CellPhoneNumberVerifiedOnUserCredentialsVerifyToken
  implements
    DomainEventSubscriber<UserCredentialsCellPhoneNumberVerifyDomainEvent>
{
  constructor(
    private userCellPhoneNumberVerified: UserCellPhoneNumberVerified
  ) {}

  on(
    domainEvent: UserCredentialsCellPhoneNumberVerifyDomainEvent
  ): Promise<void> {
    return this.userCellPhoneNumberVerified.run(domainEvent.aggregateId)
  }
}
