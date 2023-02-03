import { PrismaClient } from '@prisma/client'

export abstract class PostgresRepository {
  readonly prisma: PrismaClient
  constructor() {
    this.prisma = new PrismaClient()
  }
}
