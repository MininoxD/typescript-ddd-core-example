import { Nullable } from '../../../shared/domain/Nullable'
import { PostgresRepository } from '../../../shared/infrastructure/persistance/postgressql/PostgresRepository'
import { UserCredentials } from '../domain/UserCredentials'
import { UserCredentialsRepository } from '../domain/UserCredentialsRepository'

export class PostgresUserCredentialsRepository
  extends PostgresRepository
  implements UserCredentialsRepository
{
  constructor() {
    super()
  }
  async upsert(userCredentials: UserCredentials): Promise<void> {
    await this.prisma.userCredentials.upsert({
      where: {
        idUser: userCredentials.idUser.value
      },
      update: {
        token: userCredentials.token.value,
        tokenCreatedAt: userCredentials.tokenCreatedAt.value
      },
      create: userCredentials.toPrimitives()
    })
  }
  async send(userCredentials: UserCredentials): Promise<void> {
    console.log('UserCredentials sent to user')
    console.log(userCredentials.toPrimitives())
  }

  async findByIdUser(idUser: string): Promise<Nullable<UserCredentials>> {
    const userCredentials = await this.prisma.userCredentials.findUnique({
      where: {
        idUser
      }
    })
    if (!userCredentials) return null
    return UserCredentials.fromPrimitives(userCredentials)
  }
}
