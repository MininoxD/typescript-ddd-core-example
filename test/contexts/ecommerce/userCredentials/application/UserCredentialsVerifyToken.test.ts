import { UserCredentialsVerifyToken } from '../../../../../src/contexts/ecommerce/userCredentials/application/UserCredentialsVerifyToken'
import { UserMother } from '../../users/application/userMother'
import EventBusMock from '../../users/__mocks__/EventBusMock'
import { UserRepositoryMock } from '../../users/__mocks__/UserRepositoryMock'
import { UserCredentialsMother } from '../domain/UserCredentialsMother'
import { UserCredentialsRepositoryMock } from '../__mocks__/UserCredentialsRepositoryMock'
import { UserCredentialsVerifyTokenRequestMother } from './UserCredentialsVerifyTokenRequestMother'

describe('UserCredentialsVerifyToken', () => {
  let userRepository: UserRepositoryMock
  let userCredentialsRepository: UserCredentialsRepositoryMock
  let userCredentialsVerifyToken: UserCredentialsVerifyToken
  let eventBus: EventBusMock
  beforeEach(() => {
    eventBus = new EventBusMock()
    userRepository = new UserRepositoryMock()
    userCredentialsRepository = new UserCredentialsRepositoryMock()
    userCredentialsVerifyToken = new UserCredentialsVerifyToken(
      userRepository,
      userCredentialsRepository,
      eventBus
    )
  })

  it('should verify token', async () => {
    const request = UserCredentialsVerifyTokenRequestMother.random()
    const user = UserMother.fromRequestLoginVerified(request)
    const userCredentials = UserCredentialsMother.fromUserVerify(
      user.id,
      request.token
    )
    userRepository.returnOnFindUserByCellPhoneNumber(user)
    userCredentialsRepository.returnOnFindByIdUser(userCredentials)
    await userCredentialsVerifyToken.run(request)
    userCredentialsRepository.assertLastVerifyToken(user.id.value)
  })
})
