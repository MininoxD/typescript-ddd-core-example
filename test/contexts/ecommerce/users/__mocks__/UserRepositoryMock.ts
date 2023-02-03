import { User } from '../../../../../src/contexts/ecommerce/users/domain/User'
import { UserRepository } from '../../../../../src/contexts/ecommerce/users/domain/UserRepository'
import { Nullable } from '../../../../../src/contexts/shared/domain/Nullable'
export class UserRepositoryMock implements UserRepository {
  saveMock: jest.Mock
  findUserByCellPhoneNumberMock: jest.Mock
  private user: Nullable<User> = null
  constructor() {
    this.saveMock = jest.fn()
  }

  async save(user: User): Promise<void> {
    this.saveMock(user)
  }

  async findUserByCellPhoneNumber(
    cellPhoneNumber: string
  ): Promise<Nullable<User>> {
    return this.user
  }

  returnOnFindUserByCellPhoneNumber(user: User): void {
    this.user = user
  }
  assertSaveHaveBeenCalledWith(expected: User): void {
    expect(this.saveMock).toHaveBeenCalledWith(expected)
  }

  assertLastSavedUserIs(expected: User): void {
    const mock = this.saveMock.mock
    const lastSavedCourse = mock.calls[mock.calls.length - 1][0] as User
    expect(lastSavedCourse).toBeInstanceOf(User)
    expect(lastSavedCourse.toPrimitives()).toEqual(expected.toPrimitives())
  }

  assertLoginUser(expected: User): void {
    expect(expected).toEqual(this.user)
  }
}
