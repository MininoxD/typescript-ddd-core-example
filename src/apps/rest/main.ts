import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions } from '@nestjs/microservices'
import { Transport } from '@nestjs/microservices/enums'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'GEZ',
      queueOptions: {
        durable: false
      }
    }
  })
  await app.startAllMicroservices()
  await app.listen(5000)
}
bootstrap()
