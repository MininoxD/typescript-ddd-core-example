import {
  Body,
  Controller,
  Put,
  UsePipes,
  HttpCode,
  HttpStatus
} from '@nestjs/common'

import { UserCreator } from '../../../../contexts/ecommerce/users/application/UserCreator'
import { ZodValidationPipe } from '../../validator/zodValidationPipe'
import { UserCreateParametersSchema } from '../schemas/userCreateParametersSchema'
import { UserCreateParameters } from '../types/userParameter'

@Controller('users')
export class UserPutController {
  constructor(private userCreator: UserCreator) {}
  @Put('/:id')
  @UsePipes(new ZodValidationPipe(UserCreateParametersSchema))
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: UserCreateParameters): Promise<void> {
    await this.userCreator.run(body)
  }
}
