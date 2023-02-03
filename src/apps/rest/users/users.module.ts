import { Module, Provider } from '@nestjs/common'
import { CellPhoneNumberVerifiedOnUserCredentialsVerifyToken } from '../../../contexts/ecommerce/users/application/CellPhoneNumberVerifiedOnUserCredentialsVerifyToken'
import { UserCellPhoneNumberVerified } from '../../../contexts/ecommerce/users/application/UserCellPhoneNumberVerified'
import { UserCreator } from '../../../contexts/ecommerce/users/application/UserCreator'
import { UserLogin } from '../../../contexts/ecommerce/users/application/UserLogin'
import { UserRepository } from '../../../contexts/ecommerce/users/domain/UserRepository'
import { PostgresUserRepository } from '../../../contexts/ecommerce/users/infrastructure/PostgresUserRepository'
import { EventBus } from '../../../contexts/shared/domain/EventBus'
import { SharedModule } from '../shared/shared.module'
import { UserEventsController } from './controllers/userEvents.controller'
import { UserPostController } from './controllers/userPostController'
import { UserPutController } from './controllers/userPut.Controller'

const UserCreatorProvider: Provider = {
  provide: UserCreator,
  useFactory: (repository: UserRepository, eventBus: EventBus) =>
    new UserCreator(repository, eventBus),
  inject: [UserRepository, EventBus]
}

const UserLoginProvider: Provider = {
  provide: UserLogin,
  useFactory: (repository: UserRepository, eventBus: EventBus) =>
    new UserLogin(repository, eventBus),
  inject: [UserRepository, EventBus]
}

const CellPhoneNumberVerifiedOnUserCredentialsVerifyTokenProvider: Provider = {
  provide: CellPhoneNumberVerifiedOnUserCredentialsVerifyToken,
  useFactory: (userCellPhoneNumberVerified: UserCellPhoneNumberVerified) =>
    new CellPhoneNumberVerifiedOnUserCredentialsVerifyToken(
      userCellPhoneNumberVerified
    ),
  inject: [UserCellPhoneNumberVerified]
}

const UserCellPhoneNumberVerifiedProvider: Provider = {
  provide: UserCellPhoneNumberVerified,
  useFactory: (repository: UserRepository) =>
    new UserCellPhoneNumberVerified(repository),
  inject: [UserRepository]
}
@Module({
  imports: [SharedModule],
  controllers: [UserPutController, UserPostController, UserEventsController],
  providers: [
    {
      provide: UserRepository,
      useClass: PostgresUserRepository
    },
    UserCreatorProvider,
    UserLoginProvider,
    UserCellPhoneNumberVerifiedProvider,
    CellPhoneNumberVerifiedOnUserCredentialsVerifyTokenProvider
  ],
  exports: [UserRepository]
})
export class UsersModule {}
