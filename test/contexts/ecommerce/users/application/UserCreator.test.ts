import { UserCreator } from '../../../../../src/contexts/ecommerce/users/application/UserCreator'
import EventBusMock from '../__mocks__/EventBusMock'
import { UserRepositoryMock } from '../__mocks__/UserRepositoryMock'
import { CreateUserRequestMother } from './CreateUserRequestMother'
import { UserMother } from './userMother'
describe('UserCreator', () => {
  let repository: UserRepositoryMock
  let creator: UserCreator
  let eventBus: EventBusMock
  beforeEach(() => {
    repository = new UserRepositoryMock()
    eventBus = new EventBusMock()
    creator = new UserCreator(repository, eventBus)
  })

  it('should create a valid user', async () => {
    const request = CreateUserRequestMother.random()
    const user = UserMother.fromRequest(request)
    await creator.run(request)
    repository.assertSaveHaveBeenCalledWith(user)
  })

  /*   it('should throw error if cell phone numer is contains letters', async () => {
    expect(() => {
      const request = CreateUserRequestMother.invalidRequest()
      const user = UserMother.fromRequest(request)
      creator.run(request)
      repository.assertLastSavedUserIs(user)
    }).toThrow(InvalidArgumentError)
  }) */
})
