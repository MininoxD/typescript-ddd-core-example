import { Nullable } from '../../../shared/domain/Nullable'
import { UserCredentials } from './UserCredentials'

export abstract class UserCredentialsRepository {
  abstract upsert(userCredentials: UserCredentials): Promise<void>
  abstract send(userCredentials: UserCredentials): Promise<void>
  abstract findByIdUser(idUser: string): Promise<Nullable<UserCredentials>>
}
