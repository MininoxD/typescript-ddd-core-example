import { MotherCreator } from './motherCreator'

export class CellPhoneNumberMother {
  static random(): string {
    return MotherCreator.random().phone.number('#########')
  }

  static invalidCellPhoneNumber(): string {
    return MotherCreator.random().phone.number('##-#####')
  }
}
