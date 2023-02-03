import { EventBus } from '../../../domain/EventBus'
import { ClientProxy } from '@nestjs/microservices'
import { Inject } from '@nestjs/common'
import { DomainEvent } from '../../../domain/DomainEvent'

export class RabbitMqEventBus implements EventBus {
  constructor(@Inject('EVENT_BUS_RMQ') private client: ClientProxy) {}

  async publish(events: Array<DomainEvent>): Promise<void> {
    const promises = events.map(async (event) => {
      return this.client.emit(event.eventName, event)
    })
    await Promise.all(promises)
  }
}
