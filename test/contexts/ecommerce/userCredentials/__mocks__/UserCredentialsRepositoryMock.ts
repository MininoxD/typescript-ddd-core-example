import { UserCredentials } from '../../../../../src/contexts/ecommerce/userCredentials/domain/UserCredentials'
import { UserCredentialsRepository } from '../../../../../src/contexts/ecommerce/userCredentials/domain/UserCredentialsRepository'
import { Nullable } from '../../../../../src/contexts/shared/domain/Nullable'

export class UserCredentialsRepositoryMock
  implements UserCredentialsRepository
{
  private upsertMock: jest.Mock
  private sendMock: jest.Mock
  private findByIdUserMock: jest.Mock
  private userCredentials: Nullable<UserCredentials> = null
  constructor() {
    this.upsertMock = jest.fn()
    this.sendMock = jest.fn()
    this.findByIdUserMock = jest.fn()
  }
  async upsert(userCredentials: UserCredentials): Promise<void> {
    this.upsertMock(userCredentials)
  }
  async send(userCredentials: UserCredentials): Promise<void> {
    this.sendMock(userCredentials)
  }
  async findByIdUser(idUser: string): Promise<Nullable<UserCredentials>> {
    this.findByIdUserMock(idUser)
    return this.userCredentials
  }

  returnOnFindByIdUser(userCredentials: UserCredentials) {
    this.userCredentials = userCredentials
  }

  assertLastVerifyToken(idUser: string) {
    expect(this.findByIdUserMock).toHaveBeenCalledWith(idUser)
  }
}
