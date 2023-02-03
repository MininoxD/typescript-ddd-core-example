import { MotherCreator } from './motherCreator'

export class UuidMother {
  static random(): string {
    return MotherCreator.random().datatype.uuid()
  }
}
