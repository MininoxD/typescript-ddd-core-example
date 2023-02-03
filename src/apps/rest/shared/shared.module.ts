import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { EventBus } from '../../../contexts/shared/domain/EventBus'
import { RabbitMqEventBus } from '../../../contexts/shared/infrastructure/EventBus/RabbitMq/RabbitMqEventBus'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EVENT_BUS_RMQ',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'GEZ',
          queueOptions: {
            durable: false
          }
        }
      }
    ])
  ],
  providers: [
    {
      provide: EventBus,
      useClass: RabbitMqEventBus
    }
  ],
  exports: [EventBus]
})
export class SharedModule {}
