import { Module } from '@nestjs/common'
import { UserCredentialsModule } from './userCredentials/userCredentials.moduel'
import { UsersModule } from './users/users.module'
@Module({
  imports: [UsersModule, UserCredentialsModule]
})
export class AppModule {}
