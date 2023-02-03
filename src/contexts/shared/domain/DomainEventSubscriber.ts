import { DomainEvent } from './DomainEvent'

export abstract class DomainEventSubscriber<T extends DomainEvent> {
  abstract on(domainEvent: T): Promise<void>
}
