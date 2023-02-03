import { UserLogin } from '../../../../../src/contexts/ecommerce/users/application/UserLogin'
import EventBusMock from '../__mocks__/EventBusMock'
import { UserRepositoryMock } from '../__mocks__/UserRepositoryMock'
import { UserLoginRequestMother } from './UserLoginRequestMother'
import { UserMother } from './userMother'

describe('UserLogin', () => {
  let userRepository: UserRepositoryMock
  let eventBus: EventBusMock
  let userLogin: UserLogin
  beforeEach(() => {
    userRepository = new UserRepositoryMock()
    eventBus = new EventBusMock()
    userLogin = new UserLogin(userRepository, eventBus)
  })
  it('should be able to login', async () => {
    const request = UserLoginRequestMother.random()
    const user = UserMother.fromRequestLogin(request)
    userRepository.returnOnFindUserByCellPhoneNumber(user)
    await userLogin.run(request)
    userRepository.assertLoginUser(user)
  })
})
