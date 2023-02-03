import { Controller } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'
import { UserCredentialsCellPhoneNumberVerifyDomainEvent } from '../../../../contexts/ecommerce/userCredentials/domain/UserCredentialsCellPhoneNumberVerifyDomainEvent'
import { CellPhoneNumberVerifiedOnUserCredentialsVerifyToken } from '../../../../contexts/ecommerce/users/application/CellPhoneNumberVerifiedOnUserCredentialsVerifyToken'

@Controller()
export class UserEventsController {
  constructor(
    private cellPhoneNumberVerifiedOnUserCredentialsVerifyToken: CellPhoneNumberVerifiedOnUserCredentialsVerifyToken
  ) {}
  @EventPattern('ecommerce.userCredentials.cellPhoneNumberVerify')
  async handleUserVerifyCellPhoneNumber(
    event: UserCredentialsCellPhoneNumberVerifyDomainEvent
  ) {
    await this.cellPhoneNumberVerifiedOnUserCredentialsVerifyToken.on(event)
  }
}
