import { DomainEvent } from '../../../shared/domain/DomainEvent'

type UserCredentialsCellPhoneNumberVerifyDomainEventAttributes = {
  cellPhoneNumber: string
}
export class UserCredentialsCellPhoneNumberVerifyDomainEvent extends DomainEvent {
  static EVENT_NAME = 'ecommerce.userCredentials.cellPhoneNumberVerify'
  readonly attributes: UserCredentialsCellPhoneNumberVerifyDomainEventAttributes
  constructor({
    attributes,
    aggregateId,
    eventId,
    occurredOn
  }: {
    attributes: UserCredentialsCellPhoneNumberVerifyDomainEventAttributes
    aggregateId: string
    eventId?: string
    occurredOn?: Date
  }) {
    super({
      eventName: UserCredentialsCellPhoneNumberVerifyDomainEvent.EVENT_NAME,
      aggregateId,
      eventId,
      occurredOn
    })
    this.attributes = attributes
  }

  toPrimitives() {
    return this.attributes
  }

  static fromPrimitives(params: {
    aggregateId: string
    eventId: string
    occurredOn: Date
    attributes: UserCredentialsCellPhoneNumberVerifyDomainEventAttributes
  }) {
    return new UserCredentialsCellPhoneNumberVerifyDomainEvent(params)
  }
}
