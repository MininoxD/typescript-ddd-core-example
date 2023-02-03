import { DomainEvent } from './DomainEvent'

export abstract class EventBus {
  abstract publish(events: Array<DomainEvent>): Promise<void>
}
