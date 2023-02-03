import { Module, Provider } from '@nestjs/common'
import { GenerateUserCredentialsOnUserLogin } from '../../../contexts/ecommerce/userCredentials/application/GenerateUserCredentialsOnUserLogin'
import { UserCredentialsGenerate } from '../../../contexts/ecommerce/userCredentials/application/UserCredentialsGenerate'
import { UserCredentialsVerifyToken } from '../../../contexts/ecommerce/userCredentials/application/UserCredentialsVerifyToken'
import { UserCredentialsRepository } from '../../../contexts/ecommerce/userCredentials/domain/UserCredentialsRepository'
import { PostgresUserCredentialsRepository } from '../../../contexts/ecommerce/userCredentials/infrastructure/PostgresUserCredentialsRepository'
import { UserRepository } from '../../../contexts/ecommerce/users/domain/UserRepository'
import { EventBus } from '../../../contexts/shared/domain/EventBus'
import { SharedModule } from '../shared/shared.module'
import { UsersModule } from '../users/users.module'
import { UserCredentialsEventsController } from './controllers/UserCredentialsEventsController'
import { UserCredentialsPostController } from './controllers/UserCredentialsPost.controller'

const GenerateUserCredentialsOnUserLoginProvider: Provider = {
  provide: GenerateUserCredentialsOnUserLogin,
  useFactory: (userCredentialsGenerate: UserCredentialsGenerate) =>
    new GenerateUserCredentialsOnUserLogin(userCredentialsGenerate),
  inject: [UserCredentialsGenerate]
}

const UserCredentialsGenerateProvider: Provider = {
  provide: UserCredentialsGenerate,
  useFactory: (
    userRepository: UserRepository,
    userCredentialsRepository: UserCredentialsRepository,
    eventBus: EventBus
  ) =>
    new UserCredentialsGenerate(
      userRepository,
      userCredentialsRepository,
      eventBus
    ),
  inject: [UserRepository, UserCredentialsRepository, EventBus]
}

const UserCredentialsVerifyTokenProvider: Provider = {
  provide: UserCredentialsVerifyToken,
  useFactory: (
    userRepository: UserRepository,
    userCredentialsRepository: UserCredentialsRepository,
    eventBus: EventBus
  ) =>
    new UserCredentialsVerifyToken(
      userRepository,
      userCredentialsRepository,
      eventBus
    ),
  inject: [UserRepository, UserCredentialsRepository, EventBus]
}

@Module({
  imports: [SharedModule, UsersModule],
  controllers: [UserCredentialsEventsController, UserCredentialsPostController],
  providers: [
    {
      provide: UserCredentialsRepository,
      useClass: PostgresUserCredentialsRepository
    },
    UserCredentialsGenerateProvider,
    GenerateUserCredentialsOnUserLoginProvider,
    UserCredentialsVerifyTokenProvider
  ]
})
export class UserCredentialsModule {}
