export abstract class StringOptionalValueObject {
  readonly value: string | null

  constructor(value: string | undefined) {
    this.value = value || null
  }

  toStringNull(): string | null {
    return this.value
  }
}
