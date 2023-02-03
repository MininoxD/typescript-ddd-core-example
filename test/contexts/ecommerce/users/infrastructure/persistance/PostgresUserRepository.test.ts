/* import { PostgresUserRepository } from '../../../../../../src/contexts/ecommerce/users/infrastructure/PostgresUserRepository'
import { UserMother } from '../../application/userMother'
describe('Postgres User Repository', () => {
  let repository: PostgresUserRepository
  beforeEach(() => {
    repository = new PostgresUserRepository()
  })
  it('should save a User', async () => {
    const userExpected = UserMother.random()
    await repository.save(userExpected)
    const user = await repository.findbyId(userExpected.id.value)
    expect(user).toEqual(userExpected)
  })
})
 */
