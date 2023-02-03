import { Nullable } from '../../../shared/domain/Nullable'
import { PostgresRepository } from '../../../shared/infrastructure/persistance/postgressql/PostgresRepository'
import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'

export class PostgresUserRepository
  extends PostgresRepository
  implements UserRepository
{
  constructor() {
    super()
  }
  async updateById(
    idUser: string,
    data: Partial<Omit<User, 'id'>>
  ): Promise<void> {
    await this.prisma.user.update({
      where: { id: idUser },
      data: {
        cellPhoneNumber: data.cellPhoneNumber?.value,
        cellPhoneNumberIsVerified: data.cellPhoneNumberIsVerified?.value
      }
    })
  }

  async save(user: User): Promise<void> {
    await this.prisma.user.create({
      data: user.toPrimitives()
    })
  }

  async findUserByCellPhoneNumber(
    cellPhoneNumber: string
  ): Promise<Nullable<User>> {
    const user = await this.prisma.user.findUnique({
      where: { cellPhoneNumber }
    })
    if (!user) return null
    return User.fromPrimitives(user)
  }
}
