import { DomainEvent } from '../../../shared/domain/DomainEvent'

type CreateUserDomainEventAttributes = {
  cellPhoneNumber: string
  id: string
}

export class UserCreatedDomainEvent extends DomainEvent {
  static EVENT_NAME = 'ecommerce.user.created'
  readonly attributes: CreateUserDomainEventAttributes
  constructor({
    attributes,
    aggregateId,
    eventId,
    occurredOn
  }: {
    attributes: CreateUserDomainEventAttributes
    aggregateId: string
    eventId?: string
    occurredOn?: Date
  }) {
    super({
      eventName: UserCreatedDomainEvent.EVENT_NAME,
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
    attributes: CreateUserDomainEventAttributes
  }) {
    return new UserCreatedDomainEvent(params)
  }
}
