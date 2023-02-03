import { Controller } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'
import { GenerateUserCredentialsOnUserLogin } from '../../../../contexts/ecommerce/userCredentials/application/GenerateUserCredentialsOnUserLogin'
import { UserLoginDomainEvent } from '../../../../contexts/ecommerce/users/domain/UserLoginDomainEvent'

@Controller()
export class UserCredentialsEventsController {
  constructor(
    private generateUserCredentialsOnUserLogin: GenerateUserCredentialsOnUserLogin
  ) {}
  @EventPattern('ecommerce.user.login')
  async handleUserLogin(data: UserLoginDomainEvent) {
    this.generateUserCredentialsOnUserLogin.on(data)
  }
}
