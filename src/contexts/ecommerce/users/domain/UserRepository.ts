import { Nullable } from '../../../shared/domain/Nullable'
import { User } from './User'

export abstract class UserRepository {
  abstract save(user: User): Promise<void>
  abstract findUserByCellPhoneNumber(
    cellPhoneNumber: string
  ): Promise<Nullable<User>>
  abstract updateById(
    idUser: string,
    data: Partial<Omit<User, 'id'>>
  ): Promise<void>
}
