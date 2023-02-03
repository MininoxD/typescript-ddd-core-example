import { UserCellPhoneNumberIsVerified } from '../domain/UserCellPhoneNumberIsVerified'
import { UserRepository } from '../domain/UserRepository'

export class UserCellPhoneNumberVerified {
  constructor(private userRepository: UserRepository) {}

  async run(idUser: string): Promise<void> {
    await this.userRepository.updateById(idUser, {
      cellPhoneNumberIsVerified: new UserCellPhoneNumberIsVerified(true)
    })
  }
}
